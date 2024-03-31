import useFetch from "../../components/hooks/useFetch";

export default function Careers() {
  const { data, loading, error } = useFetch("/vacancies");

  return (
    <>
      {data.length > 0 ? (<div className="svg-background-container">{data?.map((career) => (
          <div key={career.id}>
            <p>{career.attributes.vacancy_title}</p>
            <p>{career.attributes.vacancy_description}</p>
            <p>
              Maaş:{" "}
              {Number(career.attributes.vacancy_salary).toLocaleString(
                "de-DE",
                {
                  minimumFractionDigits: 2,
                  maximumSignificantDigits: 2,
                  useGrouping: true,
                }
              )}
            </p>
            <a href="mailto:info@conco.az" className="sendCVBtn">
              CV Göndər
            </a>
          </div>
        ))}
        </div>
      ) : data.length === 0 || loading ? (
        <div style={{height: "auto", minHeight: "54dvh", width: "80%", margin: "0 auto"}}>
          <div className="svg-background" />
        </div>
      ) : error && "error occured"
      }
    </>
  );
}
