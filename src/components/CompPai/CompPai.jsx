import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import "./CompPai.css";

export function CompPai() {
  // Primeiramente definimos uma informação
  // que os componentes da hierarquia irão precisar
  const [batata, setBatata] = useState("batata");

  function repetir() {
    setBatata(batata + "a");
  }
  // Props drilling = quando temos uma hierarquia
  // de componentes muito extensa para passar props
  // em cada componente
  return (
    <div className="pai">
      <h3>PAI</h3>
      <button className="btn btn-dark" onClick={repetir}>
        Repetir
      </button>
      <p>
        <b>Valor: </b>
        {batata}
      </p>
      <CompFilhoA valor={batata} />
      <CompFilhoB />
    </div>
  );
}
