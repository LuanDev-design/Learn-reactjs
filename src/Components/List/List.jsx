import React from 'react'

export default function List(props) {
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                                 </li>)
  return (
      <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
      </>
  )
}
