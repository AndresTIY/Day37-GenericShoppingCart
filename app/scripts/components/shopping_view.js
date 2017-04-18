import React from 'react'
import api from '../api.js'


class Shopping extends React.Component {
  render () {
    return (
      <div className="shop-view">
        {api.url.map((item, i)=>{
          return (
          <div className="item-display" key={i}>
            <p>{item.item}</p>
            <p>${item.price}</p>
            <button>Add</button>
            <button>Remove</button>
          </div>
        )
        })}
      </div>
    )
  }
}

export default Shopping
// console.log(item.item, item.price);
// <div>
//         {this.props.data.map((datum, index) => {
//           return (
//             <div className="cat" key={index}>
//               <h3>{datum.title}</h3>
//                 <ValuesView
//                 category = {datum.title}
//                 datum={datum} />
//             </div>
//           )
//         })}
//       </div>
