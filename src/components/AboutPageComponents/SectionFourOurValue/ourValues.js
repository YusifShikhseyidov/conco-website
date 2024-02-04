import ourValueimg1 from "./assets/bim.png"
import ourValueimg2 from "./assets/agreement.png"
import ourValueimg3 from "./assets/experience.png"
import ourValueimg4 from "./assets/management.png"
import ourValueimg5 from "./assets/restoration.png"

const currentDate = new Date().getFullYear();
const companyFoundationYear = 2015;
const inIndustryFor = currentDate - companyFoundationYear;

export const ourValues = [
  {
    name: "BIM və digər tikinti texnologiyalarının tətbiqi",
    alt: "BIM və digər tikinti texnologiyaları",
    href: ourValueimg1,
  },
  {
    name: "Sifarişçilərlə uğurlu əməkdaşlıq",
    alt: "Uğurlu əməkdaşlıq",
    href: ourValueimg2,
  },
  {
    name: `Sənayedə ${inIndustryFor} illik təcrübə`,
    alt: "Sənayedə təcrübə",
    href: ourValueimg3,
  },
  {
    name: "Korporativ idarəçilik",
    alt: "Korporativ idarəçilik",
    href: ourValueimg4,
  },
  {
    name: "Yenidənqurma və bərpa sahələrində təcrübə",
    alt: "Yenidənqurma və bərpa sahələrində təcrübə",
    href: ourValueimg5,
  },
]