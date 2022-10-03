import { useState, useEffect } from 'react';

import SelectColor from './SelectColor.tsx';

function ColorGame(props: {
  correctColor: string;
  arr: string[];
  matched: Function;
}) {
  const [guessedColor, check] = useState('');

  useEffect(() => {
    let id = 0;
    console.log('1');
    if (guessedColor && guessedColor === props.correctColor) {
      console.log('2');
      console.log('3');

      id = setTimeout(() => {
        check('');
        console.log('4');

        props.matched();
      }, 1000);
    }

    return () => clearTimeout(id);
  }, [guessedColor]);
  return (
    <>
      <div className="p-2 bg-white flex flex-wrap items-center justify-center gap-4">
        {props.arr.map((color, idx) => {
          return (
            <SelectColor
              key={idx}
              color={color}
              onClick={() => {
                check(color);
              }}
            />
          );
        })}
      </div>

      {guessedColor && guessedColor === props.correctColor && (
        <div className="text-green-500 text-center">
          Congrats! you are correct
        </div>
      )}
      {guessedColor && guessedColor !== props.correctColor && (
        <div className="text-red-500 text-center">Oopsss! you are wrong</div>
      )}
    </>
  );
}

export default ColorGame;
