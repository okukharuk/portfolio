import { motion } from 'framer-motion';
import React from 'react';

const ClockSVG = () => {
  const [smallClockHandDeg, setSmallClockHandDeg] = React.useState(0);
  const [bigClockHandDeg, setBigClockHandDeg] = React.useState(0);
  React.useEffect(() => {
    const timerSmall = setInterval(() => {
      if (smallClockHandDeg == 360) setSmallClockHandDeg(0);
      setSmallClockHandDeg((prevState) => prevState + 6);
    }, 12000);
    const timerBig = setInterval(() => {
      if (bigClockHandDeg == 360) setBigClockHandDeg(0);
      setBigClockHandDeg((prevState) => prevState + 6);
    }, 1000);
    return () => {
      clearInterval(timerBig);
      clearInterval(timerSmall);
    };
  }, []);
  return (
    <div>
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="-100 -100 200 200"
      >
        <defs>
          <circle cx="0" cy="87" r="2.2" fill="black" id="minMarker" />
          <line
            x1="0"
            y1="95"
            x2="0"
            y2="78"
            strokeWidth="3.8"
            stroke="black"
            id="hourMarker"
          />
        </defs>
        <g id="markerSet">
          <use href="#hourMarker" />
          <use href="#minMarker" transform="rotate( 6)" />
          <use href="#minMarker" transform="rotate(12)" />
          <use href="#minMarker" transform="rotate(18)" />
          <use href="#minMarker" transform="rotate(24)" />
        </g>
        <use href="#markerSet" transform="rotate( 30)" />
        <use href="#markerSet" transform="rotate( 60)" />
        <use href="#markerSet" transform="rotate( 90)" />
        <use href="#markerSet" transform="rotate(120)" />
        <use href="#markerSet" transform="rotate(150)" />
        <use href="#markerSet" transform="rotate(180)" />
        <use href="#markerSet" transform="rotate(210)" />
        <use href="#markerSet" transform="rotate(240)" />
        <use href="#markerSet" transform="rotate(270)" />
        <use href="#markerSet" transform="rotate(300)" />
        <use href="#markerSet" transform="rotate(330)" />

        <motion.line
          x1="0"
          y1="-95"
          x2="0"
          y2="0"
          strokeWidth="2.8"
          stroke="black"
          animate={{ rotate: bigClockHandDeg }}
          style={{ originY: 1 }}
        />
        <motion.line
          x1="0"
          y1="-62"
          x2="0"
          y2="0"
          strokeWidth="5"
          stroke="black"
          animate={{ rotate: smallClockHandDeg }}
          style={{ originY: 1 }}
        />
        <circle cx="0" cy="0" r="9" fill="black" />
      </svg>
    </div>
  );
};

export default ClockSVG;
