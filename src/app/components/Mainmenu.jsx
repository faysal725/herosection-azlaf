'use client'

import React, { useState } from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

export default function Mainmenu() {

  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <main className="max-w-7xl mx-auto py-5  px-1 xl:px-0 relative ">
      <ul className="grid grid-cols-12 gap-5 z-0">
        <li className="col-span-12 xl:col-span-2 flex justify-center xl:justify-start items-center">
          <Bars3Icon onClick={() => setOpenSidebar(true)} className="h-7 w-7 text-customBlack xl:hidden" />
          <img src="/images/logo.png" alt="Logo" className="object-contain mx-auto xl:mx-0" />
        </li>
        <li className="col-span-12 xl:col-span-7 flex items-center justify-center">
          <div className=" flex justify-between items-center bg-customGray rounded-lg h-full w-full gap-5 pl-2">
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              placeholder="Search Product"
            />
            <button className="bg-primary h-full p-2 xl:px-3 rounded-lg">
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </li>
        <li className="col-span-12 xl:col-span-3 flex justify-between items-center">
          <div className="flex justify-start gap-2 items-center">
            <button className="bg-customLightGray2 rounded-md  p-1.5">
              <UserIcon className="h-4 w-4 text-customDarkGray" />
            </button>
            <button className="bg-customLightGray2 rounded-md p-1.5">
              <HeartIcon className="h-4 w-4 text-customDarkGray" />
            </button>
            <button className="bg-customLightGray2 rounded-md p-1.5">
              <ShoppingCartIcon className="h-4 w-4 text-customDarkGray" />
            </button>
          </div>

          <div>
            {/* <div className="bg-[url('/images/cloudservice.png')] p-10  bg-no-repeat" /> */}
            <img
              src="/images/cloudservice.png"
              alt=""
              className="object-contain h-auto w-32"
            />
          </div>
        </li>
      </ul>

      {/* sidebar  */}


        <Sidebar   openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />      
        {/* <section className={`bg-black/40 fixed top-0 left-0 w-full h-full z-20 duration-300 ${openSidebar ? ' translate-x-0 opacity-100' : 'opacity-0 translate-x-[-100%]'}`}>
          <div className={`absolute h-full bg-primary min-w-28 top-0 left-0  duration-100 ${openSidebar ? '-translate-x-100' : 'translate-x-0'}`}>
          sdfsdf
          </div>
        </section>  */}
        


    </main>
  );
}
