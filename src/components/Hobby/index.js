import "./styles.css";
const data = [
  {
    id: "1",
    name: "Shamisen",
    link: "https://www.youtube.com/watch?v=7BXmviyIjP0&t=2s&ab_channel=RaquelYoshimiUehara",
    image:
      "https://i.ytimg.com/vi/P0EUA57FEv8/maxresdefault.jpg",
  },
  {
    id: "2",
    name: "Cozinhar",
    link: "https://www.notion.so/ponkam/d9ec343ee4a84902b4685e38516a4e69?v=4519485badaa46909eb23e948c356f84",
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/genshin-impact-cooking-guide.jpg",
  },
  {
    id: "3",
    name: "Genshin Impact",
    link: "https://genshin.hoyoverse.com/pc-launcher/?utm_source=NA_google_BR_search_keywords_20201218&mhy_trace_channel=ga_channel&new=1&gclid=CjwKCAjwuYWSBhByEiwAKd_n_vNrzClEH02FoSrX5j2cPcqOO4yM8-dckp17lxa8Zx6i98B1QXiylRoC-sgQAvD_BwE#/",
    image:
      "https://t.ctcdn.com.br/q_RlA1Za6yYdJxHWarIv0Lq1ALs=/1400x788/smart/filters:format(webp)/i509997.jpeg",
  },
  {
    id: "4",
    name: "Night in the Woods",
    link: "https://store.steampowered.com/app/481510/Night_in_the_Woods/",
    image:
      "https://cdn1.epicgames.com/abd29ccc8c2a4a40a31f27de63cb0603/offer/EGS_NightintheWoods_InfiniteFall_S1-2560x1440-640a95478bd710d021b862372cfa3274.jpg",
  },
  {
    id: "5",
    name: "Undertale",
    link: "https://undertale.com/",
    image:
      "https://img.elo7.com.br/product/original/2485C03/painel-1-50x1-undertale-personalizado.jpg",
  },
  {
    id: "6",
    name: "Cafes para conhecer",
    link: "https://www.google.com/search?q=cafes+para+conhecer+em+sp&oq=cafes+para+conhecer&aqs=edge.0.0i512j69i57j0i22i30l4j0i390l3.3077j0j4&sourceid=chrome&ie=UTF-8",
    image:
      "https://blog.ucoffee.com.br/ucoffee_blog/wp-content/uploads/2019/03/sao-paulo.png",
  },


];

export default function Hobby(){
  return(
    <div id="hobby" className = "content-hobby">
      <h1 className="title-hobby">Hobby</h1>
      <ul className = "list-hobby">
        {data.map(({image,name,link})=>(
          <a href={link}>
          <li className = "item-list-hobby">
            <img src={image} width={350} height={200}/>
            <h3 className="name-hobby">{name}</h3>
          </li>
          </a>
        ))}
      </ul>
    </div>

  )
}