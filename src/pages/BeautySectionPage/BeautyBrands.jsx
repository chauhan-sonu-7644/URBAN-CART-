// import React from 'react'
const cols = [
  {
    name: "Deyomkar",
    Description: "Unisex Black Natural Herbal Charcoal Peel-Off Mask For Glowing Skin - 200 ml",
    imageSrc:
      "https://img.freepik.com/premium-photo/magnificent-charcoal-detoxifying-cleanser-isolated-white-background_787273-35845.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Herbal Charcoal peel-Off Mask.",
    href: "#",
    price:'₹ 380'
  },
  {
    name: " PLUM",
    Description: "Squalane & Vitamin E SPF 50 PA+++ Dewy-Bright Sunscreen - 100 g",
    imageSrc:
      "https://img.freepik.com/free-vector/realistic-sun-protection-infographic_23-2148952165.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt:"Squalane & Vitamin E SPF 50 PA+++ Dewy-Bright Sunscreen - 100 g.",
    href: "#",
    price:"₹ 499"
  },
  {
    name: "Lotus Herbals",
    Description: "Sustainable Ecostay Insta-Blend 5 In 1 Creme Compact - Nude Beige CC03 10 g",
    imageSrc:
      "https://img.freepik.com/premium-photo/lotus-cosmetic-ads-template_756748-20321.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Lotus Herbals.",
    href: "#",
    price:"₹ 399"
  },
  {
    name: "KURAIY",
    Description: "Sustainable Professional Phyto Rx Whitening Brightening Serum 30ml",
    imageSrc:
      "https://img.freepik.com/free-vector/realistic-natural-cosmetic-advertisement_52683-8093.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Lotus Herbals.",
    href: "#",
    price:"₹ 429"
  },
];
const beautybrands = [
  {
    id: 1,
    name: "Minimalist",
    href: "",
    imageSrc:
      "https://img.freepik.com/premium-photo/cosmetic-packaging-design-modern-presentation-with-natural-background_95218-3768.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Minimalist",
    price: "MRP ₹ 899",
    Description: "Vitamin B5 Lightweight & Oil Free Moisturizer -  150 g ",
  },
  {
    id: 2,
    name: "FIXDERMA",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/jar-empty-white-plastic-tubes-cosmetics-yellow-background-packaging-cream-gel-serum-advertising-product-promotion-mock-up_116441-19910.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "FIXDERMA.",
    price: "MRP ₹ 589",
    Description: "Nigrifix Cream for Acanthosis Nigricans For Dark Neck & Ankles - 100g ",
  },
  {
    id: 3,
    name: "GLAMVEDA",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/top-view-lipstick-with-brush_23-2149096695.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "GLAMVEDA LIPSTICK.",
    price: "MRP ₹ 372",
    Description: "City Girl Always On Matte Mini Liquid Lipstick - 1.2 ml each",
  },
  {
    id: 4,
    name: "SKINN",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/blank-perfume-glass-bottle-design-resource_53876-105945.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "SKINN PERFUME",
    price: "MRP ₹ 1245",
    Description: "Women Celeste EDP- By Titan Women Celeste EDP & Nude EDP",
  },
];
const acce = [
  {
    id: 1,
    name: "Love Beauty & Planet",
    href: "",
    imageSrc:
      "https://img.freepik.com/free-vector/concept-poster-organic-natural-cream_88138-50.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Body Wash with Cherry Blossom Fragrance & Coconut Oil Extracts - 300ml",
    Description:"Body Wash with Cherry Blossom Fragrance & Coconut Oil Extracts - 300ml",
    price: "MRP ₹ 449",
  },
  {
    id: 2,
    name: "NOY",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/makeup-realistic-composition-beuty-products_1273023-398.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Makeup Realistic Compositiont.",
    price: "MRP ₹ 679",
    Description:"Makeup Realistic Compositiont  -Set of 15 Natural Glow Makeup Kit",
  },
  {
    id: 3,
    name: "Organic Harvest",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-psd/organic-soap-mockup_23-2151552126.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Organic soap mockup.",
    price: "MRP ₹ 345",
    Description:"Organic Harvest soap mockup  -Bathing Moisturizing Soaps 125 gm Each",
  },
  {
    id: 4,
    name: "Blue Haven",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/top-view-black-mascara-with-grey-background_23-2148299644.jpg?ga=GA1.1.714022349.1721762449&semt=sph",
    imageAlt: "Intense Easy Sketch Eyeliner 1 ml - Extreme Black.",
    price: "MRP ₹ 134",
    Description:'Blue Haven Intense Easy Sketch Eyeliner 1 ml - Extreme Black'
  },
];
  function BeautyBrands() {
    return (
      <>
        <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
          <div className="pt-8">
            <div className="flex items-center">
              <ol className="flex w-full items-center overflow-hidden">
                <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0 font-semibold">
                  <a href="/">Home</a>
                </li>
                <li className="text-body mt-0.5 text-base">/</li>
                <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                  <a className="capitalize font-semibold" href="/BEAUTY">
                    Beauty Product
                  </a>
                </li>
                <li className="text-body mt-0.5 text-base">/</li>
                <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                  <a className="capitalize font-semibold" href="/BeautyBrands">
                    Beauty Collection
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
            <div className="col-span-5 grid grid-cols-2 gap-2.5">
              {Array.from({ length: 2 }, (_, i) => (
                <div
                  key={i}
                  className="col-span-1 transition duration-150 ease-in hover:opacity-90"
                >
                  <img
                    src="https://img.freepik.com/premium-photo/citrus-perfume-with-lemon-stones_1030899-7025.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                    alt="Nike Air Max 95 By You--0"
                    className="w-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="col-span-4 pt-8 lg:pt-0">
              <div>
                <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                  Wild stone
                </h2>
                <p className="text-body text-lg leading-6 font-semibold lg:text-base lg:leading-8 text-gray-600">
                  Men Red & Night Rider Set Of 2 Long Lasting Eau De Parfum- 30 ml Each
                </p>
                <div className="mt-5 flex items-center ">
                  <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                    MRP ₹ 498
                  </div>
                  <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                    MRP ₹ 840
                  </span>
                </div>
              </div>
              <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                  <button
                    className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                    disabled
                  >
                    +
                  </button>
                  <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                    1
                  </span>
                  <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                    -
                  </button>
                </div>
                <button
                  type="button"
                  className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* OTHER SECTION */}
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {cols.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-black lg:aspect-none  lg:h-80">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-black font-bold text-bold ">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 "
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm font-medium text-gray-900">
                          {product.Description}
                        </p>
                        <p className="text-lg  font-bold text-gray-900">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-[90%] rounded-lg bg-black px-2 py-1.5 text-sm font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* beautybrands */}
          <div className="bg-white">
            <div className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {beautybrands.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-black lg:aspect-none  lg:h-80">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-black font-bold text-bold">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm font-medium text-gray-700">
                          {product.Description}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-[90%] rounded-lg bg-black px-2 py-1.5 text-sm font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* acce */}
          <div className="bg-white">
            <div className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {acce.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-black lg:aspect-none  lg:h-80">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-black font-bold text-bold">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm font-medium text-gray-900">
                          {product.Description}
                        </p>
                        <p className="text-lg  font-bold text-gray-800">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-[90%] rounded-lg bg-black px-2 py-1.5 text-sm font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default BeautyBrands;