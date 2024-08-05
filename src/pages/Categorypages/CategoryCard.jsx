// import React from 'react'
import { Star, ChevronDown } from 'lucide-react'

const CategoryCard = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-9xl px-5 py-20">
      {/* product 1 */}
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Ready to Wear Lehenga"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502996.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-2xl font-semibold tracking-widest text-black">Fabcartz</h2>
            <h1 className="my-4 text-2 font-semibold text-gray-500">Ready to Wear Lehenga</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option className='font-semibold'>S</option>
                    <option className='font-semibold'>M</option>
                    <option className='font-semibold'>L</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">₹27,199</span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* product 2 */}
        <div className=" mt-4 mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Peter England"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://img.freepik.com/premium-photo/happy-handsome-man-with-mobile-phone-standing_33839-8388.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-semibold tracking-widest text-black ">Peter England</h2>
            <h1 className="my-4 text-xl font-semibold text-gray-700">Men Black Solid Single-Breasted Formal Blazer</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option className='font-semibold'>S</option>
                    <option className='font-semibold'>M</option>
                    <option className='font-semibold'>L</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-900">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">MRP ₹ 3999</span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* product 3 */}
        <div className=" mt-4 mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Active Wear"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://img.freepik.com/premium-photo/young-woman-exercising-outside_52137-24323.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-semibold tracking-widest  text-black">HRX by Hrithik Roshan</h2>
            <h1 className="my-4 text-xl font-semibold text-gray-500">Women red Melange Sports T-shirt</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option className='font-semibold'>S</option>
                    <option className='font-semibold'>M</option>
                    <option className='font-semibold'>L</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">MRP ₹ 914</span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* product 4 */}
        <div className=" mt-4 mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Men Active Wear"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://img.freepik.com/free-photo/resting-sportsman-with-bottle_23-2147757987.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-semibold tracking-widest text-black">HRX by Hrithik Roshan</h2>
            <h1 className="my-4 text-xl font-semibold text-gray-500">Rapid-Dry Printed Training T-shirt</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option className='font-semibold'>S</option>
                    <option className='font-semibold'>M</option>
                    <option className='font-semibold'>L</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">MRP ₹ 499</span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CategoryCard;