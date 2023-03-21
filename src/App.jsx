import { Propriedades } from "./components/Propriedades/Propriedades";

export function App() {
  return (
    <div>
      <Propriedades
        cidade="Ubajara"
        estado="CE"
        ligado
        dados={{ nome: "batata" }}
      >
        Hello, World!
      </Propriedades>
    </div>
  );
}
