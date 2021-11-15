import React from 'react'

function all() {
    return (
        <>
            <!-- header -->
	<div className="agileits_header">
		<div className="container">
			<div className="w3l_offers">
				<p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <a href="products.html">SHOP NOW</a></p>
			</div>
			<div className="agile-login">
				<ul>
					<li><a href="registered.html"> Create Account </a></li>
					<li><a href="login.html">Login</a></li>
					<li><a href="contact.html">Help</a></li>
					
				</ul>
			</div>
			<div className="product_list_header">  
					<form action="#" method="post" className="last"> 
						<input type="hidden" name="cmd" value="_cart">
						<input type="hidden" name="display" value="1">
						<button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
					</form>  
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="logo_products">
		<div className="container">
		<div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>
					
				</ul>
			</div>
			<div className="w3ls_logo_products_left">
				<h1><a href="index.html">super Market</a></h1>
			</div>
		<div className="w3l_search">
			<form action="#" method="post">
				<input type="search" name="Search" placeholder="Search for a Product..." required="">
				<button type="submit" className="btn btn-default search" aria-label="Left Align">
					<i className="fa fa-search" aria-hidden="true"> </i>
				</button>
				<div className="clearfix"></div>
			</form>
		</div>
			
			<div className="clearfix"> </div>
		</div>
	</div>
<!-- //header -->
<!-- navigation -->
	<div className="navigation-agileits">
		<div className="container">
			<nav className="navbar navbar-default">
							<!-- Brand and toggle get grouped for better mobile display -->
							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div> 
							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav">
									<li className="active"><a href="index.html" className="act">Home</a></li>	
									<!-- Mega Menu -->
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Groceries</h6>
														<li><a href="groceries.html">Dals & Pulses</a></li>
														<li><a href="groceries.html">Almonds</a></li>
														<li><a href="groceries.html">Cashews</a></li>
														<li><a href="groceries.html">Dry Fruit</a></li>
														<li><a href="groceries.html"> Mukhwas </a></li>
														<li><a href="groceries.html">Rice & Rice Products</a></li>
													</ul>
												</div>	
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Household<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Household</h6>
														<li><a href="household.html">Cookware</a></li>
														<li><a href="household.html">Dust Pans</a></li>
														<li><a href="household.html">Scrubbers</a></li>
														<li><a href="household.html">Dust Cloth</a></li>
														<li><a href="household.html"> Mops </a></li>
														<li><a href="household.html">Kitchenware</a></li>
													</ul>
												</div>
												
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Personal Care<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Baby Care</h6>
														<li><a href="personalcare.html">Baby Soap</a></li>
														<li><a href="personalcare.html">Baby Care Accessories</a></li>
														<li><a href="personalcare.html">Baby Oil & Shampoos</a></li>
														<li><a href="personalcare.html">Baby Creams & Lotion</a></li>
														<li><a href="personalcare.html"> Baby Powder</a></li>
														<li><a href="personalcare.html">Diapers & Wipes</a></li>
													</ul>
												</div>
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Packaged Foods<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Accessories</h6>
														<li><a href="packagedfoods.html">Baby Food</a></li>
														<li><a href="packagedfoods.html">Dessert Items</a></li>
														<li><a href="packagedfoods.html">Biscuits</a></li>
														<li><a href="packagedfoods.html">Breakfast Cereals</a></li>
														<li><a href="packagedfoods.html"> Canned Food </a></li>
														<li><a href="packagedfoods.html">Chocolates & Sweets</a></li>
													</ul>
												</div>
												
											
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Tea & Coeffe</h6>
														<li><a href="beverages.html">Green Tea</a></li>
														<li><a href="beverages.html">Ground Coffee</a></li>
														<li><a href="beverages.html">Herbal Tea</a></li>
														<li><a href="beverages.html">Instant Coffee</a></li>
														<li><a href="beverages.html"> Tea </a></li>
														<li><a href="beverages.html">Tea Bags</a></li>
													</ul>
												</div>
							
											</div>
										</ul>
									</li>
									<li><a href="gourmet.html">Gourmet</a></li>
									<li><a href="offers.html">Offers</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</div>
							</nav>
			</div>
		</div>
		
<!-- //navigation -->
	<!-- main-slider -->
		<ul id="demo1">
			<li>
				<img src="images/11.jpg" alt="" />
				<!--Slider Description example-->
				<div className="slide-desc">
					<h3>Buy Rice Products Are Now On Line With Us</h3>
				</div>
			</li>
			<li>
				<img src="images/22.jpg" alt="" />
				  <div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
			
			<li>
				<img src="images/44.jpg" alt="" />
				<div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
		</ul>
	<!-- //main-slider -->
	<!-- //top-header and slider -->
	<!-- top-brands -->
	<div className="top-brands">
		<div className="container">
		<h2>Top selling offers</h2>
			<div className="grid_3 grid_5">
				<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					<ul id="myTab" className="nav nav-tabs" role="tablist">
						<li role="presentation" className="active"><a href="#expeditions" id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true">Advertised offers</a></li>
						<li role="presentation"><a href="#tours" role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours">Today Offers</a></li>
					</ul>
					<div id="myTabContent" className="tab-content">
						<div role="tabpanel" className="tab-pane fade in active" id="expeditions" aria-labelledby="expeditions-tab">
							<div className="agile-tp">
								<h5>Advertised this week</h5>
								<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
							</div>
							<div className="agile_top_brands_grids">
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/1.png" /></a>		
															<p>Tata-salt</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$20.99 <span>$35.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																	<input type="hidden" name="amount" value="20.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/2.png" /></a>		
															<p>Fortune-sunflower</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$20.99 <span>$35.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="basmati rise" />
																	<input type="hidden" name="amount" value="20.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block">
														<div className="snipcart-thumb">
															<a href="products.html"><img src="images/3.png" alt=" " className="img-responsive" /></a>
															<p>Aashirvaad-atta</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$40.99 <span>$65.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Pepsi soft drink" />
																	<input type="hidden" name="amount" value="40.00" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="agile_top_brands_grids">
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/4.png" /></a>		
															<p>Sampann-toor-dal</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$35.99 <span>$55.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																	<input type="hidden" name="amount" value="35.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/5.png" /></a>		
															<p>Parryss-sugar</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$30.99 <span>$45.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="basmati rise" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block">
														<div className="snipcart-thumb">
															<a href="products.html"><img src="images/6.png" alt=" " className="img-responsive" /></a>
															<p>Saffola-gold</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$80.99 <span>$105.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Pepsi soft drink" />
																	<input type="hidden" name="amount" value="80.00" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="tours" aria-labelledby="tours-tab">
							<div className="agile-tp">
								<h5>This week</h5>
								<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
							</div>
							<div className="agile_top_brands_grids">
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/7.png" /></a>		
															<p>Sona-masoori-rice</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$35.99 <span>$55.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																	<input type="hidden" name="amount" value="35.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/8.png" /></a>		
															<p>Milky-mist-paneer</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$30.99 <span>$45.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="basmati rise" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block">
														<div className="snipcart-thumb">
															<a href="products.html"><img src="images/9.png" alt=" " className="img-responsive" /></a>
															<p>Basmati-Rice</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$80.99 <span>$105.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Pepsi soft drink" />
																	<input type="hidden" name="amount" value="80.00" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="agile_top_brands_grids">
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/10.png" /></a>		
															<p>Fortune-sunflower</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$20.99 <span>$35.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																	<input type="hidden" name="amount" value="20.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block" >
														<div className="snipcart-thumb">
															<a href="products.html"><img title=" " alt=" " src="images/12.png" /></a>		
															<p>Nestle-a-slim</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$20.99 <span>$35.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="basmati rise" />
																	<input type="hidden" name="amount" value="20.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 top_brand_left">
									<div className="hover14 column">
										<div className="agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block">
														<div className="snipcart-thumb">
															<a href="products.html"><img src="images/13.png" alt=" " className="img-responsive" /></a>
															<p>Bread-sandwich</p>
															<div className="stars">
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star blue-star" aria-hidden="true"></i>
																<i className="fa fa-star gray-star" aria-hidden="true"></i>
															</div>
															<h4>$40.99 <span>$65.00</span></h4>
														</div>
														<div className="snipcart-details top_brand_home_details">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Pepsi soft drink" />
																	<input type="hidden" name="amount" value="40.00" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" className="button" />
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- //top-brands -->
 <!-- Carousel
    ================================================== -->
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <a href="beverages.html"> <img className="first-slide" src="images/b1.jpg" alt="First slide"></a>
       
        </div>
        <div className="item">
         <a href="personalcare.html"> <img className="second-slide " src="images/b3.jpg" alt="Second slide"></a>
         
        </div>
        <div className="item">
          <a href="household.html"><img className="third-slide " src="images/b1.jpg" alt="Third slide"></a>
          
        </div>
      </div>
    
    </div><!-- /.carousel -->	
<!--banner-bottom-->
				<div className="ban-bottom-w3l">
					<div className="container">
					<div className="col-md-6 ban-bottom3">
							<div className="ban-top">
								<img src="images/p2.jpg" className="img-responsive" alt=""/>
								
							</div>
							<div className="ban-img">
								<div className=" ban-bottom1">
									<div className="ban-top">
										<img src="images/p3.jpg" className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="ban-bottom2">
									<div className="ban-top">
										<img src="images/p4.jpg" className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="col-md-6 ban-bottom">
							<div className="ban-top">
								<img src="images/111.jpg" className="img-responsive" alt=""/>
								
								
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
<!--banner-bottom-->
<!--brands-->
	<div className="brands">
		<div className="container">
		<h3>Brand Store</h3>
			<div className="brands-agile">
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="brands-agile-1">
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="brands-agile-2">
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>	
<!--//brands-->
<!-- new -->
	<div className="newproducts-w3agile">
		<div className="container">
			<h3>New offers</h3>
				<div className="agile_top_brands_grids">
					<div className="col-md-3 top_brand_left-1">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src="images/offer.png" alt=" " className="img-responsive">
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="products.html"><img title=" " alt=" " src="images/14.png"></a>		
												<p>Fried-gram</p>
												<div className="stars">
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star gray-star" aria-hidden="true"></i>
												</div>
													<h4>$35.99 <span>$55.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart">
														<input type="hidden" name="add" value="1">
														<input type="hidden" name="business" value=" ">
														<input type="hidden" name="item_name" value="Fortune Sunflower Oil">
														<input type="hidden" name="amount" value="35.99">
														<input type="hidden" name="discount_amount" value="1.00">
														<input type="hidden" name="currency_code" value="USD">
														<input type="hidden" name="return" value=" ">
														<input type="hidden" name="cancel_return" value=" ">
														<input type="submit" name="submit" value="Add to cart" className="button">
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 top_brand_left-1">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src="images/offer.png" alt=" " className="img-responsive">
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="products.html"><img title=" " alt=" " src="images/15.png"></a>		
												<p>Navaratan-dal</p>
												<div className="stars">
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star gray-star" aria-hidden="true"></i>
												</div>
													<h4>$30.99 <span>$45.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart">
															<input type="hidden" name="add" value="1">
															<input type="hidden" name="business" value=" ">
															<input type="hidden" name="item_name" value="basmati rise">
															<input type="hidden" name="amount" value="30.99">
															<input type="hidden" name="discount_amount" value="1.00">
															<input type="hidden" name="currency_code" value="USD">
															<input type="hidden" name="return" value=" ">
															<input type="hidden" name="cancel_return" value=" ">
															<input type="submit" name="submit" value="Add to cart" className="button">
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 top_brand_left-1">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src="images/offer.png" alt=" " className="img-responsive">
								</div>
								<div className="agile_top_brand_left_grid_pos">
									<img src="images/offer.png" alt=" " className="img-responsive">
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="products.html"><img src="images/16.png" alt=" " className="img-responsive"></a>
												<p>White-peasmatar</p>
												<div className="stars">
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star gray-star" aria-hidden="true"></i>
												</div>
													<h4>$80.99 <span>$105.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart">
														<input type="hidden" name="add" value="1">
														<input type="hidden" name="business" value=" ">
														<input type="hidden" name="item_name" value="Pepsi soft drink">
														<input type="hidden" name="amount" value="80.00">
														<input type="hidden" name="discount_amount" value="1.00">
														<input type="hidden" name="currency_code" value="USD">
														<input type="hidden" name="return" value=" ">
														<input type="hidden" name="cancel_return" value=" ">
														<input type="submit" name="submit" value="Add to cart" className="button">
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 top_brand_left-1">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src="images/offer.png" alt=" " className="img-responsive">
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="products.html"><img title=" " alt=" " src="images/17.png"></a>		
												<p>Channa-dal</p>
												<div className="stars">
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star blue-star" aria-hidden="true"></i>
													<i className="fa fa-star gray-star" aria-hidden="true"></i>
												</div>
													<h4>$35.99 <span>$55.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart">
														<input type="hidden" name="add" value="1">
														<input type="hidden" name="business" value=" ">
														<input type="hidden" name="item_name" value="Fortune Sunflower Oil">
														<input type="hidden" name="amount" value="35.99">
														<input type="hidden" name="discount_amount" value="1.00">
														<input type="hidden" name="currency_code" value="USD">
														<input type="hidden" name="return" value=" ">
														<input type="hidden" name="cancel_return" value=" ">
														<input type="submit" name="submit" value="Add to cart" className="button">
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
						<div className="clearfix"> </div>
				</div>
		</div>
	</div>
<!-- //new -->
<!-- //footer -->
<div className="footer">
		<div className="container">
			<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						<li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="about.html">About Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="contact.html">Contact Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="short-codes.html">Short Codes</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="faq.html">FAQ's</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="products.html">Special Products</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="groceries.html">Groceries</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="household.html">Household</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="personalcare.html">Personal Care</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="packagedfoods.html">Packaged Foods</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="beverages.html">Beverages</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="products.html">Store</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="checkout.html">My Cart</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="login.html">Login</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="registered.html">Create Account</a></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
			</div>
		</div>
		
	</div>	
	<div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="payment-w3ls">	
					<img src="images/card.png" alt=" " className="img-responsive">
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
<!-- //footer -->	
        </>
    )
}

export default all
