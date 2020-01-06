import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        {/* <!--nawigacja--> */}
      
        <div id="nawigacja">
          <div id="nawigacjalogo">
            <a href="#"><img src="img/logo.png" /></a>
          </div>  
              
          <div id="nawigacjaakcje">
            <a href=""><i class="fa fa-search"></i> </a>
            <a href=""><i class="fa fa-bell"></i> </a>
            <a href=""><i class="fa fa-user"></i> </a>
          </div>   
        </div>
        
        <div id="menu">
          <div id="menus">
            <ul>
              <li><a href="#home"><i class="fa fa-home"></i>  Home</a></li>
              <li><a href="#news"><i class="fa fa-calendar"></i>  Kalendarz</a></li>
              <li><a href="#contact"><i class="fa fa-users"></i>  Społeczność</a></li>
              <li><a href="#about"><i class="fa fa-list-alt"></i>  Lista wydarzeń</a></li>
              <li><a href="#about"> <i class="fa fa-bell"></i>  <b>Ustaw powiadomienia!</b></a></li>
            </ul>
          </div>
        </div>
    

        {/* <!-- tresc strony --> */}
        
        <div class="row row-no-gutters">
          <div class="col-sm-9panel" style={{height:'100%'}}>
        
            <div class="gallery-image">
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div>
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div>
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        
        <div class="col-sm-3panel panelstyl" >
          <div id="panel">
            <div id="wyszukiwanie">
              {/* <!-- Search form --> */}
              <p>Wyszukaj interesujące wydarzenie:</p>
              <input class="form-control" type="text" placeholder="Search" aria-label="Search" style={{width:'50%',display:'inline-block'}} />
            </div>
            <div id="kalendarz">
              <p>Kalendarz</p>
            </div>
      
            <div id="topwydarzeniekafelek">
              <p>Top wydarzenie miesiąca:</p>

              <div class="img-box">
                <img src="img/kafelek.png" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Top wydarzenie</p>
                    <p class="opacity-low">Opis wydarzenia</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
      
          <div id="stopka">
              Made by FKaminski, KWielgosz, RFrankiewicz<br />
              <b>Eventura</b> copyrights © 2020<br />
              <a href=""> <i class="fa fa-facebook"></i></a>
              <a href=""> <i class="fa fa-twitter-square"></i> </a>
              <a href=""> <i class="fa fa-google"></i> </a>
              <a href=""> <i class="fa fa-github"></i> </a>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default App;