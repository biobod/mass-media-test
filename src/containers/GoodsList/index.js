import React from 'react'
import { Button } from 'react-bootstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'

const GoodsList = ({ goodsList }) => {
  const deleteAllGoods = () => {
    localStorage.clear()
  }
  return(
    <div>
      {goodsList.length > 0 && <table>
        <tbody>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>price</th>
          <th>count</th>
        </tr>
        {_.map(goodsList, (obj, index) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{obj.name}</td>
              <td>{obj.price}</td>
              <td>{obj.count}</td>
            </tr>
          )
        })}
        </tbody>
      </table>}
      <Button onClick={deleteAllGoods}>Delete All Goods</Button>
    </div>
  )
}
GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.shape()),
}


export default GoodsList