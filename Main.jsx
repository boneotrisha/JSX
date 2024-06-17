import React from "react";
import logo from '../images/lo.jpg';
import f1 from '../images/drinks.png';
import f2 from '../images/D.jpg';
import f3 from '../images/sal.png';
import f4 from '../images/ll.jpg';
import c1 from '../images/sher.png';
import c2 from '../images/tr.jpg';
import c3 from '../images/ana.jpg';
import c4 from '../images/henry.png';
import '../css/s.css';


function Main() {
    return (

<div>

            <header data-bs-spy="scroll" data-bs-target=".navbar">

           
                <nav class="navbar navbar-expand-lg sticky-top text-center" data-bs-spy="scroll" data-bs-target=".navbar" id="navbar">
                    <div class="container">
                        <a class="navbar-brand logo" href="lo.jpg">
                            <img src= {logo} alt="lo.jpg" height="5rem" width="40rem" class="rounded-5"/>
                            <h4 class="mb-0 dark"> Delicacy</h4>
                        </a>
                    
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/About">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Menu">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#review">Reviews</a>
                                </li>
                            </ul>
                            <a href="#signup" class="btn btn-brand ms-lg-3 rounded-1">Sign-up</a>
                        </div>
                    </div>
                </nav>
            </header>

                

                <div class="homepage" id="home">

                        <div class="home-text">
                            <h1>Welcome to Sherish Delicacy</h1>
                            <p>Where your health is our top priority.</p>
                                <span>Delicacy serves the most finest and delicious recipes. </span>
                    </div>
                </div>








            <section class="about" id="about">
                <img src={logo} alt="lo.jpg"/>
                <div class="about-text">
                    <span>About Us</span>
                    <p> Sherish menu are all organic and aims to pursue people to continue on living healthy lifestyle.</p>
                    <p>Through this site we are able to reach thousand of people that we could inspire on living such a healthy lifestyle.</p>
                    <a href="/About" class="btn">Learn More</a>
                </div>
            </section>

            <section class="menu" id="menu"/>
                <div class="heading">
                    <h1>Best Features </h1> <a href="/Menu" class="btn">Order Now</a>
                </div>



            <div class="menu-img">
                <div class="gallery">
                <a target="_blank" href="drinks.png">
                    <img src={f1} alt="Sweetened Lemonade"/>
                </a>
                <div class="desc">Sweetened Lemoberry </div>
                </div>
            </div>
            
            <div class="menu-img">
                <div class="gallery">
                <a target="_blank" href="D.jpg">
                    <img src={f2} alt="Black Widow Forest"/>
                </a>
                <div class="desc">Black Widow Forest</div>
                </div>
            </div>
            
            <div class="menu-img">
                <div class="gallery">
                <a target="_blank" href="sal.png">
                    <img src={f3} alt="Saladine"/>
                </a>
                <div class="desc">Saladine</div>
                </div>
            </div>
            
            <div class="menu-img">
                <div class="gallery">
                <a target="_blank" href="ll.jpg">
                    <img src={f4} alt="Vegieballs"/>
                </a>
                <div class="desc">Vegieballs</div>
                </div>
            </div>
            
            
            <div class="clearfix"></div>


 
            <section class="review" id="review">
                <h2>Why Customer's love us?</h2>
           
                <div class="reviews-container">
                  
                    <div class="box">
                        <i class='bx bxs-quote-alt-left' ></i>
                        <div class="stars">
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star-half' ></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                        <div class="review-profile">
                           
                            <img src={c1} alt="sher.png"/>
                            <h3>Sherly Atillo</h3>
                        </div>
                    </div>
            
                    <div class="box">
                        <i class='bx bxs-quote-alt-left' ></i>
                        <div class="stars">
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star-half' ></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                        <div class="review-profile">
                    
                            <img src={c2} alt="tr.jpg"/>
                            <h3>Trisha Boneo</h3>
                        </div>
                    </div>
          
                    <div class="box">
                        <i class='bx bxs-quote-alt-left' ></i>
                        <div class="stars">
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star-half' ></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                        <div class="review-profile">
                          
                            <img src={c3} alt="ana.jpg"/>
                            <h3>Ana Marie</h3>
                        </div>
                    </div>
                  
                    <div class="box">
                        <i class='bx bxs-quote-alt-left' ></i>
                        <div class="stars">
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star-half' ></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                        <div class="review-profile">
                     
                            <img src={c4} alt="henry.png"/>
                            <h3>Henry</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section class="signup" id="signup">
            <form action="/action_page.php">
                <h2>Register Form</h2>
                <div class="input-container">
                <i class="fa fa-user icon"></i>
                <input class="input-field" type="text" placeholder="Username" name="usrnm"/>
                </div>
            
                <div class="input-container">
                <i class="fas fa-envelope icon"></i>
                <input class="input-field" type="text" placeholder="Email" name="email"/>
                </div>
            
                <div class="input-container">
                <i class="fa fa-key icon"></i>
                <input class="input-field" type="password" placeholder="Password" name="psw"/>
                </div>
            
                <button type="submit" class="btn">Register</button>
            </form>
            </section>


            <section class="footer" id="footer">
                <div class="footer-box">
                    <p>Cagayan, Barangay 25 <br/>Bldg 2</p>
                    <div class="social">
                        <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-youtube"></a>
                    </div>
                </div>
                
                <div class="footer-box">
                    <h2>Useful Links</h2>
                    <a href="#">Payment & Tax</a>
                    <a href="#">Terms Of Use</a>
                    <a href="#">My Blog</a>
                    <a href="#">Return Policy</a>
                </div>
                <div class="footer-box">
                    <h2>News Letter</h2>
                    <p>Get 10% Discount with <br/>Email NewsLetter</p>
                    <form action="">
                        <i class='bx bxs-envelope-open' ></i>
                        <input type="email" name="" id="" placeholder="Enter your Email"/>
                        <i class='bx bx-arrow-back bx-rotate-180' ></i>
                    </form>
                </div>
            </section>
         
            <div class="copyright">
                <p>&#169; SheTrish All Right Reserve</p>
            </div>
        </div>
    )
}
export default Main;
