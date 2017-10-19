import React, { Component } from 'react'
import moment from 'moment'
import { Button, Row, Col } from 'react-bootstrap'
import GoodsList from './../GoodsList'
import { getGoodsList } from './../utils'
import style from './style.css'

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
  deleteAllGoods = () => {
    localStorage.clear()
    this.setState({ goodsList: [] })
  }
  
 render() {
    const {
      state: {name, price, count, goodsList},
      update, saveData, deleteAllGoods,
    } = this
 
   return(
   <Row>
     <Col md={12}>
     <form id="submitForm" onSubmit={saveData}>
       <div className="formBody">
         <input
           required
           onChange={update('name')}
           value={name}
           placeholder="name"
         />
         <input
           placeholder="price"
           type="number"
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
         <Button type="submit">
           Add to Basket
           <i className="fa fa-shopping-basket" aria-hidden="true" />
         </Button>
       </div>
     </form>
     <GoodsList goodsList={goodsList} deleteAllGoods={deleteAllGoods} />
     </Col>
   </Row>
     )
   }
   }
   



export default BasketForm