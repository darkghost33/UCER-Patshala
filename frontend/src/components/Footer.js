import React from 'react'
import '../css/footer.css'

export default function Footer() {
  return (
    <div>
        <footer style={{background: "lightblue"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                    <p>&copy; E-PathShala. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-3">
                    <ul className="list-inline text-right">
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-9">
                        <p>Connect Us on</p>
                    </div>
                    <div className='col-md-3'>
                        <ul className="list-inline text-right">
                            <li><a href="/">facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
