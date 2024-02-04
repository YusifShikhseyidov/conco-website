import "./OurValue.css"
import { ourValues } from "./ourValues";
import MainServices from "../SectionTwoMainServices/MainServices";

export default function OurValue() {
  const title = "NIYƏ MƏHZ BIZ?"

  return (
    <div style={{marginTop: "5rem"}}>
      <MainServices title={title} mainServices={ourValues}/>
    </div>
  );
}
