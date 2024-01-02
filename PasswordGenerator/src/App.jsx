// import React, {useState, useCallback, useEffect, useRef } from 'react'

// const App = () => {
//     const [length, setLength] = useState(8)
//     const [numberAllowed, setNumberAllowed] = useState(false)
//     const [charAllowed, setCharAllowed] = useState(false)
//     const [password, setPassword] = useState('') 
    
//     const passwordRef = useRef(null)

//     const passwordGenerator = useCallback(() => {
//             let pass = ''
//             let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy'
//             if(numberAllowed) str += '0123456789'
//             if(charAllowed) str += '`~!@#$%^&*()_-=?}{}[]:;?<>,.'
//             for (let i = 1; i <= length; i++) {
//              let char = Math.floor(Math.random() * str.length + 1)
//              pass += str.charAt(char)
//             }
//             setPassword(pass)
//         }
//         , [length,numberAllowed,charAllowed,setPassword])    


//     const copyPasswordToClipboard = useCallback(() => {
//       passwordRef.current?.select()
//       window.navigator.clipboard.writeText(password)
//     }, [password])


//      useEffect(() => {
//       passwordGenerator()
//      }, [length, numberAllowed, charAllowed, passwordGenerator])
     

//   return (
//    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-orange-500 bg-gray-700 '>
//     <h1 className='text-white text-center'>Password generator</h1>
//      <div className='flex shadow-rounded-lg overflow-hidden mb-4'>
//         <input 
//         type="text"
//         value={password}
//         className='outline-none w-full py-1 my-3 px-3 rounded-lg '
//         placeholder='password'
//         readOnly={true}
//         ref={passwordRef}
//          />
//          <button onClick={copyPasswordToClipboard} className='primary hoverable outline-none bg-blue-700  text-white px-3 py-1 shrink-0 rounded-lg mx-2 my-2'>copy</button>
//      </div>
//      <div className='flex text-sm gap-x-2'>
//          <div className='flex items-center gap-x-1'>
//             <input type='range' 
//             min={6}
//             max={50}
//             value={length}
//             className='cursor-pointer'
//             onChange={(e) => {setLength(e.target.value)}}
//             />
//             <label>Length : {length}</label>
//          </div>
//          <div className='flex items-center gap-x-1'>
//           <input 
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//             setNumberAllowed((prev) => !prev);
//           }}
//           />
//           <label htmlFor='numberInput'>Number</label>
//          </div>
//          <div className='flex items-center gap-x-1'>
//           <input 
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="characterInput"
//           onChange={() => {
//             setCharAllowed((prev) => !prev);
//           }}
//           />
//           <label htmlFor='characterInput'>Characters</label>
//          </div>
//      </div>
//    </div>
//   )
// }

// export default App

import React, { useState, useCallback, useEffect, useRef } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '`~!@#$%^&*()_-=?}{}[]:;?<>,.';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-20 text-gray-800 bg-gray-200'>
      <h1 className='text-2xl font-bold text-center mb-4'>Password Generator</h1>
      <div className='flex items-center mb-4'>
        <div className='flex-grow'>
          <label className='text-gray-700'>Password Length: {length}</label>
          <input
            type='range'
            min={6}
            max={50}
            value={length}
            className='cursor-pointer w-full'
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput' className='text-gray-700'>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput' className='text-gray-700'>Include Special Characters</label>
        </div>
      </div>
      <div className='flex shadow-rounded-lg overflow-hidden mt-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-2 my-3 px-3 rounded-lg focus:ring focus:border-blue-300 input-transition'
          placeholder='Generated Password'
          readOnly={true}
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='bg-blue-500 hover:bg-blue-700 text-white px-4 my-3 rounded-lg ml-2'
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default App;
