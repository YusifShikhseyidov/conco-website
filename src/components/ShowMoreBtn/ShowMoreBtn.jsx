import "./ShowMoreBtn.css";

export default function ShowMoreBtn({toggle, setToggle}) {

  return (
    <button
      className="btn-more"
      role="button"
      onClick={() => setToggle(!toggle)}
    >
      Layihəyə aid daha çox məlumat üçün klikləyin
    </button>
  );
}
