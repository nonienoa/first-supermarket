import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import offer from "../assets/images/offer.png"
import imgpf4 from '../assets/images/pf4.png'
import imgbv3 from '../assets/images/bv3.png'

import imghh4 from '../assets/images/hh4.png'
import img16 from '../assets/images/16.png'
import imggu5 from '../assets/images/gu5.png'
import imgpc6 from '../assets/images/pc6.png'
import imggu4 from '../assets/images/gu4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import Footer from './Footer'

function Products() {
    return (
        <>
            <Header/>
            <Navigation />
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                        <li className="active">Products</li>
                    </ol>
                </div>
            </div>
            {/* Products */}
            <div className="products">
                <div className="container">
                    <div className="col-md-4 products-left">
                        <div className="categories">
                            <h2>Categories</h2>
                            <ul className="cate">
                                <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Fruits And Vegetables</a></li>
                                    <ul>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Cuts & Sprouts</a></li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Flowers</a></li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Fresh Herbs & Seasonings</a></li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Fresh Vegetables</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>International Vegetables</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Organic Fruits & Vegetables</a></li>
                                    </ul>
                                <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Grocery & Staples</a></li>
                                    <ul>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Dals & Pulses</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Dry Fruits</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Edible Oils & Ghee</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Flours & Sooji</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Masalas & Spices</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Organic Staples</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Rice & Rice Products</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Salt, Sugar & Jaggery</a></li>
                                    </ul>
                                <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>PersonalCare</a></li>
                                    <ul>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Baby Care</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Cosmetics</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Deos & Perfumes</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Skin Care</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sanitary Needs</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Oral Care</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Personal Hygiene</a> </li>
                                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Shaving Needs</a></li>
                                    </ul>
                            </ul>
                        </div>																																												
                    </div>
                    <div className="col-md-8 products-right">
                        <div className="products-right-grid">
                            <div className="products-right-grids">
                                <div className="sorting">
                                    <select id="country"  className="frm-field required sect">
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Default sorting</option>
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sort by popularity</option> 
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sort by average rating</option>					
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sort by price</option>								
                                    </select>
                                </div>
                                <div className="sorting-left">
                                    <select id="country1"  className="frm-field required sect">
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Item on page 9</option>
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Item on page 18</option> 
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Item on page 32</option>					
                                        <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>All</option>								
                                    </select>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="agile_top_brands_grids">
                            <div className="col-md-4 top_brand_left">
                                <div className="hover14 column">
                                    <div className="agile_top_brand_left_grid">
                                        <div className="agile_top_brand_left_grid_pos">
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={imgpf4}/></a>		
                                                        <p>Sampann-toor-dal</p>
                                                        <h4>$35.99 <span>$55.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="Fortune Sunflower Oil"/>
                                                                <input type="hidden" name="amount" value="35.99"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={imgbv3}/></a>		
                                                        <p>Parryss-sugar</p>
                                                        <h4>$30.99 <span>$45.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="basmati rise"/>
                                                                <input type="hidden" name="amount" value="30.99"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img src={img16} alt=" " className="img-responsive"/></a>
                                                        <p>Saffola-gold</p>
                                                        <h4>$80.99 <span>$105.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="Pepsi soft drink"/>
                                                                <input type="hidden" name="amount" value="80.00"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={imghh4}/></a>		
                                                        <p>Sampann-toor-dal</p>
                                                        <h4>$35.99 <span>$55.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="Fortune Sunflower Oil"/>
                                                                <input type="hidden" name="amount" value="35.99"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={imggu5}/></a>		
                                                        <p>Parryss-sugar</p>
                                                        <h4>$30.99 <span>$45.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="basmati rise"/>
                                                                <input type="hidden" name="amount" value="30.99"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src="images/offer.png" alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid_pos">
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img src={imgpc6} alt=" " className="img-responsive"/></a>
                                                        <p>Saffola-gold</p>
                                                        <h4>$80.99 <span>$105.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="Pepsi soft drink"/>
                                                                <input type="hidden" name="amount" value="80.00"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={imggu4}/></a>		
                                                        <p>Sampann-toor-dal</p>
                                                        <h4>$35.99 <span>$55.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="basmati rise"/>
                                                                <input type="hidden" name="amount" value="30.99"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={img5}/></a>		
                                                        <p>Parryss-sugar</p>
                                                        <h4>$30.99 <span>$45.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="basmati rise"/>
                                                                <input type="hidden" name="amount" value="30.99"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                                            <img src={offer} alt=" " className="img-responsive"/>
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <a href="single.html"><img src={img6} alt=" " className="img-responsive"/></a>
                                                        <p>Saffola-gold</p>
                                                        <h4>$80.99 <span>$105.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart"/>
                                                                <input type="hidden" name="add" value="1"/>
                                                                <input type="hidden" name="business" value=" "/>
                                                                <input type="hidden" name="item_name" value="Pepsi soft drink"/>
                                                                <input type="hidden" name="amount" value="80.00"/>
                                                                <input type="hidden" name="discount_amount" value="1.00"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <input type="hidden" name="return" value=" "/>
                                                                <input type="hidden" name="cancel_return" value=" "/>
                                                                <input type="submit" name="submit" value="Add to cart" className="button"/>
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
                        <nav className="numbering">
                            <ul className="pagination paging">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="active"><a href="#">1<span className="sr-only">(current)</span></a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Products
