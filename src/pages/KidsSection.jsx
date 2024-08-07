
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const promoItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-124939.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Summer Sale",
    description: "Up to 50% off on summer collection!",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/attractive-asian-woman-showing-smartphone-app-shopping-bags-buying-online-via-application-standi_1258-156868.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "New Arrivals",
    description: "Check out our latest products!",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-with-shopping-bag-credit-card_74190-10468.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Clearance Sale",
    description: "Last chance to grab deals!",
  },
];
const indian = [
  {
    name: "All Maroon Indian Wear",
    description: "For an always cool outlook",
    imageSrc:
      "https://img.freepik.com/premium-photo/little-girl-model-studio-shopping_1303-7461.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " maroon and golden half sleeve shirt with waistcoat standing.",
    href: "/KidsBrands",
  },
  {
    name: " Printed Shirt",
    description: "Indians surely know the to comfort",
    imageSrc:
      "https://img.freepik.com/premium-photo/chic-mayoral-blouse-shorts-set-embroidered-satin-stitch-with-delicate-details_763042-5932.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"Ethnic Casuals.",
    href: "/KidsBrands",
  },
  {
    name: "HandPicked Trendy Style",
    description: "Update the language of comfort with these",
    imageSrc:
      "https://img.freepik.com/premium-photo/soft-focus-two-years-old-child-choosing-her-own-dresses-from-kids-cloth-rack_34048-113.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "HandPicked Trendy Style Collection.",
    href: "/KidsBrands",
  },
];
const sports = [
  {
    name: "Online Exclusive Nike Style",
    description: "For an unfiexible goal & a flexible workout",
    imageSrc:
      "https://img.freepik.com/free-photo/medium-shot-boys-with-sunglasses-posing-with-copy-space_23-2148423138.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " Online Exclusive Nike Style.",
    href: "/KidsBrands",
  },
  {
    name: "ActiveWear By Proline",
    description: "Steps into something stretchier",
    imageSrc:
      "https://img.freepik.com/premium-photo/summer-babies-blue-clothes-accessories-with-t-shirt-shortssneakers-modern-fashion-kids-outfitset-children-s-clothing-spring-summer-flat-lay-top-viewoverheadmockup_280499-1472.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"ActiveWear By Proline.",
    href: "/KidsBrands",
  },
  {
    name: "Best of Kids Wear",
    description: "Transform the way you train",
    imageSrc:
      "https://img.freepik.com/premium-photo/childs-clothes-sneakers-fabric_392895-539558.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Best of ActiveWear.",
    href: "/KidsBrands",
  },
];
const shoes = [
  {
    id: 1,
    Brand: "MARKS & SPENCER",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/clothes-newborn-concept-children-s-fashion-top-view_101035-253.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "MARKS & SPENCER",
    description: "These were made for all you moves",
  },
  {
    id: 2,
    Brand: "CHICCO",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/shelf-with-shirts-that-say-bug-bug-it_1230717-195524.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "CHICCO.",
    description: "Wherever there`s baby ",
  },
  {
    id: 3,
    Brand: "Neutral Shades",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/stylish-child-clothes-shoes-accessories-beige-background-flat-lay_495423-46938.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Puma collection mens.",
    description: "Ticks all the boxes & pairs with everythings",
  },
  {
    id: 4,
    Brand: "HRX",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/3d-illustration-realty-free-image_1023251-174873.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "HRX",
    description: "To comfort and ease!",
  },
];
const acce = [
  {
    id: 1,
    Brand: "T-shirt & jeans ",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/childish-image-with-jeans-yellow-t-shirt-accessories-pink-background_1048944-16739769.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Tshirt & jeans",
    price: "MRP ₹ 899",
  },
  {
    id: 2,
    Brand: "White T-shirt",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/free-photo/little-boy-with-hands-his-pocket-white-t-shirt-blue-jeans-looking-celing-pink-desk_179666-335.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "White T-shirt.",
    price: "MRP ₹ 679",
  },
  {
    id: 3,
    Brand: "Vest",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/isolated-tank-top-school-age-child-with-graphic-print-raw-hem-fashion-kid-concept-tshirt_655090-3134363.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Vest.",
    price: "MRP ₹ 499",
  },
  {
    id: 4,
    Brand: "Animal Print T-shirt",
    href: "/KidsBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/isolated-dolman-sleeve-top-toddlers-with-playful-animal-print-ear-fashion-kid-concept-tshirt_655090-3133406.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Animal Print T-shirt.",
    price: "MRP ₹ 989",
  },
];

function KidsSection() {
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
      {/* CARD SECTION */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-21">
            <h1 className="text-3xl font-bold tracking-wider text-gray-700 uppercase">
              Trending In Kids Wear
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
          PICKUP IN BRANDS
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
          Trending In T-shirt
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
                  <p className="mt-1 text-sm font-bold text-gray-700">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default KidsSection;
