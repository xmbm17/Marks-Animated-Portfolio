import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat:Infinity,
      repeatType:"mirror"
    },
  }
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Mark Martinez</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Software Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt=""
            animate="scrollButton"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/" alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
