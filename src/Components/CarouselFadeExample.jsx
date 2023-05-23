import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block ht mx-auto"
            src="https://images.livemint.com/img/2021/06/14/1600x900/incharge-video-poster@3x_1619092807819_1623659484613.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block ht mx-auto "
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20211019015000_MB6DMUQ4SZC75ONSTKIBFRZNBQ%20_1_.jpg&w=700&q=90&c=1"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block ht mx-auto"
            src="https://www.drivespark.com/img/2017/05/06-1494049589-tvs-motor-company-earns-patent-hybrid-two-wheeler4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselFadeExample;
