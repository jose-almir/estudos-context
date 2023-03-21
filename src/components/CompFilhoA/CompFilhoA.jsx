import { CompFilhoC } from "../CompFilhoC/CompFilhoC";
import "./CompFilhoA.css";

export function CompFilhoA(props) {
  return (
    <div className="filho-a">
      <h3>FILHO A</h3>
      <CompFilhoC valor={props.valor} />
    </div>
  );
}
