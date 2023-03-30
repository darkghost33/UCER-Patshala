import React from 'react'
import '../css/card.css'

export default function Card() {
    let imgStyle = {
        padding: "30px",  
    }
  return (
    <div className='my-4 mx-5 flexi' >
        <div class="flip-card mx-5">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src="https://epathshala.nic.in/asset/images/Untitled-1-01.png"  style={imgStyle} className="card-img-top" alt="..."/>
                    <p>Numerous Resources</p>
                </div>
                <div class="flip-card-back">
                <p className="title card-text">The portal and Mobile apps are storehouse of- audios, videos, epubs, flipbooks etc.</p>
                
                </div>
            </div>
        </div>
        <div class="flip-card mx-4">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="https://epathshala.nic.in/asset/images/Untitled-1-02.png" style={imgStyle} className="card-img-top" alt="..."/>
                    
                    <p>Easy Access</p>
                </div>
                <div class="flip-card-back">
                <p className="title card-text">Resources can be accessed through laptop, desktop, tablets and smart phones etc.</p>
                
                </div>
            </div>
        </div>
        <div class="flip-card mx-4">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src="https://epathshala.nic.in/asset/images/Untitled-1-04.png" style={imgStyle} className="card-img-top" alt="..."/>
                    
                    <p>Low Storage</p>
                </div>
                <div class="flip-card-back">
                <p className="title card-text">The app is very small in size (less than 7Mb) and require less memory.</p>
                
                </div>
            </div>
        </div>
        <div class="flip-card mx-4">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="https://epathshala.nic.in/asset/images/Untitled-1-02.png" style={imgStyle} className="card-img-top" alt="..."/>
                    
                    <p>Easy Access</p>
                </div>
                <div class="flip-card-back">
                <p className="title card-text">Resources can be accessed through laptop, desktop, tablets and smart phones etc.</p>
                
                </div>
            </div>
        </div>
    </div>

  )
}
