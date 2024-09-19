import React from 'react'
import { listsp } from '../../data'

export default function Listsp() {
  return (
    <div className='home'>
        {listsp.map((sp, i) => (
            <div className="sp" key={i}>
               <h2> {sp.title}</h2>
               <p> {sp.time} </p>
             
                
                </div>
            
        ) )}
    </div>
  );
}
