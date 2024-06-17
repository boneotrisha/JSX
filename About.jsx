import React from 'react';
import logo from '../images/lo.jpg';
import c1 from '../images/sher.JPG';
import c2 from '../images/tr.jpg';
import c4 from '../images/henry.png';
import '../css/s.css';
import'../css/about.css';
import'../css/menu.css';


function About() {
  return (
       
                    

                <div classNameName = "about-body">
                <h2>ABOUT US</h2>
                <div id="myBtnContainer">
                <button className="btn active" onclick="filterSelection('main')"><li><a href="/">Home</a></li></button>
                <button className="btn" onclick="filterSelection('all')">Show All</button>

                </div>

                <section className="w3l-recipes py-5">
                    <div className="container py-md-5 py-4">
                        <div className="row">
                            <div className="col-lg-6 about-right-faq align-self pe-lg-5 mb-xl-4">
                                <h3 className="text-bgs mb-2">Since 2000</h3>
                                <h3 className="title-style">We Have <span>30+</span> Years of Experience</h3>
                                <p className="ab-text mt-4 pt-lg-2">"Orem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Non quae, fugiat".</p>
                                <p className="mt-4">Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Non quae, fugiat. Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                    ultrices in ligula.
                                </p>
                            </div>
                            <div className="col-lg-6 left-wthree-img position-relative mt-lg-0 mt-5 pt-lg-0 pt-5">
                                <img src={logo} alt="lo.jpg" className="img-fluid radius-image"/>
                            
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row">
                <h2>MEET THE TEAM</h2>
                    <div className="column">
                    <div className="card">
                        <img src={c2} alt="tr.jpg"style={{ width: '100%' }}/>
                        <div className="container">
                        <p>Trisha Boneo</p>
                        <p>Web Designer</p>
                        <p>boneotrisha18@gmail.com</p>
                        <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                    </div>

                    <div className="column">
                    <div className="card">
                        <img src={c1} alt="sher.JPG"style={{ width: '100%' }}/>
                        <div className="container">
                        <p>Sherly Atillo</p>
                        <p>Web Designer</p>
                        <p>sherlyatillo@gmail.com</p>
                        <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                    </div>
                
                    <div className="column">
                    <div className="card">
                        <img src={c4} alt="henry.png"style={{ width: '100%' }}/>
                        <div className="container">
                        <p>Henry Bundlestorm</p>
                        <p>Assistant Designer</p>
                        <p>henrysingle@gmail.com</p>
                        <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                    </div>


                    
                



                    
        </div>
            </div>
  );
}

export default About;







