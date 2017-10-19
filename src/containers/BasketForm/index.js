import React, { Component } from 'react'
import moment from 'moment'
import { Button, Row, Col } from 'react-bootstrap'
import GoodsList from './../GoodsList'
import _ from 'lodash'
import { getGoodsList, setGoodList } from './../utils'
import style from './style.css'

class BasketForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsList: getGoodsList(localStorage),
      ascendingSorted: true,
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
  
  setGoodListAndState = newGoodsList => {
    setGoodList(newGoodsList)
    this.setState({ goodsList: getGoodsList(localStorage) })
  }
  
  saveData = e => {
    if (e) {
      e.preventDefault()
    }
    const { name, price, count } = this.state
    const goodsList = getGoodsList(localStorage)
    const id = moment().toISOString()
    
    goodsList.push(Object.assign({}, { id }, { name, price, count }))
    this.setGoodListAndState(goodsList)
  }
  
  deleteAllGoods = () => {
    localStorage.clear()
    this.setState({ goodsList: [] })
  }
  
  deleteGoods = value => {
    const { goodsList } = this.state
    const newGoodsList = goodsList.filter(obj => obj.id !== value)
    this.setGoodListAndState(newGoodsList)
  }
  
  sortTable = () => {
    const { goodsList, ascendingSorted } = this.state
    let sortedGoodsList
    if(ascendingSorted) {
      sortedGoodsList = goodsList.reverse()
    } else {
      sortedGoodsList = _.sortBy(goodsList, 'id')
    }
    this.setGoodListAndState(sortedGoodsList)
    this.setState({ ascendingSorted: !ascendingSorted })
  }
  
 render() {
    const {
      state: {name, price, count, goodsList, ascendingSorted },
      update, saveData, deleteAllGoods, deleteGoods, sortTable
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
       {/*
       It's not good solution -> to include GoodsList in this component. They are should be separate components.
        But I don't want to connect redux for this small form,  so I decide to leave them
       */}
     <GoodsList
       goodsList={goodsList}
       deleteAllGoods={deleteAllGoods}
       deleteGoods={deleteGoods}
       ascendingSorted={ascendingSorted}
       sortTable={sortTable}
     />
     </Col>
   </Row>
   )
 }
}
   



export default BasketForm