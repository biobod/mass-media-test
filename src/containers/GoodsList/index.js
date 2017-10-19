import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

class GoodsList extends Component {
 
 
  render() {
    const storage = JSON.parse(localStorage.getItem('goods')) || {}
    const { arr } = storage
    console.log(arr)
    return(
      <div>
        <table>
          <tbody>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>count</th>
          </tr>
          { arr && arr.length > 0 &&
          _.map(arr, (obj, index) => {
            return(
              <tr key={index}>
                <td>{index}</td>
                <td>{obj.name}</td>
                <td>{obj.price}</td>
                <td>{obj.count}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}




export default GoodsList