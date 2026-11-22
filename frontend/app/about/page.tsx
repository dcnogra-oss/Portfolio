import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <main className="mx-auto max-w-2xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <Badge variant="secondary">About Me</Badge>
        <h1 className="text-3xl font-bold tracking-tight">
          Student &amp; Aspiring Developer
        </h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Background</CardTitle>
          <CardDescription>
            2nd-Year Computer Science Student • Naga College Foundation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            I am currently a 2nd-year Computer Science student at Naga College
            Foundation, where I am actively pursuing various fields of
            technology and programming to attain skills and knowledge that will
            shape a career in whatever field I choose to pursue in the future.
          </p>
          <p>
            At present i am focused on exploring learning and attaining skills in what my course offers me discovering differnent career paths that i might want to pursue in the future. furthermore devling into the possibilitties of building a caeer in the field of programming and technology. I am also open to exploring other fields that may interest me in the future.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}