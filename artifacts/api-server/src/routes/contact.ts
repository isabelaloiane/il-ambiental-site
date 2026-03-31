/*
 * CONFIGURAÇÃO OBRIGATÓRIA — SENHA DE APP DO GMAIL
 * ================================================
 * Para que o envio de e-mail funcione, configure dois Secrets no Replit:
 *
 * EMAIL_USER = contate.ilambiental@gmail.com
 * EMAIL_PASS = <senha de app de 16 caracteres gerada no Google>
 *
 * Como gerar a senha de app:
 *   1. Acesse: https://myaccount.google.com/security
 *   2. Ative "Verificação em duas etapas" (se ainda não estiver ativa)
 *   3. Acesse: https://myaccount.google.com/apppasswords
 *   4. Crie uma senha: "E-mail" > "Outro" > nome: "Site IL Ambiental"
 *   5. Copie a senha de 16 caracteres gerada
 *   6. No Replit, vá em Secrets > adicione EMAIL_PASS com esse valor
 *
 * Sem essa configuração o envio NÃO funcionará.
 */

import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

// In-memory rate limiter: max 5 requests per IP per minute
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

// Periodically clean up expired entries to prevent memory growth
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateMap) {
    if (now > entry.resetAt) rateMap.delete(ip);
  }
}, 5 * 60_000);

// Strip HTML tags and dangerous characters, cap length
function sanitize(value: unknown): string {
  return String(value ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

router.post("/contact", async (req, res) => {
  const forwarded = req.headers["x-forwarded-for"] as string | undefined;
  const ip = forwarded?.split(",")[0]?.trim() ?? req.socket.remoteAddress ?? "unknown";

  if (checkRateLimit(ip)) {
    res.status(429).json({
      success: false,
      message: "Muitas tentativas. Aguarde 1 minuto e tente novamente.",
    });
    return;
  }

  const { name, company, phone, message } = req.body as Record<string, unknown>;

  if (!String(name ?? "").trim() || !String(phone ?? "").trim() || !String(message ?? "").trim()) {
    res.status(400).json({
      success: false,
      message: "Preencha todos os campos obrigatórios.",
    });
    return;
  }

  const cleanName = sanitize(name);
  const cleanCompany = sanitize(company) || "Não informada";
  const cleanPhone = sanitize(phone);
  const cleanMessage = sanitize(message);

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error("[contact] EMAIL_USER or EMAIL_PASS not configured in Secrets.");
    res.status(500).json({
      success: false,
      message: "Erro de configuração no servidor. Entre em contato diretamente pelo WhatsApp.",
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: emailUser, pass: emailPass },
  });

  const htmlBody = `
    <h2 style="color:#452816;font-family:sans-serif;margin-bottom:16px;">
      Nova mensagem recebida pelo site IL Ambiental
    </h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;width:180px;">Nome Completo</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanName}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;">Empresa</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanCompany}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;">Telefone / WhatsApp</td>
        <td style="padding:10px;border:1px solid #ddd;">${cleanPhone}</td>
      </tr>
      <tr>
        <td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f5f0e8;vertical-align:top;">Necessidade</td>
        <td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap;">${cleanMessage}</td>
      </tr>
    </table>
    <br>
    <p style="color:#888;font-size:12px;font-family:sans-serif;">
      Mensagem enviada automaticamente pelo formulário do site IL Ambiental.
    </p>
  `;

  try {
    await transporter.sendMail({
      from: `"Site IL Ambiental" <${emailUser}>`,
      to: "contate.ilambiental@gmail.com",
      subject: `Nova mensagem do site — ${cleanName}`,
      html: htmlBody,
    });

    res.json({ success: true, message: "E-mail enviado com sucesso" });
  } catch (err) {
    console.error("[contact] Error sending email:", err);
    res.status(500).json({
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.",
    });
  }
});

export default router;
