import "./CompFilhoE.css";

export function CompFilhoE(props) {
  return (
    <div className="filho-e">
      <h3>FILHO E</h3>
      <p>
        <b>Valor: </b>
        {props.valor}
      </p>
    </div>
  );
}
