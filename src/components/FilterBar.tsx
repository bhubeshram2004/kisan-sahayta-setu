import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Filter, RotateCcw } from "lucide-react";

interface FilterBarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  language: 'en' | 'ta';
  totalSchemes: number;
  filteredCount: number;
}

const categories = ['subsidy', 'loan', 'equipment', 'insurance'];

const categoryLabels = {
  en: {
    all: 'All Schemes',
    subsidy: 'Subsidies',
    loan: 'Loans',
    equipment: 'Equipment',
    insurance: 'Insurance'
  },
  ta: {
    all: 'அனைத்து திட்டங்கள்',
    subsidy: 'மானியங்கள்',
    loan: 'கடன்கள்',
    equipment: 'உபகரணங்கள்',
    insurance: 'காப்பீடு'
  }
};

const categoryColors = {
  subsidy: 'bg-scheme-subsidy hover:bg-scheme-subsidy/80',
  loan: 'bg-scheme-loan hover:bg-scheme-loan/80',
  equipment: 'bg-scheme-equipment hover:bg-scheme-equipment/80',
  insurance: 'bg-scheme-insurance hover:bg-scheme-insurance/80'
};

export const FilterBar = ({ 
  selectedCategory, 
  onCategoryChange, 
  language, 
  totalSchemes, 
  filteredCount 
}: FilterBarProps) => {
  const labels = categoryLabels[language];

  return (
    <Card className="p-6 mb-8 bg-card border border-border/50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">
            {language === 'ta' ? 'திட்டங்களை வடிகட்டவும்' : 'Filter Schemes'}
          </h2>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-sm">
            {language === 'ta' 
              ? `${filteredCount} / ${totalSchemes} திட்டங்கள்` 
              : `${filteredCount} of ${totalSchemes} schemes`
            }
          </Badge>
          {selectedCategory && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onCategoryChange(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {language === 'ta' ? 'அனைத்தையும் காட்டு' : 'Show All'}
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => onCategoryChange(null)}
          className={selectedCategory === null ? 'bg-primary hover:bg-primary-hover' : ''}
        >
          {labels.all}
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className={
              selectedCategory === category 
                ? `${categoryColors[category as keyof typeof categoryColors]} text-white border-0` 
                : 'hover:bg-muted'
            }
          >
            {labels[category as keyof typeof labels]}
          </Button>
        ))}
      </div>
    </Card>
  );
};