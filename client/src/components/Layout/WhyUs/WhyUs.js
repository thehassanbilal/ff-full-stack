/** @format */

import WhyUsCard from "../../Cards/WhyUsCard/WhyUsCard";
import classes from "./WhyUs.module.css";
import chooseUs from "../../../assets/whyChoose.jpg";
import { Fade } from "react-reveal";

const WhyUs = () => {
  const whyUsCardData = [
    {
      category: "Total Members",
      Numbers: 230,
    },
    {
      category: "Success",
      Numbers: "88%",
    },
    {
      category: "programs",
      Numbers: "25+",
    },
    {
      category: "Active Members",
      Numbers: "200+",
    },
  ];
  return (
    <>
      <section className={classes["whyUssection-container"]}>
        <Fade left>
          <div className={classes["whyUssection-left-img"]}>
            <img
              className="why-us-img"
              src={chooseUs}
              alt="Not Found"
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </div>
        </Fade>
        <Fade right>
          <div className={classes["whyUssection-right-whyUs"]}>
            <h1 className={classes["whyUsSection-heading"]}>Best Reasons</h1>
            <div className={classes["whyUsSection-title"]}>
              <p className={classes["whyUsSection-title-firstHalf"]}>WHY</p>
              <p className={classes["whyUsSection-title-secondHalf"]}>
                CHOOSE US
              </p>
            </div>
            <p className={classes["whyUsSection-desc"]}>
              Yes, it is correct! During your free consultation, we will assist
              you in determining your objectives. We will do everything we can
              to assist you in achieving your objectives. Remember that working
              together on the road to health and wellbeing is an important
              aspect of the process. We work as a team to achieve our goals!.
              <br/><br/>
              For over 7 years, Destination Fitness has helped over around {whyUsCardData[0].Numbers}+ clients
              reach their fitness goals. From youngsters to seniors, our clients
              have achieved something they never thought possible.
            </p>

            <div className={classes["whyUsSection-mini-section-container"]}>
              <div
                className={
                  classes["whyUsSection-mini-section-container-rowOne"]
                }
              >
                <div className={classes["whyUsSection-mini-section-one"]}>
                  <WhyUsCard
                    numbers={whyUsCardData[0].Numbers}
                    category={whyUsCardData[0].category}
                  />
                </div>
                <div className={classes["whyUsSection-mini-section-two"]}>
                  <WhyUsCard
                    numbers={whyUsCardData[1].Numbers}
                    category={whyUsCardData[1].category}
                  />
                </div>
              </div>
              <div
                className={
                  classes["whyUsSection-mini-section-container-rowTwo"]
                }
              >
                <div className={classes["whyUsSection-mini-section-three"]}>
                  <WhyUsCard
                    numbers={whyUsCardData[2].Numbers}
                    category={whyUsCardData[2].category}
                  />
                </div>
                <div className={classes["whyUsSection-mini-section-four"]}>
                  <WhyUsCard
                    numbers={whyUsCardData[3].Numbers}
                    category={whyUsCardData[3].category}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default WhyUs;
