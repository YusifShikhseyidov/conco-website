import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const {t} = useTranslation("footer", {useSuspense:true})

  return (
    <footer className="footer-container">
      <div className="info-box">
        <span>Copyright &copy; {currentYear} "{t('conco-qsc')}"</span>
      </div>
    </footer>
  );
}
