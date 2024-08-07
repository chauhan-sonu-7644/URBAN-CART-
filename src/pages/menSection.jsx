
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  product= [
  {
    id: 1,
    Brand: "LEVI`S ",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/free-photo/spring-wardrobe-switch-view_23-2150264152.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Levis T-shirt.",
    offer: "MIN. 30% OFF",
  },
  {
    id: 2,
    Brand: "TOMMY HILFIGER",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/businessman-high-quality-image_1252102-29185.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "TOMMY HILFIGER.",
    offer: "30-50% OFF",
  },
  {
    id: 3,
    Brand: "PUMA",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/collection-shoes-jacket-hat-are-table_1266048-2531.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Puma collection mens.",
    offer: "10-20% OFF",
  },
  {
    id: 4,
    Brand: "NIKE",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/fitness-trends-urban-style-fashion-outfit-set-sport-lady_161568-3086.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Front of men's Nike collection.",
    offer: "UP TO 40% OFF",
  },
];
const promoItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/modern-man-casual-outfit-showing-shopping-bag-okay-sign-winking-camera-recommending-shop_1258-300002.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Summer Sale",
    description: "Up to 50% off on summer collection!",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/top-view-women-s-sneakers-with-laces-cross-body-bag_164357-3789.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "New Arrivals",
    description: "Check out our latest products!",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/full-body-fun-young-caucasian-man-brown-shirt_1106493-234389.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Clearance Sale",
    description: "Last chance to grab deals!",
  },
];
const indian = [
  {
    name: "All Maroon Indian Wear",
    description: "For an always cool outlook",
    imageSrc:
      "https://img.freepik.com/premium-photo/young-indian-man-maroon-golden-half-sleeve-shirt-with-waistcoat-standing-with-glowing-lights_593195-15005.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " maroon and golden half sleeve shirt with waistcoat standing.",
    href: "/MensBrands",
  },
  {
    name: "Ethnic Casuals",
    description: "Indians surely know the to comfort",
    imageSrc:
      "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"Ethnic Casuals.",
    href: "/MensBrands",
  },
  {
    name: "HandPicked Trendy Style",
    description: "Update the language of comfort with these",
    imageSrc:
      "https://img.freepik.com/premium-photo/handsome-hipster-businessman-guy-with-stylish-eyewear-fancy-denim-clothes-denim-shirt-holding-fashion-leather-bag-studio-with-creative-colored-pink-blue-commercial-lighting_338491-17037.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Cleaning Tools Collection.",
    href: "/MensBrands",
  },

];
const sports = [
  {
    name: "Online Exclusive Nike Style",
    description: "For an unfiexible goal & a flexible workout",
    imageSrc:
      "https://img.freepik.com/free-photo/strong-guy-with-muscular-body-workout-near-fence-morning-stadium-he-wears-sport-clothes-listening-music-with-headphones_197531-1139.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " Online Exclusive Nike Style.",
    href: "/MensBrands",
  },
  {
    name: "ActiveWear By Proline",
    description: "Steps into something stretchier",
    imageSrc:
      "https://img.freepik.com/premium-photo/portrait-focused-motivated-happy-afro-american-young-handsome-sportive-man-with-earphones-running-inside-abandoned-place-middle-two-walls-with-sun-lights-his-back_232070-2770.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"ActiveWear By Proline.",
    href: "/MensBrands",
  },
  {
    name: "Best of ActiveWear",
    description: "Transform the way you train",
    imageSrc:
      "https://img.freepik.com/free-photo/sporty-man-blue-sports-jacket-ties-his-sneakers_613910-16138.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Best of ActiveWear.",
    href: "/MensBrands",
  },
]
const shoes = [
  {
    id: 1,
    Brand: "Sneakers For Dancers ",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Sneakers For Dancers.",
    description: "These were made for all you moves",
  },
  {
    id: 2,
    Brand: "Outback OutdoorShoes",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/new-mens-sneakers-box-white-background_206268-12492.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Outback OutdoorShoes.",
    description: "Bring the adventure back home",
  },
  {
    id: 3,
    Brand: "Neutral Shades",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/free-photo/black-leather-sports-shoe-with-elegant-shoelace-generated-by-ai_188544-19647.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Puma collection mens.",
    description: "Ticks all the boxes & pairs with everythings",
  },
  {
    id: 4,
    Brand: "Flip-Flops & Sliders",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/womens-flipflops-summer-shoes-beach-walk-summer_344253-4927.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Flip-Flops & Sliders.",
    description: "Slide rightin to comfort and ease!",
  },
];
const acce = [
  {
    id: 1,
    Brand: "Smart Wathces ",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/watch-with-black-face-red-dial-side_1249034-2715.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Smart Wathces",
    description: "Ahead of its time in style & performance",
  },
  {
    id: 2,
    Brand: "Apple MacBook",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/free-photo/high-angle-laptop-flowers-arrangement_23-2149672636.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Apple MacBook.",
    description: "Apple MacBook Pro Technical Specifications",
  },
  {
    id: 3,
    Brand: "Earbuds",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/white-wireless-headphones-use-bluetooth-connect-audio-devices-sound-is-passed-from-one-place-another-via-radio-waves-frequency-that-it-does-receive-cause-interference_695181-2148.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Earbuds.",
    description: "Earbuds are highly complex devices, packed full of electronics",
  },
  {
    id: 4,
    Brand: "Minimalist Watches",
    href: "/MensBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/luxury-stylish-golden-watch-with-silver-golden-chain-white-surface_752325-30366.jpg?size=626&ext=jpg&ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Minimalist Watches.",
    description: "Understated is the new style statement",
  },
];

function menSection() {
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
    <div className="bg-white">
      {/* promo section */}
      <div className="relative">
        <Slider {...settings} className="rounded-lg overflow-hidden">
          {promoItems.map((item) => (
            <div key={item.id} className="relative h-72">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/*  Brand product */}
      <div className="mx-auto max-w-9xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-wide uppercase text-gray-700">
          Biggest Deals On Top Brands
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-black">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.Brand}
                    </a>
                  </h3>
                </div>
                <p className=" mt-2 text-2lg font-bold text-gray-900">
                  {product.offer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CARD SECTION */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-21">
            <h1 className="text-3xl font-bold tracking-wider text-gray-700 uppercase">
              Trending In Indian Wear
            </h1>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {indian.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
              {/* card section 2 */}
            <h1 className=" mt-14 text-3xl font-bold tracking-wider text-gray-700 uppercase">
            Trending In Sports Wear
            </h1>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {sports.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  Footwear product */}
      <div className="mx-auto max-w-9xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-wide uppercase text-gray-700">
          Trending In Footwear
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {shoes.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-black">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.Brand}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Accessories */}
      <div className="mx-auto max-w-9xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-700">
          Trending In Accessories
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {acce.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-black">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.Brand}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default menSection;
