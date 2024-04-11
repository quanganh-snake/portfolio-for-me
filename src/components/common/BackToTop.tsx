import clsx from 'clsx';
import { ArrowUpToLine } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={clsx('fixed bottom-8 right-8', !isVisible && 'hidden')}>
      <div
        onClick={onScrollToTop}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-slate-100 shadow-md hover:bg-slate-200 hover:shadow-sm"
      >
        <ArrowUpToLine />
      </div>
    </div>
  );
};

export default BackToTop;
