export default function Partner({imageUrl}) {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="card-front">
          <figure>
            <div className="img-bg"></div>
            <img
              src={imageUrl}
              alt="lake"
            />

            <figcaption>Maxi.az</figcaption>

            <div className="img-bg1"></div>
          </figure>
          <div className="design-container">
            <span className="design design--1"></span>
            <span className="design design--2"></span>
            <span className="design design--3"></span>
            <span className="design design--4"></span>
            <span className="design design--5"></span>
            <span className="design design--6"></span>
            <span className="design design--7"></span>
            <span className="design design--8"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
