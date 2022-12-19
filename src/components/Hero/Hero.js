import React from 'react'
import Reffi from '../../assets/images/reffi.png';
const Hero = () => {
  return (
    <div class="hero-section style-two d-flex align-items-center" id="home">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6 col-md-6 col-sm-12">
				<div class="hero-content">
					<div class="hero-title">
						<h1>REFFI La Billetera Electrónica </h1>
                        <h3>De Las Apps De La Nueva Economia</h3>
                        <div class="shape"></div>
					</div>
					<div class="hero-text">
                        <br/>
					</div>
					<div class="hero-button">
						<a href="#buy">Buy Now</a>
					</div>
				</div>
                <div class="dreamit-hero-thumb">
                    <div class="hero-thumb-inner4 bounce-animate4">
                        <img src="assets/images/slider/half-circle.png" alt=""/>
                    </div>
                    <div class="hero-thumb-inner5 bounce-animate">
                        <img src="assets/images/slider/cross-2.png" alt=""/>
                    </div>
                    <div class="hero-thumb-inner6 bounce-animate2">
                        <img src="assets/images/slider/cross.png" alt=""/>
                    </div>
                </div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12">
				<div class="dreamit-hero-thumb">
					<div class="hero-main-thumb">
						<img src={Reffi} alt=""/>
					</div>
					<div class="hero-thumb-inner1 rotateme">
						<img src="assets/images/slider/round.png" alt=""/>
					</div>
					<div class="hero-thumb-inner2 bounce-animate">
						<img src="assets/images/slider/style-1.png" alt=""/>
					</div>
					<div class="hero-thumb-inner3 bounce-animate3">
						<img src="assets/images/slider/style-2.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Hero