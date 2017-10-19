import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

class BasketForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      count: 1,
    }
  }
  update = field => event => {
    const state = {}
    if( field !== 'count') {
      state[field] = event.target.value
    } else if (field === 'count' &&  event.target.value > 0) {
      state[field] = event.target.value
    }
    this.setState(state)
  }
  
  saveData = e => {
    if (e) {
      e.preventDefault()
    }
    const returnObj = JSON.parse(localStorage.getItem('goods')) || {}
    const oldArray = returnObj.arr ? returnObj.arr.slice() : []
    const id = moment().toISOString()
    oldArray.push(Object.assign({}, {id}, this.state))
    const newObj = {
      arr: oldArray
    }
    const serialObj = JSON.stringify(newObj)
    localStorage.setItem('goods', serialObj)

  }
  getStorage = () => {
    console.log(localStorage)
  }
  deleteAllGoods = () => {
    localStorage.clear()
  }
  
  
 render() {
    const {
      state: {name, price, count},
      update, saveData, getStorage, deleteAllGoods
    } = this
 
   return(
   <div>
     <form id="submitForm" onSubmit={saveData}>
       <div>
         <input
           required
           onChange={update('name')}
           value={name}
           placeholder="name"
         />
         <input
           placeholder="price"
           required
           value={price}
           onChange={update('price')}
         />
         <input
           placeholder="count"
           required
           value={count}
           type="number"
           onChange={update('count')}
         />
         <button
           type="submit"
         >Add to Basket
         </button>
       </div>
     </form>
     <button onClick={getStorage}>get storage</button>
     <button onClick={deleteAllGoods}>Delete All Goods</button>
     
   </div>
     )
   }
   }
   



export default BasketForm