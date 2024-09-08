import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  const settings = {
    dots: false, 
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderItems = [
    {
      title: "100% Organic Food",
      description: "100% healthy & Fresh food.",
    },
    {
      title: "Fresh Vegetables",
      description: "Organic and local vegetables.",
    },
    {
      title: "Dairy Products",
      description: "Fresh milk, cheese, and yogurt.",
    },
    {
      title: "Healthy Snacks",
      description: "Nutritious and healthy snacks.",
    },
    {
      title: "Whole Grains",
      description: "Rich in fiber and nutrients.",
    },
    {
      title: "Juices & Beverages",
      description: "Freshly squeezed organic juices.",
    },
  ];

  return (
    <Slider {...settings}>
      {sliderItems.map((item, index) => (
        <div key={index} className="flex justify-center items-center gap-4">
          {/* SVG olan div */}
          <div className="rounded-full bg-[#00b207] text-[#fff] w-[70px] h-[70px] flex justify-center items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG içerik */}
            </svg>
          </div>
          
          {/* h5 ve p olan div */}
          <div className="flex flex-col">
            <h5 className="text-[#fff]">{item.title}</h5>
            <p className="text-[#666666]">{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
