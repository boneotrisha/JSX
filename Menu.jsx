import React from 'react';
import '../css/s.css';
import '../css/menu.css';
import m1 from '../images/meat1.jpg';
import m2 from '../images/meat2.jpg';
import m3 from '../images/meat3.jpg';
import s1 from '../images/salad1.jpg';
import s2 from '../images/salad2.jpg';
import s3 from '../images/salad3.jpg';
import d1 from '../images/salad3.jpg';
import d2 from '../images/salad3.jpg';
import d3 from '../images/salad3.jpg';
import  '../js/menu.js';
import  '../js/features.js';


function Menu() {
  return (
    
        <div class = "menu-body">
                <h2>OUR MENU</h2>
                <div id="myBtnContainer">
                <button class="btn active" onclick="filterSelection('main')"><li><a href="/">Home</a></li></button>
                <button class="btn" onclick="filterSelection('all')">Show All</button>
                <button class="btn" onclick="filterSelection('meat')"> Meat</button>
                <button class="btn" onclick="filterSelection('salad')"> Salad</button>
                <button class="btn" onclick="filterSelection('drinks')"> Drinks</button>
                </div>

             
                <div class="row">
                <div class="column">
                    <div class="content">
                    <img src={m1} alt="meat1.jpg" style={{ width: '100%' }}/>
                    <h4>Pork Steaks</h4>
                    <p>Price: 180.00</p>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                    <img src={m2} alt="meat2.jpg" style={{ width: '100%' }}/>
                    <h4>Bon porkt</h4>
                    <p>Price: 180.00</p>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                    <img src={m3} alt="meat3.jpg" style={{ width: '100%' }}/>
                    <h4>Steak Ala King</h4>
                    <p>Price: 180.00</p>
                    </div>
                </div>

                <div class="column">
                    <div class="content">
                    <img src={s1}alt="salad1.jpg" style={{ width: '100%' }}/>
                    <h4>Spinach Salad</h4>
                    <p>Price: 100.00</p>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                    <img src={s2} alt="salad2.jpg" style={{ width: '100%' }}/>
                    <h4>Cornier</h4>
                    <p>Price: 100.00</p>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                    <img src={s3} alt="salad3.jpg"style={{ width: '100%' }}/>
                    <h4>Coachella</h4>
                    <p>Price: 100.00</p>
                    </div>
                </div>

                <div class="column">
                    <div class="content">
                    <img src={d1} alt="drink1.jpg" style={{ width: '100%' }}/>
                    <h4>Margarita</h4>
                    <p>Price: 450.00</p>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                    <img src={d2}alt="drink2.jpg" style={{ width: '100%' }}/>
                    <h4>Mojito</h4>
                    <p>Price: 450.00</p>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                    <img src={d3}alt="drink3.jpg" style={{ width: '100%' }}/>
                    <h4>Fantasy</h4>
                    <p>Price: 450.00</p>
                    </div>
                </div>
              
                </div>
                    </div>
    );
}

export default Menu;
