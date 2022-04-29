/** @format */

import React from "react";
import "../blogs/blog.css";
import post1 from "../../src/assets/Gym/training-1.jpg";
import post2 from "../../src/assets/Gym/training-2.jpg";
import post3 from "../../src/assets/Gym/training-3.jpg";
import post4 from "../assets/dietplan/dietplan1.jpg";
import post5 from "../assets/dietplan/dietplan2.jpg";
import post6 from "../assets/dietplan/dietplan3.jpg";

export default function Blog() {
  return (
    <main>
      <div className="container">
        <section className="text-center">
          <h1 className="pricingSection-heading">Latest Posts</h1>
          <div className="pricingSection-title">
            <p className="pricingSection-title-firstHalf">Our</p>
            <p className="pricingSection-title-secondHalf">Intresting Blogs</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={post1} className="img-fluid" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn ">
                    Read
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={post2} className="img-fluid" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn ">
                    Read
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={post3} className="img-fluid" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn ">
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={post4} className="img-fluid" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn ">
                    Read
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={post5} className="img-fluid" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn ">
                    Read
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={post6} className="img-fluid" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn ">
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
