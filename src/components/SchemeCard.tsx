import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scheme } from "@/data/schemes";
import { Calendar, FileText, Users } from "lucide-react";

interface SchemeCardProps {
  scheme: Scheme;
  language: 'en' | 'ta';
  onViewDetails: (scheme: Scheme) => void;
}

const categoryColors = {
  subsidy: 'bg-scheme-subsidy text-white',
  loan: 'bg-scheme-loan text-white',
  equipment: 'bg-scheme-equipment text-white',
  insurance: 'bg-scheme-insurance text-white'
};

const categoryLabels = {
  en: {
    subsidy: 'Subsidy',
    loan: 'Loan',
    equipment: 'Equipment',
    insurance: 'Insurance'
  },
  ta: {
    subsidy: 'மானியம்',
    loan: 'கடன்',
    equipment: 'உபகரணம்',
    insurance: 'காப்பீடு'
  }
};

export const SchemeCard = ({ scheme, language, onViewDetails }: SchemeCardProps) => {
  const title = language === 'ta' ? scheme.titleTamil : scheme.title;
  const description = language === 'ta' ? scheme.descriptionTamil : scheme.description;
  const categoryLabel = categoryLabels[language][scheme.category];

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <Badge className={`${categoryColors[scheme.category]} font-medium px-3 py-1`}>
            {categoryLabel}
          </Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(scheme.lastDate).toLocaleDateString(language === 'ta' ? 'ta-IN' : 'en-IN')}
          </div>
        </div>
        <CardTitle className="text-lg leading-tight line-clamp-2 text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm text-foreground/80 line-clamp-3 mb-4 leading-relaxed">
          {description}
        </CardDescription>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            <span>{language === 'ta' ? 'விவசாயிகள்' : 'Farmers'}</span>
          </div>
          <div className="flex items-center">
            <FileText className="w-3 h-3 mr-1" />
            <span>{language === 'ta' ? 'விவரங்கள்' : 'Details'}</span>
          </div>
        </div>

        <Button 
          onClick={() => onViewDetails(scheme)}
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium"
        >
          {language === 'ta' ? 'முழு விவரங்களைக் காண்க' : 'View Full Details'}
        </Button>
      </CardContent>
    </Card>
  );
};