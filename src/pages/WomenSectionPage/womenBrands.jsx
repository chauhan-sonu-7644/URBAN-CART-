// import React from 'react'
const products = [
  {
    id: 1,
    name: "BIBA ",
    href: "",
    imageSrc:
      "https://img.freepik.com/premium-photo/full-length-modern-woman-dress-standing-near-wardrobe-with-clothes-choosing-what-wear-isolated-pink_171337-68204.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "BIBA.",
    Description: "Teal Floral Printed Longline Kaftan Top",
    price: " ₹ 959",
  },
  {
    id: 2,
    name: "VERO MODA",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/young-woman-looking-away-while-standing-store_1048944-5095049.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "VERO MODA.",
    Description: "Shawl Collar Ribbed Longline Front-Open Sweaters",
    price: "₹1319",
  },
  {
    id: 3,
    name: "Popwings",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/serious-short-haired-girl-spending-time-shopping-choosing-attire-photoshoot-indoor-portrait-unsure-caucasian-lady-black-clothes-looking-hanger-with-white-dress_197531-7854.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Popwings.",
    Description: " Print Smocked Chiffon Top",
    price: "₹ 639",
  },
  {
    id: 4,
    name: "Stylum",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-5144.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Stylum.",
    Description: "Print Mandarin Collar Pure Cotton Top",
    price: "₹ 619",
  },
];
const indian = [
  {
    name: "Mialo fashion",
    Description: "Ethnic Motifs Printed Fit and Flare Maternity Dress",
    imageSrc:
      "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17508.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " Ethnic Motifs Printed Fit and Flare Maternity Dress.",
    href: "#",
    price: "₹ 819",
  },
  {
    name: "RICH & ROMAN",
    Description: "Woven Design Zari Pure Silk Banarasi Saree",
    imageSrc:
      "https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400848.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Woven Design Zari Pure Silk Banarasi Saree.",
    href: "#",
    price: "₹ 2629",
  },
  {
    name: "RedRound",
    Description: "Pink Sequinned Saree",
    imageSrc:
      "https://img.freepik.com/premium-photo/young-woman-looking-away-while-standing-outdoors_1048944-8205366.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Pink Sequinned Saree.",
    href: "#",
    price: "₹ 6259",
  },
  {
    name: "Anouk",
    Description: "Floral Zari Banarasi Saree",
    imageSrc:
      "https://img.freepik.com/premium-photo/woman-red-sari-sits-front-chair_999340-72439.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Floral Zari Banarasi Saree.",
    href: "#",
    price: "₹ 1879",
  },
];
const sports = [
  {
    name: "H & M",
    Description: "DryMove Halterneck Sports Dress",
    imageSrc:
      "https://img.freepik.com/free-photo/woman-headphones-listens-music-does-warm-up-before-fitness-workout-purple-wall_197531-16613.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: " H & M.",
    href: "#",
    price: "₹ 2299",
  },
  {
    name: "Proline Active",
    Description: "Women Pink Colourblocked Tights",
    imageSrc:
      "https://img.freepik.com/free-photo/slender-woman-purple-sports-bodysuit-white-headphones-resting-sitting-mat-fitness_197531-16619.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "ActiveWear By Proline.",
    href: "#",
    price: "₹ 559",
  },
  {
    name: "Blissclub",
    Description: " Extra Softness The Greatest Training Tights",
    imageSrc:
      "https://img.freepik.com/free-photo/young-woman-great-mood-doing-yoga-purple-fitness-mat_197531-16672.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Best of ActiveWear.",
    href: "#",
    price: "₹ 1169",
  },
  {
    name: "HRX by Hrithik Roshan",
    Description: "Women Solid Skinny Fit Seamless Yoga Tights",
    imageSrc:
      "https://img.freepik.com/free-photo/brunette-woman-wearing-sport-clothes_329181-13211.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Best of ActiveWear.",
    href: "#",
    price: "₹ 573",
  },
];
const shoes = [
  {
    id: 1,
    name: "Sneakers villa",
    href: "",
    imageSrc:
      "https://img.freepik.com/premium-photo/person-is-putting-pair-sneakers-with-pink-sole_1034910-76767.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "sneakers villa.",
    Description: "Women Colourblocked Round Toe Comfort Insole Canvas Sneakers",
    price: "₹ 649",
  },
  {
    id: 2,
    name: "U.S. Polo Assn.",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/assortment-womens-shoes-summer-fashion_206268-12131.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "U.S. Polo Assn.",
    Description: "U.S. Polo Assn- Women HEIDI Textured Comfort Insole Sneakers",
    price: "₹ 2699",
  },
  {
    id: 3,
    name: "Van Heusen",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/pair-pink-high-heels-sitting-top-block-colored-blocks-generative-ai_97167-6991.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Van Heusen.",
    Description: "Van Heusen- Women Textured Block Heel Pumps Office",
    price: "788",
  },
  {
    id: 4,
    name: "OPHELIA",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669600.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "OPHELIA.",
    Description: "Women Comfort Sandals Slide rightin to comfort and ease!",
    price: "₹ 1499",
  },
];
const acce = [
  {
    id: 1,
    name: "Kushal's Fashion Jewellery ",
    href: "",
    imageSrc:
      "https://img.freepik.com/free-photo/top-view-sterling-silver-earrings-with-swarovski-crystal-with-studs-black-wall_140725-12952.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Kushal's Fashion Jewellery",
    Description: "Gold-Plated Copper Artificial Beads Jhumkas Earrings",
    price: "₹ 690",
  },
  {
    id: 2,
    name: "Sukkhi Mangalsutra",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/mangalsutra-golden-necklace-worn-by-married-hindu-women-arranged-with-traditional-saree-with-huldi-kumkum-mogra-flowers-gajra-selective-focus_466689-64352.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Sukkhi Mangalsutra.",
    Description: "Gold-Plated Beaded Mangalsutra Gold-Plated Mangalsutra",
    price: "₹ 1567",
  },
  {
    id: 3,
    name: "March by FableStreet",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/gold-necklace-is-piece-fabric-with-red-cloth-background_1340-42873.jpg?size=626&ext=jpg&ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "March by FableStreet.",
    Description: "Rhodium-Plated 925 Sterling gold Delicate CZ Studded Ring",
    price: "₹ 1985",
  },
  {
    id: 4,
    name: "PALMONAS",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/set-jewelry-including-red-rose-gold-bracelet_706452-25452.jpg?size=626&ext=jpg&ga=GA1.1.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "PALMONAS.",
    Description: "A set of jewelry Gold-Toned Gold-Plated Bangle-Style gold bracelet",
    price: "₹ 1595",
  },
];

function womenBrands() {
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
                <a className="capitalize font-semibold" href="/WOMEN">
                  womenSection
                </a>
              </li>
              <li className="text-body mt-0.5 text-base">/</li>
              <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                <a className="capitalize font-semibold" href="/BestSellStore">
                  Collection
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
                  src="https://img.freepik.com/free-photo/lady-black-pants-waving-her-hand-leaning-hanger-with-shiny-clothes-shoes-heels_197531-17605.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                  alt="Nike Air Max 95 By You--0"
                  className="w-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          <div className="col-span-4 pt-8 lg:pt-0">
            <div>
              <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                Amagyaa
              </h2>
              <p className="text-body text-lg leading-6 uppercase font-semibold lg:text-base lg:leading-8 text-gray-600">
                Self Design Shoulder Straps Gathered Schiffli Cotton Maxi Dress
              </p>
              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  MRP ₹ 2499
                </div>
                <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                  MRP ₹ 8450
                </span>
              </div>
            </div>
            <div className="border-b border-gray-300 pb-3  ">
              <div className="mb-4">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                  size
                </h3>
                <ul className="colors -mr-3 flex flex-wrap">
                  {["S", "M", "L", "XL"].map((size) => (
                    <li
                      key={size}
                      className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm "
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 ">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                  color
                </h3>
                <ul className="colors -mr-3 flex flex-wrap">
                  {[
                    "bg-orange-400",
                    "bg-pink-400",
                    "bg-violet-600",
                    "bg-red-500",
                  ].map((color) => (
                    <li
                      key={color}
                      className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                    >
                      <span
                        className={`block h-full w-full rounded ${color}`}
                      />
                    </li>
                  ))}
                </ul>
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
              {products.map((product) => (
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
        {/* Accessocerise */}
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
        {/* shoes */}
        <div className="bg-white">
          <div className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {shoes.map((product) => (
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
        {/* indian */}
        <div className="bg-white">
          <div className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {indian.map((product) => (
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
                      <p className="text-lg font-bold text-gray-800">
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
        {/* sport */}
        <div className="bg-white">
          <div className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {sports.map((product) => (
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
      </div>
    </>
  );
}

export default womenBrands;
