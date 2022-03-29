import "./styles.css";
import {FaMediumM} from "react-icons/fa"

export default function About(){
  return(
    <main id="about">
      <FaMediumM className="letra" size={300}/>
      <p>
      Arquiteta desde 2016, trabalhou na infraestrutura de eventos e na elaboracao de projetos arquitetonicos em colaboracao.
      Comecou a estudar programacao em Agosto de 2021, e cada dia mais esta codando sem parar!
      </p>
    </main>

  )
}