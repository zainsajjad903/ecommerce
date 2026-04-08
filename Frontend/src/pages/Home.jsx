import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <div className="py-lg-8 pt-6">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-12 ">
                <div
                  className="swiper-container swiper swiper-pagination-light "
                  id="swiper-6"
                  data-pagination-type=""
                  data-speed="800"
                  data-space-between="100"
                  data-pagination="true"
                  data-navigation="true"
                  data-autoplay="true"
                  data-effect="slide"
                  data-autoplay-delay="3000"
                  data-breakpoints='{"480": {"slidesPerView": 2}, "768": {"slidesPerView": 1}, "1024": {"slidesPerView": 1}}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide px-md-8 ">
                      <div className="position-relative text-center">
                        <img
                          src="./assets/images/slider/slider-img-2.png"
                          alt=""
                          className="img-fluid my-5 my-lg-0"
                        />
                        <div className="text-center position-absolute top-0 start-0 px-lg-11   ">
                          <h1 className="fs-1 fst-italic text-secondary">
                            %20 Sell
                          </h1>
                          <h2 className="display-4 lh-1">
                            Comfy Sofa Home-Office
                          </h2>
                        </div>
                        <div className="position-absolute top-md-65 top-75 start-50 translate-middle-x mt-lg-9 ">
                          <p className="d-none d-lg-block">
                            Comfortable and stylish sofa for your home office.
                          </p>
                          <div className="fw-bold mb-4 d-none d-lg-block">
                            $50
                          </div>
                          <a href="#" className="btn btn-primary">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide px-md-8 ">
                      <div className="position-relative text-center">
                        <img
                          src="./assets/images/slider/slider-img-1.png"
                          alt=""
                          className="img-fluid my-5 my-lg-0"
                        />
                        <div className="text-center position-absolute top-0 start-0 px-lg-11   ">
                          <h1 className="fs-1 fst-italic text-secondary">
                            %10 Sell
                          </h1>
                          <h2 className="display-4 lh-1">
                            Exchange your old furniture
                          </h2>
                        </div>
                        <div className="position-absolute top-md-65 top-75 start-50 translate-middle-x mt-lg-9 ">
                          <p className="d-none d-lg-block">
                            Save up to $50 for your home office.
                          </p>
                          <div className="fw-bold mb-4 d-none d-lg-block">
                            $45
                          </div>
                          <a href="#" className="btn btn-primary">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide px-md-8 ">
                      <div className="position-relative text-center">
                        <img
                          src="./assets/images/slider/slider-img-3.png"
                          alt=""
                          className="img-fluid my-5 my-lg-0"
                        />
                        <div className="text-center position-absolute top-0 start-0 px-lg-11   ">
                          <h1 className="fs-1 fst-italic text-secondary">
                            %25 Sell
                          </h1>
                          <h2 className="display-4 lh-1">
                            Crafted royal comfort sofa
                          </h2>
                        </div>
                        <div className="position-absolute top-md-65 top-75 start-50 translate-middle-x mt-lg-9 ">
                          <p className="d-none d-lg-block">
                            Experience the elegance of timeless craftsmanship
                            with our Sofa.{" "}
                          </p>
                          <div className="fw-bold mb-4 d-none d-lg-block">
                            $89
                          </div>
                          <a href="#" className="btn btn-primary">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-pagination mb-3 "></div>

                  <div className="swiper-navigation mb-4">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-lg-10 mx-3 mx-lg-0 bg-white">
          <div className="container">
            <div className="row mb-md-8 mb-4">
              <div className="col-lg-12 mb-8">
                <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-md-between gap-4">
                  <div className="col-sm-5">
                    <h2 className="display-4">Our Favoiurte Collection</h2>
                    <p className="mb-0 lead">
                      We are inspired by the realities of life today, in which
                      traditional divides between personal and professional
                      space are more fluid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className="swiper-container swiper"
                  id="swiper-3"
                  data-pagination-type="bullets"
                  data-speed="400"
                  data-space-between="30"
                  data-pagination="true"
                  data-navigation="false"
                  data-autoplay="false"
                  data-effect="slides"
                  data-autoplay-delay="3000"
                  data-breakpoints='{"480": {"slidesPerView": 2}, "768": {"slidesPerView": 3}, "1024": {"slidesPerView": 3}}'
                >
                  <div className="swiper-wrapper pb-10">
                    <div className="swiper-slide">
                      <div>
                        <a href="#">
                          <img
                            src="./assets/images/product-img-1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <div className="text-center">
                          <h3 className="mt-3 h5">
                            <a href="#">Modern Chair</a>
                          </h3>
                          <div className="">
                            <span className="fw-semibold text-decoration-line-through">
                              $59.00
                            </span>
                            <span className="">$29.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <a href="#">
                          <img
                            src="./assets/images/product-img-2.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <div className="text-center">
                          <h3 className="mt-3 h5">
                            <a href="#">Floor Lamp</a>
                          </h3>
                          <div className="">
                            <span className="fw-semibold text-decoration-line-through">
                              $95.00
                            </span>
                            <span className="">$89.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <a href="#">
                          <img
                            src="./assets/images/product-img-5.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <div className="text-center">
                          <h3 className="mt-3 h5">
                            <a href="#">High Back Boss Chair</a>
                          </h3>
                          <div className="">
                            <span className="fw-semibold text-decoration-line-through">
                              $78.00
                            </span>
                            <span className="">$68.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <a href="#">
                          <img
                            src="./assets/images/product-img-6.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <div className="text-center">
                          <h3 className="mt-3 h5">
                            <a href="#">Fancy Metal Clock</a>
                          </h3>
                          <div className="">
                            <span className="fw-semibold text-decoration-line-through">
                              $58.00
                            </span>
                            <span className="">$38.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <a href="#">
                          <img
                            src="./assets/images/product-img-3.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <div className="text-center">
                          <h3 className="mt-3 h5">
                            <a href="#">Comfort Chair</a>
                          </h3>
                          <div className="">
                            <span className="fw-semibold text-decoration-line-through">
                              $38.00
                            </span>
                            <span className="">$28.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-pagination mb-3"></div>

                  <div className="swiper-navigation position-absolute start-50 translate-middle-x bottom-0 mb-4 d-none d-lg-block">
                    <div className="swiper-button-prev " id="slide1"></div>
                    <div className="swiper-button-next" id="slide2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage:
              "url(./assets/images/couch-with-cushions-glass-table.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-lg-11 py-6"
        >
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8">
                <div className="card border-0 shadow-lg rounded-0">
                  <div className="card-body p-6">
                    <div className="text-center">
                      <p className="fst-italic ">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <div className="lh-1">
                        <h4 className="fs-5 mb-1">John Deo</h4>
                        <small className="text-sm">CEO, Company Name</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-10 py-5">
          <div className="container ">
            <div className="row justify-content-center mx-lg-10">
              <div className="col-lg-8 text-center">
                <h2 className=" mb-5">Subscribe to our Newsletter</h2>

                <form className="d-flex justify-content-center gap-2 flex-column flex-sm-row">
                  <input
                    type="email"
                    className="form-control w-lg-50 w-100"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
