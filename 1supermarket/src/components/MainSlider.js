import React from 'react'
import img11 from '../assets/images/11.jpg'
import img22 from '../assets/images/22.jpg'
import img44 from '../assets/images/44.jpg'

function MainSlider() {
    return (
        <ul id="demo1">
			<li>
				<img src={img11} alt="" />
				{/* <!--Slider Description example--> */}
				<div className="slide-desc">
					<h3>Buy Rice Products Are Now On Line With Us</h3>
				</div>
			</li>
			<li>
				<img src={img22} alt="" />
				  <div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
			
			<li>
				<img src={img44} alt="" />
				<div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
		</ul>
    )
}

export default MainSlider
