import React, { Component } from 'react';


class App extends Component {


  render() {


    return (

      <div >
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Restaurant Finder</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav main-nav  clear navbar-right ">
                            <li><a className="navactive color_animation" href="#top">WELCOME</a></li>
                            <li><a className="color_animation" href="#story">ABOUT</a></li>
                            <li><a className="color_animation" href="#pricing">PRICING</a></li>

                            <li><a className="color_animation" href="#bread">BREAD</a></li>
                            <li><a className="color_animation" href="#featured">FEATURED</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div id="top" className="starter_container bg">
            <div className="follow_container">
                <div className="col-md-6 col-md-offset-3">
                    <h2 className="top-title"> Restaurant</h2>
                    <h2 className="white second-title">" Best in the city "</h2>
                    <hr />
                </div>
            </div>
        </div>



        <section id="story" className="description_content">
            <div className="text-content container">
                <div className="col-md-6">
                    <h1>About us</h1>
                    <div className="fa fa-cutlery fa-2x"></div>
                    <p className="desc-text">Restaurant is a place for simplicity. Good food  and good service. Simple is the name of the game, and we’re good at finding it in all the right places, even in your dining experience. We’re a small group from Denver, Colorado who make simple food possible. Come join us and see what simplicity tastes like.</p>
                </div>
                <div className="col-md-6">
                    <div className="img-section">
                       <img src="images/kabob.jpg" width="250" height="220" />
                       <img src="images/limes.jpg" width="250" height="220" />
                       <div className="img-section-space"></div>
                       <img src="images/radish.jpg"  width="250" height="220 " />
                       <img src="images/corn.jpg"  width="250" height="220" />
                   </div>
                </div>
            </div>
        </section>




        <section id ="pricing" className="description_content">
             <div className="pricing background_content">
                <h1><span>Affordable</span> pricing</h1>
             </div>
            <div className="text-content container">
                <div className="container">
                    <div className="row">
                        <div id="w">
                            <ul id="filter-list" className="clearfix">
                                <li className="filter" data-filter="all">All</li>
                                <li className="filter" data-filter="breakfast">Breakfast</li>
                                <li className="filter" data-filter="special">Special</li>
                                <li className="filter" data-filter="desert">Desert</li>
                                <li className="filter" data-filter="dinner">Dinner</li>
                            </ul>
                            <ul id="portfolio">
                                <li className="item breakfast"><img src="images/food_icon01.jpg" alt="Food" />
                                    <h2 className="white">$20</h2>
                                </li>

                                <li className="item dinner special"><img src="images/food_icon02.jpg" alt="Food" />
                                    <h2 className="white">$20</h2>
                                </li>
                                <li className="item dinner breakfast"><img src="images/food_icon03.jpg" alt="Food" />
                                    <h2 className="white">$18</h2>
                                </li>
                                <li className="item special"><img src="images/food_icon04.jpg" alt="Food" />
                                    <h2 className="white">$15</h2>
                                </li>
                                <li className="item dinner"><img src="images/food_icon05.jpg" alt="Food" />
                                    <h2 className="white">$20</h2>
                                </li>
                                <li className="item special"><img src="images/food_icon06.jpg" alt="Food" />
                                    <h2 className="white">$22</h2>
                                </li>
                                <li className="item desert"><img src="images/food_icon07.jpg" alt="Food" />
                                    <h2 className="white">$32</h2>
                                </li>
                                <li className="item desert breakfast"><img src="images/food_icon08.jpg" alt="Food" />
                                    <h2 className="white">$38</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>









        <section id="bread" className=" description_content">
            <div  className="bread background_content">
                <h1>Our Breakfast <span>Menu</span></h1>
            </div>
            <div className="text-content container">
                <div className="col-md-6">
                    <h1>OUR BREAD</h1>
                    <div className="icon-bread fa-2x"></div>
                    <p className="desc-text">We love the smell of fresh baked bread. Each loaf is handmade at the crack of dawn, using only the simplest of ingredients to bring out smells and flavors that beckon the whole block. Stop by anytime and experience simplicity at its finest.</p>
                </div>
                <div className="col-md-6">
                    <img src="images/bread1.jpg" width="260" alt="Bread" />
                    <img src="images/bread1.jpg" width="260" alt="Bread" />
                </div>
            </div>
        </section>



        <section id="featured" className="description_content">
            <div  className="featured background_content">
                <h1>Our Featured Dishes <span>Menu</span></h1>
            </div>
            <div className="text-content container">
                <div className="col-md-6">
                    <h1>Have a look to our dishes!</h1>
                    <div className="icon-hotdog fa-2x"></div>
                    <p className="desc-text">Each food is handmade at the crack of dawn, using only the simplest of ingredients to bring out smells and flavors that beckon the whole block. Stop by anytime and experience simplicity at its finest.</p>
                </div>
                <div className="col-md-6">
                    <ul className="image_box_story2">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>


                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src="images/slider1.jpg"  alt="..." />
                                    <div className="carousel-caption">

                                    </div>
                                </div>
                                <div className="item">
                                    <img src="images/slider2.jpg" alt="..." />
                                    <div className="carousel-caption">

                                    </div>
                                </div>
                                <div className="item">
                                    <img src="images/slider3.JPG" alt="..." />
                                    <div className="carousel-caption">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </section>







        <footer className="sub_footer">
            <div className="container">
                <div className="col-md-4"><p className="sub-footer-text text-center">&copy; Restaurant 2014, Theme by <a href="https://themewagon.com/">ThemeWagon</a></p></div>
                <div className="col-md-4"><p className="sub-footer-text text-center">Back to <a href="#top">TOP</a></p>
                </div>
                <div className="col-md-4"><p className="sub-footer-text text-center">Built With Care By <a href="#" target="_blank">Us</a></p></div>
            </div>
        </footer>
        </div>

    );

  }
}

export default App;
