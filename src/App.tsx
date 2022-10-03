import { useState, useEffect } from 'react';

import  ColorGame from './ColorGame';


function randHex() {
  return "#000000".replace(/0/g,() => Math.floor(Math.random()*16).toString(16));
}
function randElofArr<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function App() {
  const [matched, setMatchedValue] = useState(false);
  const [hex, setHex] = useState('')
  const [arr, setClrArr] = useState<string[]>([])

  useEffect(() => {
    const numOfGuess = 4;
    const tempArr = new Array(numOfGuess).fill('').map((n) => randHex())
    setClrArr(tempArr);
    setHex(randElofArr(tempArr));
    setMatchedValue(false)
  },[matched])

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-2 w-80 bg-gray-200 flex flex-col gap-4">
        <div
          style={{
            backgroundColor: hex,
          }}
          className="border-4 border-rose-600 h-60 rounded-md shadow-md "
        ></div>

        <ColorGame
          correctColor={hex}
          arr={arr}
          matched={() => {
            setMatchedValue(true);
          }}
        />
      </div>
    </div>
  );
}

export default App;
