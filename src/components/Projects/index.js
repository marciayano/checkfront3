import "./styles.css";
const data = [
  {
    id: "1",
    name: "Exercicios de JS",
    link: "https://github.com/marciayano/programacaoImperativa",
    image:
      "https://www.20i.com/blog/wp-content/uploads/2020/10/I-love-JavaScript.png",
  },
  {
    id: "2",
    name: "Programacao Orientada a Objetos",
    link: "https://github.com/marciayano/POO",
    image:
      "https://miro.medium.com/max/1200/0*MVbw8ZiGKbuS50tw.png",
  },
  {
    id: "3",
    name: "NLW Rocket Seat 2021",
    link: "https://github.com/marciayano/cracha-nlw",
    image:
      "https://nextlevelweek.com/og/nlw-edition.png",
  },

];

export default function Projects(){
  return(
    <div id="projects" className = "content-projects">
      <h1 className="title-project">Projects</h1>
      <ul className = "list-projects">
        {data.map(({image,name,link})=>(
          <a href={link}>
          <li className = "item-list-projects">
            <img src={image} width={350} height={200}/>
            <h3 className="name-project">{name}</h3>
          </li>
          </a>
        ))}
      </ul>
    </div>

  )
}