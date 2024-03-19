import ourValueimg2 from "./assets/agreement.png"
import ourValueimg3 from "./assets/inIndustryFor.png"
import ourValueimg4 from "./assets/management.png"
import ourValueimg5 from "./assets/restoration.png"

const currentDate = new Date().getFullYear();
const companyFoundationYear = 2015;
const inIndustryFor = currentDate - companyFoundationYear;

export const ourValues = [
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