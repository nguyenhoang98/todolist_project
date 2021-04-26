import React, { Component } from "react";
import "./HomePage.css";
import Imgweather from "../../Assets/thoitiet.png";
import ImgSoccer from "../../Assets/bongda.jpg";
import ImgHealth from "../../Assets/suckhoe.jpg";
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homepage">
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={ImgSoccer} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Bản tin bóng đá</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={Imgweather} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Thời tiết</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={ImgHealth} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Sức khỏe</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={ImgSoccer} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Bản tin bóng đá</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={Imgweather} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Thời tiết</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={ImgHealth} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Sức khỏe</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={ImgSoccer} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Bản tin bóng đá</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={Imgweather} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Thời tiết</>
          </div>
        </div>
        <div className="homepage__item flex">
          <div className="homepage__item__img">
            <img src={ImgHealth} className="img-home" />
          </div>
          <div className="homepage__item__title">
            <>Sức khỏe</>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
