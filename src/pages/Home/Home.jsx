import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const { theme } = useContext(ThemeContext);

  const classesDiv =
    theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  const variantBtn = theme === "dark" ? "light" : "success";

  return (
    <div className={classesDiv}>
      <h3>TELA DE HOME</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        harum culpa est incidunt. Praesentium quia itaque non temporibus, atque
        tempore placeat architecto facilis maxime ipsam quibusdam perferendis
        possimus! Similique magni qui sequi quos quo vero dolores reiciendis.
        Odit perferendis quidem fugit eius quis a, expedita facilis, deleniti
        repellat labore ullam sed? Officia ipsum, optio quo suscipit fugiat
        quibusdam aut quidem culpa, dicta dolor tempora nam nobis aliquam
        dolores accusantium praesentium id repellat animi voluptas quod expedita
        eveniet harum aspernatur laudantium. Soluta in recusandae repudiandae
        dignissimos nulla numquam maiores veritatis sed error odit, tempore
        totam sit. Saepe, eveniet totam assumenda ullam commodi eius perferendis
        explicabo officia delectus? Reiciendis repellendus, maiores facere id
        explicabo consequuntur unde corrupti praesentium voluptatibus rem
        fugiat, magnam ipsam? Repellendus, minus. A, officiis earum placeat
        quaerat dolorem itaque dolores totam doloribus asperiores accusamus
        explicabo quisquam labore eius eos nam exercitationem minima. Ipsum
        aperiam amet atque facilis iste repellendus assumenda aspernatur
        deserunt? Fugit recusandae exercitationem itaque sed adipisci
        repudiandae voluptatibus earum maxime vitae doloribus? Rerum ipsum nemo
        autem, in consectetur similique nulla quod? Nobis in porro vero debitis
        maxime explicabo totam saepe error dolorum nulla recusandae, eius
        accusamus perspiciatis expedita tenetur cupiditate nisi. Ratione fugiat
        maxime possimus perferendis asperiores.
      </p>
      <Button variant={variantBtn}>Teste</Button>
    </div>
  );
}
