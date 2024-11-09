import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";

const SliderHome = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="homeSlide">
      <Container>
        <Slider {...settings} className="custom-slick-slider">
          {SliderData.map((value, index) => (
            <SlideCard
              key={index}
              title={value.title}
              cover={value.cover}
              desc={value.desc}
            />
          ))}
        </Slider>
      </Container>

      <style jsx>{`
        .custom-slick-slider .slick-prev {
          left: 10px;
          z-index: 1;
        }
        .custom-slick-slider .slick-prev:before {
          font-size: 32px;
          color: #430e00;
          opacity: 0.8;
        }
        .custom-slick-slider .slick-next {
          right: 10px;
          z-index: 1;
        }
        .custom-slick-slider .slick-next:before {
          font-size: 32px;
          color: #430e00;
          opacity: 0.8;
        }

        @media (max-width: 767px) {
          .custom-slick-slider .slick-prev:before {
            display: none;
          }
          .custom-slick-slider .slick-next:before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SliderHome;
