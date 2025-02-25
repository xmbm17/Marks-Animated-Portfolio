import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () =>{
  return(
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Mark</motion.span>
        <div className="social">
          <a href="#"><img alt="" src="/facebook.png"/></a>
          <a href="#"><img alt="" src="/instagram.png"/></a>
          <a href="#"><img alt="" src="/youtube.png"/></a>
          <a href="#"><img alt="" src="/dribbble.png"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
