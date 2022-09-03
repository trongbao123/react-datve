import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HuyGheAction } from '../../redux/action/bookingAction'
import { HUY_GHE } from '../../redux/type/datGheType'
// import { HuyGheAction } from '../../redux/action/bookingAction'

class DanhSachGhe extends Component {
  render() {
    return (
      <div className='mt-5' style={{ overflowY: 'scroll', width: '100%', height: '70%' }}>
        <button className='ghe text-light ml-0'></button> <span style={{ fontSize: '20px', fontWeight: '600' }}>Ghế Chưa Đặt</span> <br />
        <button className='gheDuocChon text-light'></button> <span style={{ fontSize: '20px', fontWeight: '600' }}>Ghế Được Chọn</span> <br />
        <button className='gheDangChon text-light'></button> <span style={{ fontSize: '20px', fontWeight: '600' }}>Ghế Đang Chọn</span>

        <div className="table mt-3">
          <table className="table table-bordered">
            <thead className='text-warning '>
              <tr>
                <th>Ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className='text-warning'>
              {this.props.dsghe.map((ghedangdat, index) => {
                return <tr key={index}>
                  <td>{ghedangdat.soGhe}</td>
                  <td>{ghedangdat.gia}vnđ</td>
                  <td><button onClick={() => {
                    this.props.dispatch({
                      type: HUY_GHE,
                      soGhe: ghedangdat.soGhe
                    })
                  }} style={{ border: 'none', color: 'red', backgroundColor: 'inherit' }}>X</button></td>
                </tr>
              })}
            </tbody>
            <tfoot className='text-warning'>
              <tr>
                <td></td>
                <td>Tổng Tiền</td>
                <td>{this.props.dsghe.reduce((tongtien, ghedangdat, index) => {
                  return tongtien += ghedangdat.gia
                }, 0).toLocaleString()}vnđ</td>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    )
  }
}

const mapStatetoprops = state => {
  return {
    dsghe: state.BookingReducer.dsghe
  }
}




export default connect(mapStatetoprops)(DanhSachGhe);