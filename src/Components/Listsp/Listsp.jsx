import React from 'react'
import { listsp } from '../../data'

export default function Listsp() {
  return (
    <ul>
        {listsp.map(sp => (
            <div key={sp.id}>
               <li> {sp.title}</li>
               <p> {sp.time} </p>
                
                </div>
            
        ) )}
    </ul>
  )
}
