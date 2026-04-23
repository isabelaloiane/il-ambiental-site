interface StatCounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  style?: React.CSSProperties;
}

export function StatCounter({ target, label, prefix = "", suffix = "", style }: StatCounterProps) {
  return (
    <div className="stat-item" style={style}>
      <span
        className="stat-number"
        data-target={target}
        data-prefix={prefix || undefined}
        data-suffix={suffix || undefined}
        dangerouslySetInnerHTML={{ __html: "0" }}
      />
      <span className="stat-label">{label}</span>
    </div>
  );
}
