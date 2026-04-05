import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Luno</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, BC</span></p>
                <p>How can I help you,Bokacoda</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest how can i find the good natural place in Rangpur</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brifely summarize this concept: Compititive programming</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest how can i find the good natural place in Rangpur</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest 5 new business idea in bangladesh</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <div className="bottom-info">
                    <p>Luno may display incorrect info,including about people,so double check its responces.Your privacy and Luno apps</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Main
