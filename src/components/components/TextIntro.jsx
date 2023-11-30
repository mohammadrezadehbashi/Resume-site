import React, { useEffect, useState } from 'react';

const words = [
  '! هستم Junior React Developer من ',
  'من به زودی آموزش خواهم دید',
  'و TypeScrypt زبان',
  '. Next.js فریمورک',
//   'sed do eiusmod tempor incididunt'
];
let part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

const WordFlick = () => {
  useEffect(() => {
    const wordFlickInterval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
   
      // Update state to render the text in the component
      setWord(part);
    }, speed);

    return () => {
      clearInterval(wordFlickInterval);
    };
  }, []);

  const [word, setWord] = useState('');

  return (
    <div className="word">
      {word==''?'-':word}
    </div>
  );
};

export default WordFlick;