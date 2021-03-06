import React from 'react'
import '../App.css'

export default function Contact() {
    return (
        <>
<section className="contact" id="contact">

<h1 className="heading"> contact <span>me</span> </h1>

<div className="row">

    <div className="info-container">

        <h1>get in touch</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem sunt sapiente vel minus eaque voluptate fugit corrupti omnis tempora?</p>

        <div className="box-container">

            <div className="box">
                <i className="fa fa-map"></i>
                <div className="info">
                    <h3>address :</h3>
                    <p>Chapla, West Bengal - 743349, India</p>
                </div>
            </div>

            <div className="box">
                <i className="fa fa-envelope"></i>
                <div className="info">
                    <h3>email :</h3>
                    <p>agayen04@gmail.com</p>
                </div>
            </div>

            <div className="box">
                <i className="fa fa-phone"></i>
                <div className="info">
                    <h3>number :</h3>
                    <p>+91-7044136740</p>
                </div>
            </div>

        </div>

        <div className="share">
            <a href="/#" className="fa fa-facebook-f"> </a>
            <a href="/#" className="fa fa-twitter"> </a>
            <a href="/#" className="fa fa-instagram"> </a>
            <a href="/#" className="fa fa-linkedin"> </a>
        </div>

    </div>

    <form action="">

        <div className="inputBox">
            <input type="text" placeholder="your name"/>
            <input type="number" placeholder="your number"/>
        </div>

        <div className="inputBox">
            <input type="email" placeholder="your email"/>
            <input type="text" placeholder="your subject"/>
        </div>

        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="send message" className="btn" />

    </form>

</div>

</section>

            
        </>
    )
}
 