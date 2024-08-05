// import React from 'react'
const products = [
  {
    id: 1,
    name: "Male belt sweater accessories clothes",
    href: "/mensCollectionStore",
    imageSrc:
      "https://img.freepik.com/free-photo/male-belt-sweater-accessories-clothes_1203-6421.jpg?ga=GA1.2.714022349.1721762449&semt=ais_hybrid",
    imageAlt: "Male belt sweater accessories clothes.",
    price: "₹899",
    color: "Gray",
  },
  {
    id: 2,
    name: "Nike Air Max 21A",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    imageAlt: "Nike Air Max 21A.",
    price: "₹26,199",
    color: "Green-Yellow",
  },
  {
    id: 3,
    name: "sherwani or Kurta Pyjama",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/two-indian-men-wears-ethnic-traditional-cloths-male-fashion-models-with-sherwani-kurta-pyjama-sitting-posing-wing-chair-sofa-against-brown-grunge-background-selective-focus_466689-45468.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user",
    imageAlt: "sherwani or Kurta Pyjama.",
    price: "₹48,199",
    color: "Green-Yellow",
  },
  {
    id: 4,
    name: "Formal Shirts & T-shirts",
    href: "#",
    imageSrc:
      "https://img.freepik.com/premium-photo/hd-digital-art-wallpaper-background_783884-192219.jpg?w=740",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₹1480",
    color: "white Yellow Gray",
  },
];

export function mensCollectionStore() {
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
                <a className="capitalize font-semibold" href="/MEN">
                  Mens Section
                </a>
              </li>
              <li className="text-body mt-0.5 text-base">/</li>
              <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                <a className="capitalize font-semibold" href="#">
                  Collection
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
          <div className="col-span-5 grid grid-cols-2 gap-2.5">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="col-span-1 transition duration-150 ease-in hover:opacity-90"
              >
                <img
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Nike Air Max 95 By You--0"
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="col-span-4 pt-8 lg:pt-0">
            <div className="mb-7 border-b border-gray-300 pb-7">
              <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                Nike Air Max 95 Mens
              </h2>
              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                The Nike Air Max 95 By You lets you take inspiration from the
                human body itself. The midsole represents the spine, graduated
                panels are the muscles, the lace loops are the shoe&apos;s ribs
                and the mesh in the upper is the skin.
              </p>
              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  MRP ₹ 2180.00
                </div>
                <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                MRP ₹ 5180.00
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
      <div className="bg-white">
        <div className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className="mt-5 flex items-center space-x-2">
                  <span className="block text-sm font-semibold">Size : </span>
                  <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default mensCollectionStore;
