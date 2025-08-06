export interface Scheme {
  id: number;
  title: string;
  titleTamil: string;
  category: 'subsidy' | 'loan' | 'equipment' | 'insurance';
  description: string;
  descriptionTamil: string;
  eligibility: string;
  eligibilityTamil: string;
  lastDate: string;
  benefits: string[];
  benefitsTamil: string[];
  applicationProcess: string;
  applicationProcessTamil: string;
}

export const schemes: Scheme[] = [
  {
    id: 1,
    title: "Pradhan Mantri Kisan Samman Nidhi",
    titleTamil: "பிரதான் மந்திரி கிசான் சம்மான் நிதி",
    category: "subsidy",
    description: "A central sector scheme that provides income support of ₹6,000 per year to farmer families with cultivable land, paid in three equal installments of ₹2,000 each.",
    descriptionTamil: "வேளாண் நிலம் உள்ள விவசாயிகள் குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 வருமான ஆதரவு வழங்கும் மத்திய திட்டம். இது மூன்று சம தவணைகளாக ₹2,000 வீதம் வழங்கப்படும்.",
    eligibility: "Small and marginal farmers with cultivable land. Family should have combined land holding of up to 2 hectares.",
    eligibilityTamil: "வேளாண் நிலம் உள்ள சிறு மற்றும் குறு விவசாயிகள். குடும்பத்தின் மொத்த நில உடைமை 2 ஹெக்டேர் வரை இருக்க வேண்டும்.",
    lastDate: "2024-12-31",
    benefits: [
      "₹6,000 annual income support",
      "Direct bank transfer",
      "No application fee",
      "Continuous support"
    ],
    benefitsTamil: [
      "ஆண்டுக்கு ₹6,000 வருமான ஆதரவு",
      "நேரடி வங்கி பரிமாற்றம்",
      "விண்ணப்ப கட்டணம் இல்லை",
      "தொடர்ச்சியான ஆதரவு"
    ],
    applicationProcess: "Visit nearest Common Service Center or official PM-KISAN website. Required documents: Aadhaar, bank details, land records.",
    applicationProcessTamil: "அருகில் உள்ள பொது சேவை மையம் அல்லது PM-KISAN இணையதளத்தைப் பார்வையிடவும். தேவையான ஆவணங்கள்: ஆதார், வங்கி விவரங்கள், நில பதிவுகள்."
  },
  {
    id: 2,
    title: "Kisan Credit Card Scheme",
    titleTamil: "கிசான் கிரெடிட் கார்ட் திட்டம்",
    category: "loan",
    description: "Provides farmers with timely access to credit for their cultivation and other needs at reasonable interest rates.",
    descriptionTamil: "விவசாயிகளுக்கு அவர்களின் பயிர்ச்செய்கை மற்றும் பிற தேவைகளுக்கு நியாயமான வட்டி விகிதத்தில் கடன் வசதி வழங்கும் திட்டம்.",
    eligibility: "All farmers including tenant farmers, sharecroppers, and oral lessees. Must have valid land documents or cultivation proof.",
    eligibilityTamil: "குத்தகைதாரர்கள், பங்குதாரர்கள் மற்றும் வாய்மொழி குத்தகைதாரர்கள் உட்பட அனைத்து விவசாயிகளும். செல்லுபடியாகும் நில ஆவணங்கள் அல்லது சாகுபடி ஆதாரம் இருக்க வேண்டும்.",
    lastDate: "2024-12-31",
    benefits: [
      "Credit limit up to ₹3 lakh",
      "3% interest subsidy",
      "Flexible repayment terms",
      "Multi-purpose credit facility"
    ],
    benefitsTamil: [
      "₹3 லட்சம் வரை கடன் வரம்பு",
      "3% வட்டி மானியம்",
      "நெகிழ்வான திருப்பிச் செலுத்தல் விதிமுறைகள்",
      "பல்நோக்கு கடன் வசதி"
    ],
    applicationProcess: "Apply at any commercial bank, RRB, or cooperative bank. Submit KYC documents and land records.",
    applicationProcessTamil: "எந்தவொரு வணிக வங்கி, RRB அல்லது கூட்டுறவு வங்கியிலும் விண்ணப்பிக்கவும். KYC ஆவணங்கள் மற்றும் நில பதிவுகளை சமர்ப்பிக்கவும்."
  },
  {
    id: 3,
    title: "Farm Mechanization Sub-Mission",
    titleTamil: "பண்ணை இயந்திரமயமாக்கல் துணை பணி",
    category: "equipment",
    description: "Provides financial assistance for purchase of agricultural machinery and equipment to increase farm mechanization.",
    descriptionTamil: "பண்ணை இயந்திரமயமாக்கலை அதிகரிக்க வேளாண் இயந்திரங்கள் மற்றும் உபகரணங்கள் வாங்குவதற்கு நிதி உதவி வழங்கும் திட்டம்.",
    eligibility: "Individual farmers, FPOs, and self-help groups. Priority to SC/ST farmers and women farmers.",
    eligibilityTamil: "தனிப்பட்ட விவசாயிகள், FPO கள் மற்றும் சுய உதவி குழுக்கள். SC/ST விவசாயிகள் மற்றும் பெண் விவசாயிகளுக்கு முன்னுரிமை.",
    lastDate: "2024-11-30",
    benefits: [
      "40-50% subsidy on machinery",
      "Custom hiring centers support",
      "Training and demonstration",
      "Quality machinery access"
    ],
    benefitsTamil: [
      "இயந்திரங்களில் 40-50% மானியம்",
      "தனிப்பயன் வாடகை மையங்கள் ஆதரவு",
      "பயிற்சி மற்றும் செயல் விளக்கம்",
      "தரமான இயந்திர அணுகல்"
    ],
    applicationProcess: "Apply through District Agriculture Office or online portal. Submit quotations from authorized dealers.",
    applicationProcessTamil: "மாவட்ட வேளாண் அலுவலகம் அல்லது ஆன்லைன் போர்ட்டல் மூலம் விண்ணப்பிக்கவும். அங்கீகரிக்கப்பட்ட விற்பனையாளர்களின் மேற்கோள்களை சமர்ப்பிக்கவும்."
  },
  {
    id: 4,
    title: "Pradhan Mantri Fasal Bima Yojana",
    titleTamil: "பிரதான் மந்திரி பாசல் பீமா யோஜனா",
    category: "insurance",
    description: "Crop insurance scheme providing comprehensive risk coverage against all non-preventable natural risks from pre-sowing to post-harvest.",
    descriptionTamil: "விதைப்புக்கு முன் முதல் அறுவடைக்குப் பின் வரை அனைத்து இயற்கை இடர்களுக்கும் விரிவான பாதுகாப்பு வழங்கும் பயிர் காப்பீட்டு திட்டம்.",
    eligibility: "All farmers including tenant farmers and sharecroppers growing insured crops in notified areas.",
    eligibilityTamil: "அறிவிக்கப்பட்ட பகுதிகளில் காப்பீடு செய்யப்பட்ட பயிர்களை வளர்க்கும் குத்தகைதாரர்கள் மற்றும் பங்குதாரர்கள் உட்பட அனைத்து விவசாயிகளும்.",
    lastDate: "2024-10-15",
    benefits: [
      "Premium rates: 1.5% for Rabi, 2% for Kharif",
      "Full sum insured for total crop loss",
      "Technology-based assessment",
      "Quick claim settlement"
    ],
    benefitsTamil: [
      "பிரீமியம் விகிதங்கள்: ரபி 1.5%, கரீப் 2%",
      "முழு பயிர் இழப்புக்கு முழு காப்பீட்டு தொகை",
      "தொழில்நுட்ப அடிப்படையிலான மதிப்பீடு",
      "விரைவான க்ளைம் தீர்வு"
    ],
    applicationProcess: "Apply through banks, CSCs, or insurance companies. Required: Aadhaar, bank account, land documents.",
    applicationProcessTamil: "வங்கிகள், CSC கள் அல்லது காப்பீட்டு நிறுவனங்கள் மூலம் விண்ணப்பிக்கவும். தேவை: ஆதார், வங்கிக் கணக்கு, நில ஆவணங்கள்."
  },
  {
    id: 5,
    title: "Soil Health Card Scheme",
    titleTamil: "மண் ஆரோக்கிய அட்டை திட்டம்",
    category: "subsidy",
    description: "Provides soil health cards to farmers containing crop-wise recommendations for appropriate dosage of nutrients and fertilizers.",
    descriptionTamil: "விவசாயிகளுக்கு பயிர் வாரியாக ஊட்டச்சத்துக்கள் மற்றும் உரங்களின் பொருத்தமான அளவு பரிந்துரைகளுடன் மண் ஆரோக்கிய அட்டைகளை வழங்கும் திட்டம்.",
    eligibility: "All farmers owning agricultural land. Priority to small and marginal farmers.",
    eligibilityTamil: "வேளாண் நிலம் வைத்துள்ள அனைத்து விவசாயிகளும். சிறு மற்றும் குறு விவசாயிகளுக்கு முன்னுரிமை.",
    lastDate: "2024-12-31",
    benefits: [
      "Free soil testing",
      "Customized fertilizer recommendations",
      "Improved crop productivity",
      "Reduced input costs"
    ],
    benefitsTamil: [
      "இலவச மண் பரிசோதனை",
      "தனிப்பயனாக்கப்பட்ட உர பரிந்துரைகள்",
      "மேம்பட்ட பயிர் உற்பத்தித்திறன்",
      "குறைந்த உள்ளீட்டு செலவுகள்"
    ],
    applicationProcess: "Contact Village Level Worker or Agriculture Extension Officer. Provide soil samples as per guidelines.",
    applicationProcessTamil: "கிராம நிலை ஊழியர் அல்லது வேளாண் விரிவாக்க அலுவலரைத் தொடர்பு கொள்ளவும். வழிகாட்டுதல்களின்படி மண் மாதிரிகளை வழங்கவும்."
  },
  {
    id: 6,
    title: "National Agriculture Market (e-NAM)",
    titleTamil: "தேசிய வேளாண் சந்தை (e-NAM)",
    category: "subsidy",
    description: "Online trading platform for agricultural commodities to provide farmers better price discovery and transparent auction process.",
    descriptionTamil: "விவசாயிகளுக்கு சிறந்த விலை கண்டுபிடிப்பு மற்றும் வெளிப்படையான ஏல செயல்முறையை வழங்க வேளாண் பொருட்களுக்கான ஆன்லைன் வர்த்தக தளம்.",
    eligibility: "All farmers selling agricultural produce in registered mandis. Digital literacy training provided.",
    eligibilityTamil: "பதிவு செய்யப்பட்ட மண்டிகளில் வேளாண் உற்பத்தியை விற்கும் அனைத்து விவசாயிகளும். டிஜிட்டல் கல்வியறிவு பயிற்சி வழங்கப்படுகிறது.",
    lastDate: "2024-12-31",
    benefits: [
      "Better price realization",
      "Transparent bidding process",
      "Reduced transaction costs",
      "Quality assurance through testing"
    ],
    benefitsTamil: [
      "சிறந்த விலை உணர்தல்",
      "வெளிப்படையான ஏல செயல்முறை",
      "குறைக்கப்பட்ட பரிவர்த்தனை செலவுகள்",
      "சோதனை மூலம் தர உத்தரவாதம்"
    ],
    applicationProcess: "Register at e-NAM portal with mobile number. Complete KYC verification and receive training from officials.",
    applicationProcessTamil: "மொபைல் எண்ணுடன் e-NAM போர்ட்டலில் பதிவு செய்யவும். KYC சரிபார்ப்பை முடித்து அதிகாரிகளிடமிருந்து பயிற்சி பெறவும்."
  }
];