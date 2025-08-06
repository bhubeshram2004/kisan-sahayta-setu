import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import { StatsBar } from "@/components/StatsBar";
import { SchemeCard } from "@/components/SchemeCard";
import { SchemeDetails } from "@/components/SchemeDetails";
import { schemes, Scheme } from "@/data/schemes";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const filteredSchemes = useMemo(() => {
    if (!selectedCategory) return schemes;
    return schemes.filter(scheme => scheme.category === selectedCategory);
  }, [selectedCategory]);

  const handleViewDetails = (scheme: Scheme) => {
    setSelectedScheme(scheme);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedScheme(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        <StatsBar language={language} />
        
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          language={language}
          totalSchemes={schemes.length}
          filteredCount={filteredSchemes.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              language={language}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {language === 'ta' 
                ? 'தேர்ந்தெடுக்கப்பட்ட வகையில் திட்டங்கள் எதுவும் கிடைக்கவில்லை'
                : 'No schemes found for the selected category'
              }
            </p>
          </div>
        )}
      </div>

      <SchemeDetails
        scheme={selectedScheme}
        language={language}
        open={showDetails}
        onClose={handleCloseDetails}
      />
    </div>
  );
};

export default Index;
