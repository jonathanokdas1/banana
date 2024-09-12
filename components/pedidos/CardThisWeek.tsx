import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function CardThisWeek() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Hoje</CardDescription>
        <CardTitle className="text-4xl">R$1,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+25% que ontem</div>
      </CardContent>
      <CardFooter>
        <Progress value={25} />
      </CardFooter>
    </Card>
  );
}
