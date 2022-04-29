/** @format */

import "../ClientTestimonials/ClientTestimonials.css";
import training from "../../../assets/Gym/training-2.jpg";
import training1 from "../../../assets/Gym/training-1.jpg";
import training2 from "../../../assets/Gym/training-3.jpg";

const ClientTestimonials = () => {
  return (
    <>
      <div className="post-slider text-white">
        <div className="container updated-container">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <img src={training2} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p className="font-italic">
                      For the past two years, I've been purchasing supplements
                      from Faith Fitness, and they are the most reliable and
                      gratifying supplement source in Pakistan.
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-arrow-right"></i>100% Original
                        Product!
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i>100% Results
                        Obtained!
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i>100% Satisfied!
                      </li>
                    </ul>
                    <p classNameName="font-italic">
                      I've tried a lot of other brands, but Faith Fitness is my
                      favourite. Pakistan's most authentic workout supplement
                      store. They are always willing to help.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <img src={training} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p className="font-italic">
                      Personal training is excellent. I was tiny, but I was too
                      lazy and self-conscious to go to the gym. Shamroz was my
                      personal trainer, and I've noticed a positive change in my
                      appearance since then. I'm content, and I'm more
                      confidence in myself now. Faith Fitness, come highly
                      recommended by me to anyone searching for high-quality
                      personal training.
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-arrow-right"></i> Training sessions
                        were awesome.
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> Exercises, that
                        were on point.
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> Prequotionary
                        measures to prevent the onset of any injury.
                      </li>
                    </ul>
                    <p classNameName="font-italic">
                      In a heartbeat, I would suggest Faith Fitness. With their
                      assistance, I intend to continue to exercise and keep a
                      solid level of fitness for a long time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <img src={training1} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p className="font-italic text-clr">
                      I've never been a gym person, but with only 6 weeks till
                      our wedding, I was uncomfortable with my appearance. Faith
                      Fitness impressed me with their professionalism and
                      knowledge, not only in terms of exercise and fitness, but
                      also in terms of posture and nutrition.
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-arrow-right"></i>Helped me in achieving my dream body fitness goal.
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> They helped me with my suppliment.
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> Training sessions were awesome.
                      </li>
                    </ul>
                    <p classNameName="font-italic text-clr">
                    Thank you SO much for all you’ve already done and all you will continue to do!!!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonials;
