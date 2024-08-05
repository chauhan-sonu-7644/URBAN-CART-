// import React from 'react'
const products = [
    {
      id: 1,
      name: 'Apple iPhone 14 Pro Max (256 GB) - Black Titanium',
      href: '',
      imageSrc: 'https://img.freepik.com/premium-photo/electronic-devices-balancing-concept_23-2150422326.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
      imageAlt: "Apple iPhone 14 Pro Max (256 GB) - Black Titanium.",
      price: '₹ 80,000',
    },
    {
        id: 1,
        name: 'Apple Watch SE (2nd Gen, 2023) [GPS 44mm] Smartwatch',
        href: '#',
        imageSrc: 'https://img.freepik.com/premium-photo/black-apple-watch-with-neon-blue-face_843415-1362.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
        imageAlt: "Apple Watch SE (2nd Gen, 2023) [GPS 44mm] Smartwatch.",
        price: '₹ 23,500',
      },
      {
        id: 1,
        name: 'Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C)-​​​​​​​(White)',
        href: '#',
        imageSrc: 'https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039320.jpg?size=626&ext=jpg&uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_use',
        imageAlt: "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C)-​​​​​​​(White).",
        price: '₹ 22,790',
      },
      {
        id: 1,
        name: 'Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina',
        href: '#',
        imageSrc: 'https://img.freepik.com/premium-psd/macbook-ui-ux-mockup_662214-736591.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid',
        imageAlt: "Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina.",
        price: '₹ 1,07,990',
      },
    // More products...
  ]
    
    export function AccSellStore() {
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
                    <a className="capitalize font-semibold" href="/BestSellers">
                      Best Sellers in Accessories
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
                      src="https://img.freepik.com/free-psd/iphone-15-pro-mockup-front-back-view_1332-60588.jpg?ga=GA1.1.714022349.1721762449&semt=sph"
                      alt="Nike Air Max 95 By You--0"
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
              <div className="col-span-4 pt-8 lg:pt-0">
                <div>
                  <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                  Apple iPhone 15 Pro Max (256 GB) - Black Titanium
                  </h2>
                  <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                  iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.
                  </p>
                  <div className="mt-5 flex items-center ">
                    <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                      MRP ₹ 1,51,500
                    </div>
                    <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                    MRP ₹ 1,54,000
                    </span>
                  </div>
                </div>
                <div className="space-s-4 3xl:pr-48 flex items-center gap-2 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                  <button
                    type="button"
                    className="h-11 w-[40%] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-black lg:aspect-none  lg:h-80">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-black font-semibold text-bold">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm font-medium text-gray-900">
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
        </>
      );
    }
    
    export default AccSellStore;
    