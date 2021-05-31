import { useState } from 'react'
import Base from './Base.js'


const Detective = () => {

   const[sherlock, setSherlock] = useState('психопат')
   const handleClick = () => {
      return setSherlock('высокоактивный социопат')
   }
   return (
      <div>
         <Base sherlock={sherlock}/>
         <button onClick={handleClick}>Узнать правду</button>

      </div>
   )
}

export default Detective