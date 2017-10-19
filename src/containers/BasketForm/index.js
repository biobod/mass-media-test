import React, { Component } from 'react'
import moment from 'moment'
import { Button } from 'react-bootstrap'
import GoodsList from './../GoodsList'
import { getGoodsList } from './../utils'

class BasketForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsList: getGoodsList(localStorage),
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
    const { name, price, count } = this.state
    const goodsList = getGoodsList(localStorage)
    const id = moment().toISOString()
    
    goodsList.push(Object.assign({}, { id }, { name, price, count }))
    
    const newObj = { goodsList: goodsList }
    const serialObj = JSON.stringify(newObj)
    localStorage.setItem('goods', serialObj)
    this.setState({ goodsList: getGoodsList(localStorage) })
  }
  
 render() {
    const {
      state: {name, price, count, goodsList},
      update, saveData,
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
         <Button
           type="submit"
         >Add to Basket
         </Button>
       </div>
     </form>
     <GoodsList goodsList={goodsList} />
   </div>
     )
   }
   }
   



export default BasketForm