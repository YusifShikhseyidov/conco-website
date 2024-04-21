import "./Footer.css";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer-container">
      <div className="info-box">
        <span>
          AZ1075 Nərimanov rayonu, Əhməd Rəcəbli küç. 2/1 Bakı, Azərbaycan
        </span>
        <span>Copyright &copy; {currentYear} "CONCO QSC"</span>
      </div>
    </footer>
  );
}
