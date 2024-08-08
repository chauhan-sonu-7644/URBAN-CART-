
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const promoItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/various-decorative-cosmetics-beautiful-background-selective-focus_73944-57258.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Summer Sale",
    description: "Up to 50% off on summer collection!",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/copyspec-background-beauty-product-advertising_10541-12221.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "New Arrivals",
    description: "Check out our latest products!",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/flat-lay-natural-cosmetics-with-copy-space_23-2148578646.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    title: "Clearance Sale",
    description: "Last chance to grab deals!",
  },
];
const cols = [
  {
    name: "Deyomkar",
    description: "Herbal Charcoal peel-Off Mask",
    imageSrc:
      "https://img.freepik.com/free-vector/realistic-ad-charcoal-sheet-mask-product_52683-44056.jpg?ga=GA1.1.714022349.1721762449&semt=sph",
    imageAlt: "Herbal Charcoal peel-Off Mask.",
    href: "/BeautyBrands",
  },
  {
    name: " PLUM",
    description: "2 % Niacinamide SunScreen",
    imageSrc:
      "https://img.freepik.com/free-vector/realistic-sunscreen-bottle-promo_52683-62303.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"PLUM.",
    href: "/BeautyBrands",
  },
  {
    name: "Lotus Herbals",
    description: "phyto-Rx Protective Lotion",
    imageSrc:
      "https://img.freepik.com/premium-photo/lotus-cosmetic-ads-template_756748-20484.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Lotus Herbals.",
    href: "/BeautyBrands",
  },
];
const beautybrands = [
  {
    id: 1,
    Brand: "DOT & KEY",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/cosmetic-packaging-design-modern-presentation-with-natural-background_95218-3768.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "DOT & KEY",
    price: "MRP ₹ 899",
    description: "Barrier Repair pH5.5 Skin Care ",
  },
  {
    id: 2,
    Brand: "Conscious Chemist",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/jar-empty-white-plastic-tubes-cosmetics-yellow-background-packaging-cream-gel-serum-advertising-product-promotion-mock-up_116441-19910.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Conscious Chemist.",
    price: "MRP ₹ 589",
    description: "Retinol Body Treatment Cream ",
  },
  {
    id: 3,
    Brand: "GLAMVEDA",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/premium-photo/sosmetics-isolated-black_392895-467787.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "GLAMVEDA LIPSTICK.",
    price: "MRP ₹ 212",
    description: "Metter Mini Liquid Lipstick-026",
  },
  {
    id: 4,
    Brand: "SKINN",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/free-photo/blank-perfume-glass-bottle-design-resource_53876-105945.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "SKINN PERFUME",
    price: "MRP ₹ 645",
    description: "Women Celeste EDP",
  },
];
const acce = [
  {
    id: 1,
    Brand: "Love Beauty & Planet",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/free-vector/concept-poster-organic-natural-cream_88138-50.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Love Beauty & Planet",
    price: "MRP ₹ 409",
  },
  {
    id: 2,
    Brand: "Makeup Realistic Compositiont",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/free-vector/makeup-realistic-composition_1284-18448.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Makeup Realistic Compositiont.",
    price: "MRP ₹ 679",
  },
  {
    id: 3,
    Brand: "Organic soap mockup",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/premium-psd/organic-soap-mockup_23-2151552126.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Organic soap mockup.",
    price: "MRP ₹ 245",
  },
  {
    id: 4,
    Brand: "Blue Haven",
    href: "/BeautyBrands",
    imageSrc:
      "https://img.freepik.com/free-photo/top-view-black-mascara-with-grey-background_23-2148299644.jpg?ga=GA1.1.714022349.1721762449&semt=sph",
    imageAlt: "Blue Haven.",
    price: "MRP ₹ 134",
  },
];

function BeautySection() {
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
      {/* BEAUTY BRANDS */}
      <div className="mx-auto max-w-9xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {beautybrands.map((product) => (
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
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Acce */}
      <div className="mx-auto max-w-9xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
      {/* cols */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-21">
            <h1 className="text-3xl font-bold tracking-wider text-gray-700 uppercase">
              top premium beauty products
            </h1>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {cols.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 font-bold uppercase text=2xl text-gray-800">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-600">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default BeautySection;
