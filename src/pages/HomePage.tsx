import React from 'react';

import { AnimatedText } from '../components/AnimatedText';
import ClockSVG from '../public/svgs/ClockSVG';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <ClockSVG />
      <AnimatedText />
    </div>
  );
};

export default HomePage;
