import React from 'react';
import { Home, UserRound, NotebookText, BriefcaseBusiness, Navigation } from 'lucide-react';

const Header = () => {
  return (
    <header className="header shadow-top-outline fixed bottom-0 left-0 z-50 mb-20 h-16 w-full rounded-2xl bg-white md:top-0 md:shadow-md">
      <div className="container grid h-full grid-cols-12 items-center justify-center gap-x-4 md:justify-between">
        {/* Start: Brand */}
        <div className="md:col-span-4 first-line:lg:col-span-2">
          <a
            to={'/'}
            className="font-arizonia hidden items-center gap-y-1 font-medium md:inline-block md:text-2xl"
          >
            <p>Quang Anh</p>
          </a>
        </div>
        {/* End: Brand */}
        <nav className="col-span-12 flex h-14 items-center justify-between gap-x-4 md:col-start-8 lg:col-start-10">
          <a
            href={'#home'}
            target="_self"
            className="lg:text-md flex flex-col items-center justify-center text-xs hover:text-red-600 md:text-sm"
          >
            <Home size={20} className="md:hidden" />
            Home
          </a>
          <a
            href={'#about'}
            target="_self"
            className="lg:text-md flex flex-col items-center justify-center text-xs hover:text-red-600 md:text-sm"
          >
            <UserRound size={20} className="md:hidden" />
            About me
          </a>
          <a
            href={'#skills'}
            target="_self"
            className="lg:text-md flex flex-col items-center justify-center text-xs hover:text-red-600 md:text-sm"
          >
            <NotebookText size={20} className="md:hidden" />
            Skills
          </a>
          <a
            href={'#projects'}
            target="_self"
            className="lg:text-md flex flex-col items-center justify-center text-xs hover:text-red-600 md:text-sm"
          >
            <BriefcaseBusiness size={20} className="md:hidden" />
            Projects
          </a>
          <a
            href={'#contact'}
            target="_self"
            className="lg:text-md flex flex-col items-center justify-center text-xs hover:text-red-600 md:text-sm"
          >
            <Navigation size={20} className="md:hidden" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
