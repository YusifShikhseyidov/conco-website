import { Link } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";

export default function Careers() {
  const { data, loading, error } = useFetch("/vacancies");
  console.log(data);

  return (
    <div className="svg-background-container">
      {error && "error occured"}
      {data.length > 0 ? (
        data?.map((career) => (
          <Link to={`/careers/${career.id}`} key={career.id}>
            <p>{career.attributes.vacancy_title}</p>
            <p>{career.attributes.vacancy_description.substring(0, 200)}</p>
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
          </Link>
        ))
      ) : loading ? (
        <div>loading..</div>
      ) : (
        <div className="svg-background" />
      )}
    </div>
  );
}
