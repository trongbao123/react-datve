import React, { Component } from 'react'
import DanhSachGhe from '../bookingticket/DanhSachGhe'
import '../Homecomponent/booking.css';
import danhsachghe from '../../Data/danhghe.json'
import HangGhe from '../bookingticket/HangGhe';

export default class HomeDatVe extends Component {

  renderHangGhe = () =>{
    return danhsachghe.map((ghe,index) => { 
        return  <div key={index}>
          <HangGhe  HangGhe={ghe} soHangGhe={index}/>
        </div>
     })
   
  }

  render() {
    return (
      <div className='bookingmovie' style={{ position: 'fixed', backgroundImage: 'url(./img/bgmovie.jpg)', width: '100%', height: '100%', backgroundSize: 'cover' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'fixed', width: '100%', height: '100%' ,overflowY:'scroll' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-warning text-center mt-2">
                <h1 className='display-5 mt-2' style={{ fontWeight: '600' }}>Đặt Vé Cyber Movie</h1>
                <p className='mt-4' style={{ fontSize: '20px' }}>Màn Hình</p>
                <div className='mt-1' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                  <div className="screen"></div>
                 
                </div>
                {this.renderHangGhe()}
              </div>

              <div className="col-4 text-light">
              <h1 className='mt-5' style={{ fontWeight: '600',fontSize:'35px' }}>Danh Sách Ghế</h1>
              <DanhSachGhe/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
