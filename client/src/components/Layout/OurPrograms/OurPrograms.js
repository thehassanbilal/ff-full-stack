/** @format */

import OurProgramsCard from "../../Cards/OurProgramsCard/OurProgramsCard";
import classes from "./OurPrograms.module.css";
import icons1 from "../../../assets/icons-1.png";
import icons2 from "../../../assets/icons-2.png";
import icons3 from "../../../assets/icons-3.png";
import icons4 from "../../../assets/icons-4.png";
import "../../../App.css";

const OurPrograms = () => {
  const learnMore = "Learn More..";
  const programsData = [
    {
      logo: <img src={icons1} height="80" width="80" />,
      name: "Aerobic Exercises",
      desc: `Aerobic exercise is a type of cardiovascular exercise that causes your heart to beat faster. Your blood circulates fast throughout your body during aerobic exercise, and your lungs take in more oxygen, keep your arteries clear.`,
    },
    {
      logo: <img src={icons4} height="80" width="80" />,
      name: "Cardio Exercises",
      desc: `Cardio is an excellent fat-burning and calorie-burning workout for anyone trying to reduce weight. Nutrition is the most important factor in weight loss, you should include cardio into your routine to achieve your goal of losing pounds.`,
    },
    {
      logo: <img src={icons2} height="80" width="80" />,
      name: "Body Weight",
      desc: `Bodyweight exercise is remarkable since it can equally develop endurance and muscle strength. Changing positions and raising your heart rate provide an aerobic exercise, while your bodyweight and gravity helps you grow muscle.`,
    },
    {
      logo: <img src={icons3} height="80" width="80" />,
      name: "Weight Lifting",
      desc: `Strength training has become an integral aspect of most workout routines, thanks to a growing body of evidence demonstrating its lots of advantages. If you've ever tried strength training, You must know the benefits already`,
    },
  ];
  return (
    <section className={classes["programSection-container"]}>
      <h1 className={classes["programSection-heading"]}>Our Program</h1>
      <div className={classes["programSection-title"]}>
        <p className={classes["programSection-title-firstHalf"]}>BUILD YOUR</p>
        <p className={classes["programSection-title-secondHalf"]}>BEST BODY</p>
      </div>
      <div className={classes["programSection-cards"]}>
        {programsData.map((cardData) => {
          return (
            <OurProgramsCard
              logo={cardData.logo}
              id={cardData.id}
              name={cardData.name}
              desc={cardData.desc}
              btn_txt={learnMore}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurPrograms;
