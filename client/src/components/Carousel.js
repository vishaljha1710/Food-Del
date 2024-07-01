import React from "react";

export default function Carousel() {
  return (
    
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "9" }}>
            <form class="d-flex">
              <input
                class="form-control me-2 bg-white"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success bg-success text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/R.9e0caa8628009f5bb525d1e09604fda9?rik=dI0nOfBy3ahp1w&riu=http%3a%2f%2fvitaitaliantours.com%2fwp-content%2fuploads%2f2016%2f03%2fNeapolitan-Pizza-Margherita.jpg&ehk=Rk%2bfgzpAHbGig6ZHOExH6bwW62dG29BR4XPCsHqKBSI%3d&risl=1&pid=ImgRaw&r=0"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/R.fb25cc105c52de69ffde15354077dd94?rik=sqLKLhJ9jaZMYg&riu=http%3a%2f%2fbevcooks.com%2fwp-content%2fuploads%2f2011%2f10%2fbutter7.jpg&ehk=rhnjW11ZUdCFucmhU3uqGcKRpNZNrJsXo1tdYHdKOSc%3d&risl=&pid=ImgRaw&r=0"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
  );
}
