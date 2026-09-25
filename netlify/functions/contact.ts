/**
 * Netlify Function — POST /api/contact  (também: /api/contato)
 * Recebe o formulário de contato e envia e-mail via Gmail SMTP.
 *
 * Variáveis de ambiente necessárias (configurar no painel do Netlify):
 *   EMAIL_USER = contate.ilambiental@gmail.com
 *   EMAIL_PASS = <senha de app de 16 dígitos gerada no Google>
 */

import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

// Rate limiter em memória: máx 5 requisições por IP por minuto
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateMap) {
    if (now > entry.resetAt) rateMap.delete(ip);
  }
}, 5 * 60_000);

function sanitize(value: unknown): string {
  return String(value ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

export const handler: Handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: "Method not allowed" }),
    };
  }

  const ip =
    event.headers["x-forwarded-for"]?.split(",")[0]?.trim() ?? "unknown";

  if (checkRateLimit(ip)) {
    return {
      statusCode: 429,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Muitas tentativas. Aguarde 1 minuto e tente novamente.",
      }),
    };
  }

  let body: Record<string, unknown> = {};
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    // body permanece vazio
  }

  // Aceita nomes em português (formulário atual) e inglês (legado)
  const nome = String(body.nome ?? body.name ?? "").trim();
  const empresa = String(body.empresa ?? body.company ?? "").trim();
  const municipio = String(body.municipio ?? "").trim();
  const email = String(body.email ?? "").trim();
  const telefone = String(body.telefone ?? body.phone ?? "").trim();
  const assunto = String(body.assunto ?? "").trim();
  const mensagem = String(body.mensagem ?? body.message ?? "").trim();

  if (!nome || !email) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Preencha todos os campos obrigatórios.",
      }),
    };
  }

  const cleanNome = sanitize(nome);
  const cleanEmpresa = sanitize(empresa) || "Não informada";
  const cleanMunicipio = sanitize(municipio) || "Não informado";
  const cleanEmail = sanitize(email);
  const cleanTelefone = sanitize(telefone) || "Não informado";
  const cleanAssunto = sanitize(assunto) || "Não informado";
  const cleanMensagem = sanitize(mensagem) || "(sem mensagem)";

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error("[contact] EMAIL_USER ou EMAIL_PASS não configurados.");
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message:
          "Erro de configuração no servidor. Entre em contato diretamente pelo WhatsApp.",
      }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: emailUser, pass: emailPass },
  });

  const assuntoLabel: Record<string, string> = {
    vertice: "Diagnóstico Vértice (gratuito)",
    sentinela: "Programa Sentinela (gestão contínua)",
    outorga: "Outorga e uso da água",
    licenciamento: "Licenciamento ambiental",
    relatorios: "Relatórios ambientais (RIAA, RCA)",
    pgrs: "PGRS e gestão de resíduos",
    notificacao: "Notificação ou exigência de órgão",
    outro: "Outro assunto",
  };

  const assuntoTexto = assuntoLabel[cleanAssunto] || cleanAssunto;

  const htmlBody = `
    <h2 style="color:#452816;font-family:sans-serif;margin-bottom:16px;">
      Nova mensagem recebida pelo site IL Ambiental
    </h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;width:180px;">Assunto</td>
        <td style="padding:10px;border:1px solid #ddd;">${assuntoTexto}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;">Nome</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanNome}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;">Empresa</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanEmpresa}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;">Município</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanMunicipio}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;">E-mail</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanEmail}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;">WhatsApp</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanTelefone}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;vertical-align:top;">Mensagem</td>
        <td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap;">${cleanMensagem}</td>
      </tr>
    </table>
    <br>
    <p style="color:#888;font-size:12px;font-family:sans-serif;">
      Mensagem enviada automaticamente pelo formulário do site IL Ambiental.
    </p>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Site IL Ambiental" <${emailUser}>`,
      to: "contato@ilambiental.com.br",
      replyTo: cleanEmail,
      subject: `Nova mensagem do site — ${assuntoTexto} — ${cleanNome}`,
      html: htmlBody,
    });

    console.log("[contact] E-mail enviado. messageId:", info.messageId);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "E-mail enviado com sucesso" }),
    };
  } catch (err: unknown) {
    const error = err as { message?: string };
    console.error("[contact] ERRO no envio:", error.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message:
          "Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.",
      }),
    };
  }
};
