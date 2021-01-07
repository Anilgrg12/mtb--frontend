import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Picture = () => {
  return (
    <div>
      <Carousel className="first-page" interval={3000} keyboard={false}>
        <Carousel.Item>
          <img
            style={{ height: "600px", width: "1500px" }}
            src="https://images.singletracks.com/blog/wp-content/uploads/2017/09/NSJ7i5Y6BM0p9NSH5PieCxAiaoLrKpaNPQ-1.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px", width: "1500px" }}
            src="https://images.unsplash.com/photo-1548422392-679e1fc2eba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1984&q=80"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px", width: "1500px" }}
            src="https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_auto,f_auto/redbullcom/2016/02/16/1331777047411_1/a-pair-of-mountain-bikers-riding-in-the-dolomites-range-in-north-eastern-italy"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Picture;
