import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoE.css";

export function CompFilhoE() {
  const valor = useContext(BatataContext);

  return (
    <div className="filho-e">
      <h3>FILHO E</h3>
      <p>
        <b>Valor: </b>
        {valor}
      </p>
    </div>
  );
}
