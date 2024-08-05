"use client";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            {/* Links */}
            <div className="space-y-6 border-t border-gray-200 cursor-pointer px-4 py-6 text-sm font-medium">
              <ul className="">
                <li className="py-2 font-semibold">
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/MEN">Men</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/WOMEN">Women</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/KIDS">Kids</Link>
                </li>
                <li className="py-2 font-semibold">
                  <Link to="/BEAUTY">Beauty Product</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a className="-m-2 block p-2 font-medium text-gray-900">
                  <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <li className="py-2 font-semibold">
                      <Link to="/Signin">Sign in</Link>
                    </li>
                  </ul>
                </a>
              </div>
              <div className="flow-root">
                <a className="-m-2 block p-2 font-medium text-gray-900">
                  <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <li className="py-2 font-semibold">
                      <Link to="/Create account">Create account</Link>
                    </li>
                  </ul>
                </a>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://cdn-icons-png.freepik.com/256/14272/14272467.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  IND
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img
                    alt="URBAN CART"
                    src="https://cdn-icons-png.freepik.com/256/6463/6463872.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                    className="h-8 w-auto"
                  />
                </a>
                <span className=" flex px-5 items-center cursor-pointer justify-center font-bold text-blue-500">
                  URBAN CART
                </span>
              </div>
              <div className=" flex justify-center  items-center gap-16 max-lg:hidden">
                <ul className=" flex justify-between gap-10 px-20 text-gray-600 cursor-pointer text-sm font-medium">
                  <li className="py-2 font-semibold">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/MEN">Men</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/WOMEN">Women</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/KIDS">Kids</Link>
                  </li>
                  <li className="py-2 font-semibold">
                    <Link to="/BEAUTY">Beauty Product</Link>
                  </li>
                </ul>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      <li className="py-2 font-semibold text-blue-600">
                        <Link to="/Signin">Sign in</Link>
                      </li>
                    </ul>
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <ul className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <li className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white font-semibold py-2 px-4  border border-blue-500 hover:border-transparent rounded">
                      <Link to="/Create account">Create account</Link>
                    </li>
                  </ul>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      alt=""
                      src="https://cdn-icons-png.freepik.com/256/14272/14272467.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">IND</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
