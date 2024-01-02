import React, {useState, useCallback} from 'react'

const App = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('') 
    
    const passwordGenerator = useCallback(() => {
            let pass = ''
            let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy'
            if(numberAllowed) str += '0123456789'
            if(charAllowed) str += '`~!@#$%^&*()_-=?}{}[]:;?<>,.'
            for (let i = 1; i <= array.length; i++) {
             let char = Math.floor(Math.random() * str.length + 1)
             pass = str.charAt(char)
            }
            setPassword(pass)
        }
        , [length,numberAllowed,charAllowed,setPassword])    

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center'>Password generator</h1>
     <div className='flex shadow-rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 my-3 px-3 rounded-lg '
        placeholder='password'
        readOnly={true}
         />
         <button className='primary outline-none bg-blue-700  text-white px-3 py-1 shrink-0 rounded-lg my-2'>copy</button>
     </div>
     <div>
        
     </div>
   </div>
  )
}

export default App