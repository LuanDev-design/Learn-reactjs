import React from 'react'
import styles from './Button.module.css'

export default function Button() {

  let count = 0;

  const handleClick4 = (e) => {
    
    e.target.textContent = "Ouch!";

    e.target.style.backgroundColor = "green";

  }
  const handleClick1 = (name) => console.log(`${name} stop clicking  me `);

  const handleClick2 = () => console.log("stop clicking  me");

  const handleClick3 = (name) => {
    if(count < 3 ){
      count++;
      console.log(`${name} you clicking me ${count} time/s`);
    }
    else{
      console.log(`${name} stop clicking me !`);
    }
  }
  return (
    <button onClick={(e) => handleClick4(e)} className={styles.button}>Click me</button>
  )
}
