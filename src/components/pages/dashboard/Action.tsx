import { Card, CardContent } from "@/components/ui/card";
const Action = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <Card className="bg-card/70 border-border/60">
    <CardContent>
      <div className="flex flex-col items-center gap-3">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="size-6" />
        </span>
        <div className="text-sm font-medium text-center">{label}</div>
      </div>
    </CardContent>
  </Card>
);
export default Action;
