

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const promoItems = [
  {
    id: 1,
    image: 'https://img.freepik.com/premium-photo/portrait-young-woman-standing-against-yellow-background_1048944-2006335.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid',
    title: 'Summer Sale',
    description: 'Up to 50% off on summer collection!',
  },
  {
    id: 2,
    image: 'https://img.freepik.com/premium-photo/book-is-open-page-that-says-word-bottom_337384-107155.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid',
    title: 'New Arrivals',
    description: 'Check out our latest products!',
  },
  {
    id: 3,
    image: 'https://img.freepik.com/premium-photo/woman-yellow-shirt-stands-front-hanger-wears-yellow-shirtgenerative-ai_391052-15789.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user',
    title: 'Clearance Sale',
    description: 'Last chance to grab deals!',
  },
];

const Promo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="relative">
      <Slider {...settings} className="rounded-lg overflow-hidden">
        {promoItems.map((item) => (
          <div key={item.id} className="relative h-80">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Promo;
