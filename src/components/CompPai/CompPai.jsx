import { useState } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import "./CompPai.css";

export function CompPai() {
  const [batata, setBatata] = useState("batata");

  return (
    <div className="pai">
      <h3>PAI</h3>
      <p>
        <b>Valor: </b>
        {batata}
      </p>
      <BatataContext.Provider value={batata}>
        <CompFilhoA />
        <CompFilhoB />
      </BatataContext.Provider>
    </div>
  );
}
