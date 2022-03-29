import "./styles.css"
import logo from '../../assets/logo.png';


export default function Header(){

  function scrollToComponent(id){
    document.getElementById(id).scrollIntoView();
  }
 
  return (
    <header>
      <img src={logo}width={50}/>

      <ul className='menu'>
      <li className="item-menu" onClick={()=>scrollToComponent("about")}>About</li>
      <li className="item-menu" onClick={()=>scrollToComponent("projects")}>Projects</li>
      <li className="item-menu" onClick={()=>scrollToComponent("hobby")}>Hobby</li>
      </ul>
    </header>
  );
}