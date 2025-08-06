import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, IndianRupee, Shield } from "lucide-react";

interface StatsBarProps {
  language: 'en' | 'ta';
}

export const StatsBar = ({ language }: StatsBarProps) => {
  const stats = {
    en: [
      {
        icon: TrendingUp,
        label: "Active Schemes",
        value: "150+",
        description: "Government schemes available"
      },
      {
        icon: Users,
        label: "Beneficiaries",
        value: "10M+",
        description: "Farmers benefited nationwide"
      },
      {
        icon: IndianRupee,
        label: "Financial Support",
        value: "₹50,000Cr+",
        description: "Disbursed annually"
      },
      {
        icon: Shield,
        label: "Coverage",
        value: "28 States",
        description: "Pan-India implementation"
      }
    ],
    ta: [
      {
        icon: TrendingUp,
        label: "செயலில் உள்ள திட்டங்கள்",
        value: "150+",
        description: "அரசு திட்டங்கள் கிடைக்கின்றன"
      },
      {
        icon: Users,
        label: "பயனாளிகள்",
        value: "1 கோடி+",
        description: "நாடு முழுவதும் பயனடைந்த விவசாயிகள்"
      },
      {
        icon: IndianRupee,
        label: "நிதி உதவி",
        value: "₹50,000 கோடி+",
        description: "ஆண்டுதோறும் வழங்கப்படுகிறது"
      },
      {
        icon: Shield,
        label: "கவரேஜ்",
        value: "28 மாநிலங்கள்",
        description: "இந்தியா முழுவதும் செயல்படுத்தல்"
      }
    ]
  };

  const currentStats = stats[language];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {currentStats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="bg-gradient-to-br from-card to-muted/20 border-primary/10 hover:shadow-md transition-all">
            <CardContent className="p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};