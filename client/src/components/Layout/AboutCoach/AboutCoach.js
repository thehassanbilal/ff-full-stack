/** @format */

import "../AboutCoach/AboutCoach.css";
import about from "../../../assets/about.jpg";
const AboutCoach = () => {
  return (
    <>
      <section className="aboutCoachSection-container about-page">
        <div className="aboutCoachSection-title">
          <p className="aboutCoachSection-title-firstHalf">About</p>
          <p className="aboutCoachSection-title-secondHalf">Coach</p>
        </div>
        <img src={about} alt="not found" style={{ width: "60%" }} />
        <div className="aboutCoachSection-desc-and-Img-container">
          <div className="aboutCoachSection-desc">
            <p className="aboutCoachSection-desc-greeting">Hi I'm Coach</p>
            <ul className="aboutCoachSection-desc-text">
              <li>
                <p>
                  When I started weight training 24 years ago it was never to be
                  a bodybuilder. Sure I was always into sports at High School. I
                  played soccer, American football, track and field but I was
                  the skinny kid! I just wanted to gain a little weight and size
                  to help with my performance on the field so my coach
                  encouraged me to lift.. and the rest is history.
                </p>
              </li>
              <li>
                <p>
                  My mentality is very much to stay dedicated to a goal and if I
                  want something, I will see it through to the end. The gym soon
                  became my passion and along with a new group of friends we
                  decided to enter a local bodybuilding competition.
                </p>
              </li>
              <li>
                <p>
                  We did this just for fun to keep us motivated, to train harder
                  and to stick to a diet. Long story short, I won! This was so
                  cool especially when I was just a novice and a teenager.
                  Competing quickly became my motivation to keep training, keep
                  getting better.
                </p>
              </li>
              <li>
                <p>
                  I set a goal to stand on stage every year. I travelled all
                  over the world winning countless shows and over 24 trophies
                  over my 13 years of competing, including 2 time MuscleMania
                  Pro World Champion and 2 time MuscleMania SuperBody Champion.
                </p>
              </li>
            </ul>
          </div>
          <div className="aboutCoachSection-coachImg"></div>
        </div>
      </section>
    </>
  );
};

export default AboutCoach;
