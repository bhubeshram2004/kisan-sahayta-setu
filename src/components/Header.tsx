import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sprout, Globe } from "lucide-react";

interface HeaderProps {
  language: 'en' | 'ta';
  onLanguageChange: (lang: 'en' | 'ta') => void;
}

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const content = {
    en: {
      title: "Agricultural Schemes Information Portal",
      subtitle: "Empowering Farmers with Government Scheme Information",
      description: "Access comprehensive information about government agricultural schemes, subsidies, loans, and support programs available for farmers across India."
    },
    ta: {
      title: "வேளாண் திட்டங்கள் தகவல் போர்ட்டல்",
      subtitle: "அரசு திட்ட தகவல்களுடன் விவசாயிகளை வலுப்படுத்துதல்",
      description: "இந்தியா முழுவதும் விவசாயிகளுக்கு கிடைக்கும் அரசு வேளாண் திட்டங்கள், மானியங்கள், கடன்கள் மற்றும் ஆதரவு திட்டங்கள் பற்றிய விரிவான தகவல்களை அணுகவும்."
    }
  };

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-full">
              <Sprout className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {content[language].title}
              </h1>
              <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                Government of India Initiative
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <Button
              variant={language === 'en' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onLanguageChange('en')}
              className={language === 'en' ? 'bg-white text-primary' : 'text-white hover:bg-white/20'}
            >
              English
            </Button>
            <Button
              variant={language === 'ta' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onLanguageChange('ta')}
              className={language === 'ta' ? 'bg-white text-primary' : 'text-white hover:bg-white/20'}
            >
              தமிழ்
            </Button>
          </div>
        </div>

        <div className="max-w-4xl">
          <p className="text-lg md:text-xl mb-2 font-medium">
            {content[language].subtitle}
          </p>
          <p className="text-white/90 leading-relaxed">
            {content[language].description}
          </p>
        </div>
      </div>
    </header>
  );
};