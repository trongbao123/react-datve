import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../../redux/action/bookingAction';

class HangGhe extends Component {
  renderDanhSachGhe = () => {
    return this.props.HangGhe.danhSachGhe.map((ghe, index) => {
      let csGheDaDat = '';
      let disabled = false;

      if (ghe.daDat) {
        csGheDaDat = 'gheDuocChon'
        disabled = true
      }

      // ghế đang đặt
      let csGheDangDat = '';

      let idexGheDat = this.props.dsghe.findIndex(ghedangdat=> ghedangdat.soGhe === ghe.soGhe)
      if (idexGheDat !== -1) {
        csGheDaDat = 'gheDangChon'
      }

      return <button onClick={() => {
        this.props.datGhe(ghe)
      }} disabled={disabled} className={`ghe ${csGheDaDat} ${csGheDangDat}`} key={index}>
        {index + 1}
      </button>
    })
  }

  renderSoHang = () => {
    return this.props.HangGhe.danhSachGhe.map((tenhang, index) => {
      return <button key={index} className='rowNumber'>
        {tenhang.soGhe}
      </button>
    })

  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className='ml-4'  >
        {this.props.HangGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      return <div>
        {this.props.HangGhe.hang} {this.renderDanhSachGhe()}
      </div>
    }

  }

  render() {
    return (
      <div className='text-light text-left ml-5 mt-1' style={{ fontSize: '25px', fontWeight: '600' }}>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapDispatchtoprop = (dispatch) =>{
      return{
        datGhe:(ghe) =>{
          dispatch(datGheAction(ghe))
        }
      }
}


const mapStatetoprops = state => {
  return {
    dsghe: state.BookingReducer.dsghe
  }
}

export default connect(mapStatetoprops,mapDispatchtoprop)(HangGhe);