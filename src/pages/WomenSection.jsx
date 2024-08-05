
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  product= [
  {
    id: 1,
    Brand: "BIBA ",
    href: "",
    imageSrc:
      "https://img.freepik.com/premium-photo/full-length-modern-woman-dress-standing-near-wardrobe-with-clothes-choosing-what-wear-isolated-pink_171337-68204.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "BIBA.",
    offer: "30-40% OFF",
  },
  {
    id: 2,
    Brand: "VERO MODA",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/young-woman-looking-away-while-standing-store_1048944-5095049.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "VERO MODA.",
    offer: "Min. 50% OFF",
  },
  {
    id: 3,
    Brand: "H & M",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/serious-short-haired-girl-spending-time-shopping-choosing-attire-photoshoot-indoor-portrait-unsure-caucasian-lady-black-clothes-looking-hanger-with-white-dress_197531-7854.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "H & M collection mens.",
    offer: "10-20% OFF",
  },
  {
    id: 4,
    Brand: "MARKS & SPENCER",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-5144.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "MARKS & SPENCER.",
    offer: "UP TO 40% OFF",
  },
];
const promoItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/gradient-international-women-s-day-sale-horizontal-banner_23-2149288139.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Summer Sale",
    description: "Up to 50% off on summer collection!",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/new-season-banner-template-with-pink-lines_1361-1528.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "New Arrivals",
    description: "Check out our latest products!",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/asian-fashion-manager-with-checklist-retail-store-clothes-clothing-inspection_74952-3649.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Clearance Sale",
    description: "Last chance to grab deals!",
  },
];

 const indian = [
  {
    name: "All Maroon Indian Wear",
    description: "For an always cool outlook",
    imageSrc:
      "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17508.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " maroon and golden half sleeve shirt with waistcoat standing.",
    href: "#",
  },
  {
    name: "Ethnic Casuals",
    description: "Indians surely know the to comfort",
    imageSrc:
      "https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400848.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"Ethnic Casuals.",
    href: "#",
  },
  {
    name: "HandPicked Trendy Style",
    description: "Update the language of comfort with these",
    imageSrc:
      "https://img.freepik.com/premium-photo/young-woman-looking-away-while-standing-outdoors_1048944-8205366.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Cleaning Tools Collection.",
    href: "#",
  },
];
const sports = [
  {
    name: "Online Exclusive Nike Style",
    description: "For an unfiexible goal & a flexible workout",
    imageSrc:
      "https://img.freepik.com/free-photo/woman-headphones-listens-music-does-warm-up-before-fitness-workout-purple-wall_197531-16613.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " Online Exclusive Nike Style.",
    href: "#",
  },
  {
    name: "ActiveWear By Proline",
    description: "Steps into something stretchier",
    imageSrc:
      "https://img.freepik.com/free-photo/slender-woman-purple-sports-bodysuit-white-headphones-resting-sitting-mat-fitness_197531-16619.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"ActiveWear By Proline.",
    href: "#",
  },
  {
    name: "Best of ActiveWear",
    description: "Transform the way you train",
    imageSrc:
      "https://img.freepik.com/free-photo/young-woman-great-mood-doing-yoga-purple-fitness-mat_197531-16672.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Best of ActiveWear.",
    href: "#",
  },
];
const shoes = [
  {
    id: 1,
    Brand: "Sneakers For Dancers ",
    href: "",
    imageSrc:
      "https://img.freepik.com/premium-photo/person-is-putting-pair-sneakers-with-pink-sole_1034910-76767.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Sneakers For Dancers.",
    description: "These were made for all you moves",
  },
  {
    id: 2,
    Brand: "Outback OutdoorShoes",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/assortment-womens-shoes-summer-fashion_206268-12131.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Outback OutdoorShoes.",
    description: "Bring the adventure back home",
  },
  {
    id: 3,
    Brand: "Neutral Shades",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/pair-pink-high-heels-sitting-top-block-colored-blocks-generative-ai_97167-6991.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Puma collection mens.",
    description: "Ticks all the boxes & pairs with everythings",
  },
  {
    id: 4,
    Brand: "Flip-Flops & Sliders",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669600.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Flip-Flops & Sliders.",
    description: "Slide rightin to comfort and ease!",
  },
];
const acce = [
  {
    id: 1,
    Brand: "Best Of Imittire ",
    href: "",
    imageSrc:
      "https://img.freepik.com/free-photo/top-view-sterling-silver-earrings-with-swarovski-crystal-with-studs-black-wall_140725-12952.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Best Of Imittire",
    description: "Grand jewellery that`s sure to turn heads",
  },
  {
    id: 2,
    Brand: "The Mangalsutra Collection",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/mangalsutra-golden-necklace-worn-by-married-hindu-women-arranged-with-traditional-saree-with-huldi-kumkum-mogra-flowers-gajra-selective-focus_466689-64352.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "The Mangalsutra Collection.",
    description: "A style symbol of a lifelong bond",
  },
  {
    id: 3,
    Brand: "HandCraft Jewellery",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/gold-necklace-is-piece-fabric-with-red-cloth-background_1340-42873.jpg?size=626&ext=jpg&ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "HandCraft Jewellery.",
    description: "A personal touch to every special piece",
  },
  {
    id: 4,
    Brand: "Gold bracelet",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/set-jewelry-including-red-rose-gold-bracelet_706452-25452.jpg?size=626&ext=jpg&ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Red rose and gold bracelet.",
    description: "A set of jewelry including a red rose and gold bracelet",
  },
];

function WomenSection() {
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
            <div key={item.id} className="relative h-80">
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
export default WomenSection;
