import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Disc3, Music, Volume2, Headphones, Sparkles } from "lucide-react";

const musicCategories = [
  { label: "Study & Focus", genre: "OPM / R&B" },
  { label: "Daily Favorite", genre: "Indie Pop / Rock Alternative" },
  { label: "Unwind & Relax", genre: "Hip-Hop"}
];

export default function Hobbies() {
  return (
    <Card className="border-border/60 shadow-sm overflow-hidden">
      <CardHeader className="border-b border-border/40 bg-muted/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Music className="h-5 w-5 text-primary" /> Music
          </CardTitle>
          <Badge variant="secondary" className="gap-1.5 text-xs">
            <Disc3 className="h-3.5 w-3.5 animate-spin text-primary" />
            Always Listening
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Featured Music Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-muted/50 to-background border border-primary/20 flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 bg-primary/20 text-primary rounded-xl shrink-0 border border-primary/30">
            <Headphones className="h-7 w-7" />
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <h3 className="font-semibold text-foreground text-base">
              My Daily Fuel
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Music plays an essential role in my life. It drives my concentration during computer science study sessions and serves as my main way to unwind and recharge.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
            <Volume2 className="h-4 w-4 text-primary" />
            <div className="w-16 h-1.5 bg-primary/20 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Music Preferences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {musicCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg border border-border/50 bg-card space-y-1.5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> {item.label}
              </div>
              <p className="text-sm font-medium text-foreground">
                {item.genre}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}