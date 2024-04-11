import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Facebook, Linkedin, MessageCircleHeart } from 'lucide-react';

const Home = () => {
  return (
    <section className="sc-home pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center justify-center gap-4">
          <div className="order-1 col-span-1">
            <div className="flex flex-col gap-y-6">
              <a
                href="https://facebook.com/tbquanganh"
                className="h-10 w-10 rounded bg-teal-100 p-2 text-teal-600 shadow-md hover:bg-teal-400 hover:text-teal-100"
              >
                <Github />
              </a>
              <a
                href="https://facebook.com/tbquanganh"
                className="h-10 w-10 rounded bg-teal-100 p-2 text-teal-600 shadow-md hover:bg-teal-400 hover:text-teal-100"
              >
                <Linkedin />
              </a>
              <a
                href="https://facebook.com/tbquanganh"
                className="h-10 w-10 rounded bg-teal-100 p-2 text-teal-600 shadow-md hover:bg-teal-400 hover:text-teal-100"
              >
                <Facebook />
              </a>
            </div>
          </div>
          {/* End: Socials */}
          <div className="order-3 col-span-12 lg:order-2 lg:col-span-7">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <h1 className="text-4xl font-bold lg:text-5xl xl:text-7xl">Tống Bá Quang Anh</h1>
              <div className="flex items-center gap-x-4">
                <div className="h-[2px] w-28 rounded-full bg-gray-300"></div>
                Front-End Developer
              </div>
              <p>I'm a developer Front-End...</p>
              <div className="">
                <button className="flex items-center gap-x-4 rounded-xl bg-gray-700 px-5 py-3 text-white shadow-md hover:bg-gray-500 hover:shadow-inner">
                  <p>Contact with me</p> <MessageCircleHeart color="white" />
                </button>
              </div>
            </div>
          </div>
          {/* End: Info */}
          <div className="order-2 col-span-11 lg:order-3 lg:col-span-4">
            <div className="flex items-center justify-center">
              <div className="bg-avatar animate-avatar_animate shadow-avatar_profile h-[300px] w-[300px] bg-center bg-no-repeat object-cover"></div>
            </div>
          </div>
          {/* End: Avatar */}
        </div>
        {/* Profile */}
      </div>
    </section>
  );
};

export default Home;
