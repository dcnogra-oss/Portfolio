import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music } from "lucide-react";

const skills = ["HTML", "CSS", "C Language", "Python"];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Dave Christopher P. Nogra
        </h1>
        <p className="text-muted-foreground text-base">
          Bachelor of Science in Computer Science Student at Naga College
          Foundation
        </p>
      </div>

      {/* About Me Card */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            I am currently a 2nd-year Computer Science student at Naga CollegeFoundation, where I am actively pursuing various fields of technology and programming to atain skills and knowledge that will shape a career in whatever field i choose to pursue in the future. 
          </p>
          <p>
          </p>
          <p>
          </p>
        </CardContent>
      </Card>

      {/* Skills Card */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}