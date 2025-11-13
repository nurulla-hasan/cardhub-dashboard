
const SmallKpi = ({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) => (
  <div className="rounded-md border border-border/60 bg-card/60 p-4">
    <div className="text-[11px] text-muted-foreground">{title}</div>
    <div className="mt-1 text-[15px] font-semibold text-foreground">
      {value}
    </div>
    <div className="text-[11px] text-muted-foreground mt-1">{sub}</div>
  </div>
);
export default SmallKpi;
