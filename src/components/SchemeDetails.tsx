import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Scheme } from "@/data/schemes";
import { Calendar, CheckCircle, FileText, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SchemeDetailsProps {
  scheme: Scheme | null;
  language: 'en' | 'ta';
  open: boolean;
  onClose: () => void;
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

export const SchemeDetails = ({ scheme, language, open, onClose }: SchemeDetailsProps) => {
  if (!scheme) return null;

  const title = language === 'ta' ? scheme.titleTamil : scheme.title;
  const description = language === 'ta' ? scheme.descriptionTamil : scheme.description;
  const eligibility = language === 'ta' ? scheme.eligibilityTamil : scheme.eligibility;
  const benefits = language === 'ta' ? scheme.benefitsTamil : scheme.benefits;
  const applicationProcess = language === 'ta' ? scheme.applicationProcessTamil : scheme.applicationProcess;
  const categoryLabel = categoryLabels[language][scheme.category];

  const labels = {
    en: {
      description: 'Description',
      eligibility: 'Eligibility Criteria',
      benefits: 'Key Benefits',
      applicationProcess: 'Application Process',
      lastDate: 'Last Date to Apply'
    },
    ta: {
      description: 'விளக்கம்',
      eligibility: 'தகுதி நிபந்தனைகள்',
      benefits: 'முக்கிய நன்மைகள்',
      applicationProcess: 'விண்ணப்ப செயல்முறை',
      lastDate: 'விண்ணப்பிக்க கடைசி தேதி'
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader className="pb-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <Badge className={`${categoryColors[scheme.category]} font-medium px-3 py-1`}>
              {categoryLabel}
            </Badge>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">
                {labels[language].lastDate}: {new Date(scheme.lastDate).toLocaleDateString(language === 'ta' ? 'ta-IN' : 'en-IN')}
              </span>
            </div>
          </div>
          <DialogTitle className="text-xl text-primary text-left leading-relaxed">
            {title}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Description */}
            <div>
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{labels[language].description}</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">{description}</p>
            </div>

            {/* Eligibility */}
            <div>
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{labels[language].eligibility}</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">{eligibility}</p>
            </div>

            {/* Benefits */}
            <div>
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{labels[language].benefits}</h3>
              </div>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-agricultural-green rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Process */}
            <div className="pb-2">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{labels[language].applicationProcess}</h3>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-foreground/80 leading-relaxed">{applicationProcess}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};