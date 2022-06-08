import React from 'react'

export default function Footer() {
    return (
        <div>
            <div>
                <div className="footerMain" id="footerMain">
                    <div className="footerLeft">
                        <h2 className="footerHeader">
                            Contact
                        </h2>
                        <a href="tel:+14236195332" className="footerLink">(423) 619-5332</a>
                        <p className="footerLink">jackskiles71@gmail.com</p>
                    </div>
                    <div className="footerCenter">

                    </div>
                    <div className="footerRight">
                        {/* <h2 className="footerHeader">
          Contact
        </h2> */}
                        {/* <a href="+14236195332" className="footerLink">(423) 619-5332</a>
        <a href="jackskiles71@gmail.com" className="footerLink">jackskiles71@gmail.com</a> */}
                        <h4 className="designedBy">Created by <br /> Jack Skiles</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
