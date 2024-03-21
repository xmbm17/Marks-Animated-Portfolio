import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam magni accusamus architecto sunt aperiam unde, consequatur dolore est voluptas voluptate, reprehenderit dolorem nesciunt tempore! Incidunt nisi amet cumque doloribus.",
  },
  {
    id: 2,
    title: ".NET App",
    img: "https://images.pexels.com/photos/3720115/pexels-photo-3720115.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam magni accusamus architecto sunt aperiam unde, consequatur dolore est voluptas voluptate, reprehenderit dolorem nesciunt tempore! Incidunt nisi amet cumque doloribus.",
  },
  {
    id: 3,
    title: "Vanilla JS/HTML/CSS App",
    img: "https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam magni accusamus architecto sunt aperiam unde, consequatur dolore est voluptas voluptate, reprehenderit dolorem nesciunt tempore! Incidunt nisi amet cumque doloribus.",
  },
  {
    id: 4,
    title: "SQL DB",
    img: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam magni accusamus architecto sunt aperiam unde, consequatur dolore est voluptas voluptate, reprehenderit dolorem nesciunt tempore! Incidunt nisi amet cumque doloribus.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
