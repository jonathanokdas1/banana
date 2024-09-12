import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function CardThisMonth() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Essa semana</CardDescription>
        <CardTitle className="text-4xl">R$5,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+10% que semana passada</div>
      </CardContent>
      <CardFooter>
        <Progress value={10} />
      </CardFooter>
    </Card>
  );
}
