import React from 'react'
import imgp2 from '../assets/images/p2.jpg'
import imgp3 from '../assets/images/p3.jpg'
import imgp4 from '../assets/images/p4.jpg'
import img111 from '../assets/images/111.jpg'

function BannerBottom() {
    return (
        <div className="ban-bottom-w3l">
					<div className="container">
					<div className="col-md-6 ban-bottom3">
							<div className="ban-top">
								<img src={imgp2} className="img-responsive" alt=""/>
								
							</div>
							<div className="ban-img">
								<div className=" ban-bottom1">
									<div className="ban-top">
										<img src={imgp3} className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="ban-bottom2">
									<div className="ban-top">
										<img src={imgp4} className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="col-md-6 ban-bottom">
							<div className="ban-top">
								<img src={img111} className="img-responsive" alt=""/>
								
								
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
    )
}

export default BannerBottom
