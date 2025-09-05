import { aboutproduct } from "./aboutproduct";
import "./About.css"

const About = () => {
  return (
    <div>
      <h1 className="title">My Skills</h1>
      <div className="products">
      {aboutproduct.map((item, i) => {
        return (
          <div className="total" key={i}>
            <h1>{item.icon}</h1>
            <p>{item.title}</p>
          </div>
        );
      })}
      </div>

    </div>
  );
};

export default About;
