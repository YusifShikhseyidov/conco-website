import { Link } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";

export default function Careers() {
  const { data, loading, error } = useFetch("/vacancies");
  console.log(data);

  return (
    // <div className="svg-background-container">
    //   {data.length > 0 ? data?.map((career) => (
    //     <Link to={`/careers/${career.id}`} key={career.id}>
    //       <p>{career.attributes.vacancy_title}</p>
    //       <p>{career.attributes.vacancy_description.substring(0, 200)}</p>
    //       <p>
    //         Maaş:{" "}
    //         {Number(career.attributes.vacancy_salary).toLocaleString(
    //           "de-DE",
    //           {
    //             minimumFractionDigits: 2,
    //             maximumSignificantDigits: 2,
    //             useGrouping: true,
    //           }
    //         )}
    //       </p>
    //     </Link>
    //   )) : data.length === 0 || loading ? (
    //       <div className="svg-background" />
    //   ) : error && "error occured"
    //   }
    // </div>

    <>
      {data.length > 0 ? (<div className="svg-background-container">{data?.map((career) => (
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
        ))}
        </div>
      ) : data.length === 0 || loading ? (
        <div style={{height: "auto", minHeight: "49dvh", width: "80%", margin: "0 auto"}}>
          <div className="svg-background" />
        </div>
      ) : error && "error occured"
      }
    </>
  );
}
