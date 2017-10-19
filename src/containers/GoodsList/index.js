import React from 'react'
import { Button, Table } from 'react-bootstrap'
import moment from 'moment'
import _ from 'lodash'
import PropTypes from 'prop-types'
import style from './style.css'

const GoodsList = ({ goodsList, deleteAllGoods }) => {
  const dateToFormat = value => moment(value).format('YYYY-MM-DD, HH:mm:ss')
  return(
    <div className="tableWrapper">
      {goodsList.length > 0 &&
      <Table striped bordered condensed hover>
        <tbody>
        <tr className="trStyle">
          <th>#</th>
          <th>Created Time</th>
          <th>name</th>
          <th>price</th>
          <th>count</th>
        </tr>
        {_.map(goodsList, (obj, index) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{dateToFormat(obj.id)}</td>
              <td>{obj.name}</td>
              <td>{obj.price}</td>
              <td>{obj.count}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>}
      <Button onClick={deleteAllGoods}>Delete All Goods</Button>
    </div>
  )
}
GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.shape()),
  deleteAllGoods: PropTypes.func.isRequired,
}


export default GoodsList