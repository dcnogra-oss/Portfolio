import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    institution: "Naga College Foundation",
    degree: "Bachelor of Science in Computer Science",
    period: "Present",
    description: "Currently in 2nd year, studying core computer science concepts, programming fundamentals, and database systems.",
    highlights: [
      "Focused on C Language, Python, and Web Development (HTML/CSS)",
    ]
  },
  {
    institution: "Senior High School - Naga College Foundation",
    degree: "TVL - Information and Communications Technology (ICT)",
    highlights: [
      "National Certificate II (NC II) in Computer Systems Servicing",
      "Completed training in computer hardware, software installation, and troubleshooting",
    ]
  },
  {
    institution: "Junior High School - Naga College Foundation",
    degree: "High School Diploma",
  }
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background</p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.institution}</CardTitle>
                    <CardDescription>{item.degree}</CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground sm:text-right shrink-0">
                  {item.period}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                    <Award className="h-4 w-4 text-primary" /> Key Highlights
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}