import {FaInstagram} from 'react-icons/fa';
import {SiLinkedin} from 'react-icons/si';

export default function Social(){
  return(
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:30}}> 
    <a href="https://www.instagram.com/yu.marcia/">
      <FaInstagram size={30} color="purple"/>
    </a>
    <a href="https://www.linkedin.com/in/marcia-yurie-yano-2201a424/?originalSubdomain=br">
      <SiLinkedin size={30} color="blue"/>
    </a>
    </div>)
}