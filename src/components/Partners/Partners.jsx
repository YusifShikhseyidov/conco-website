import Partner from "./Partner";
import "./Partners.css";
import maxi from "./assets/maxiaz.png";
const imageUrl = "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

export default function Partners() {
  return (
    <div className="main-partners-container">
      <h1>Tərəfdaşlarımız</h1>
      
      <div className="partners-grid">
        <Partner imageUrl={imageUrl} />
        <div className="test"></div>
        <Partner imageUrl={imageUrl} />
        <div className="test1"></div>
        <Partner imageUrl={imageUrl} />
        <div className="test2"></div>
        <Partner imageUrl={imageUrl} />
        <Partner imageUrl={imageUrl} />
        <Partner imageUrl={imageUrl} />
      </div>

    </div>
  );
}
