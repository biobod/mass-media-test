import React from 'react'
import { Button, Table } from 'react-bootstrap'
import moment from 'moment'
import _ from 'lodash'
import PropTypes from 'prop-types'
import style from './style.css'

const GoodsList = ({ goodsList, deleteAllGoods, deleteGoods, sortTable, ascendingSorted }) => {
  const shownTable = goodsList.length > 0
  const dateToFormat = value => moment(value).format('YYYY-MM-DD, HH:mm:ss')
  
  return(
    <div className="tableWrapper">
      {shownTable
      && <Table striped bordered condensed hover>
        <tbody>
          <tr className="trStyle">
            <th>#</th>
            <th
              onClick={sortTable}
              className="sortTh"
            >
              Created Time
              <i className={`fa fa-chevron-${ascendingSorted ? 'down' : 'up'}`} aria-hidden="true" />
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Delete Goods</th>
          </tr>
          {_.map(goodsList, (obj, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{dateToFormat(obj.id)}</td>
                <td>{obj.name}</td>
                <td>{obj.price}</td>
                <td>{obj.count}</td>
                <td>
                  <Button onClick={() => deleteGoods(obj.id)}>
                    <i className="fa fa-trash" aria-hidden="true" />
                  </Button>
                </td>
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
  deleteGoods: PropTypes.func.isRequired,
  sortTable: PropTypes.func.isRequired,
  ascendingSorted: PropTypes.bool.isRequired,
}

export default GoodsList
