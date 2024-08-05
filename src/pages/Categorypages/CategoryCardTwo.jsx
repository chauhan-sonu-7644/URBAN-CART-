// import React from 'react'
import { Star, ChevronDown } from "lucide-react";

const CategoryCardTwo = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-9xl px-5 py-20">
        {/* product 1 */}
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Ribbed Shirt Pure Cotton Solid"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://img.freepik.com/free-photo/portrait-young-beautiful-smiling-hipster-girl-trendy-summer-checkered-shirt-jeans-clothes-sexy-carefree-woman-posing-near-pink-wall-studio-positive-model-with-no-makeup_158538-3321.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-2xl font-semibold tracking-widest text-black">
            Trend Level
            </h2>
            <h1 className="my-4 text-2 font-semibold text-gray-500">
                Ribbed Shirt Pure Cotton Solid
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
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
                    <option className="font-semibold">S</option>
                    <option className="font-semibold">M</option>
                    <option className="font-semibold">L</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                 MRP ₹ 659
              </span>
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
            alt="Storm Call 3 Smartwatch With Advanced Bluetooth Calling"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://img.freepik.com/premium-photo/watch-with-black-face-white-face-with-numbers-4-4-face_1249034-2634.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-semibold tracking-widest text-black ">
                boAt
            </h2>
            <h1 className="my-4 text-xl font-semibold text-gray-700">
                Storm Call 3 Smartwatch With Advanced Bluetooth Calling
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
              </span>
            </div>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                MRP ₹ 1299
              </span>
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
            src="https://img.freepik.com/premium-photo/3d-rendered-photos-make-up-background-with-copy-space-text-colored-background_1096167-97386.jpg?ga=GA1.2.714022349.1721762449&semt=ais_hybrid"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-semibold tracking-widest  text-black">
                SWISS BEAUTY
            </h2>
            <h1 className="my-4 text-xl font-semibold text-gray-500">
                Professional Makeup Brush Set - Black
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
              </span>
            </div>
           
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                MRP ₹ 1914
              </span>
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
            alt="Kids Conversational Printed Pure Cotton Clothing Setr"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://img.freepik.com/premium-photo/cotton-shirts-with-shorts-stylish-baby-clothes-accessories-summer-fashion-kids-outfit_629685-25373.jpg?ga=GA1.2.714022349.1721762449&semt=ais_hybrid"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-semibold tracking-widest text-black">
                BE AWARA
            </h2>
            <h1 className="my-4 text-xl font-semibold text-gray-500">
            Kids Conversational Printed Pure Cotton Clothing Set
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
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
                    <option className="font-semibold">S</option>
                    <option className="font-semibold">M</option>
                    <option className="font-semibold">L</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                MRP ₹ 1439
              </span>
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
  );
};
export default CategoryCardTwo;
