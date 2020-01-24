import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import EventsListItem from './EventsListItem.js';
import EventsSummary from './EventsSummary.js';
import EventsList from './EventsList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

  state = {
    isLoading: true,
    events: [],
    error: null
  }

  render() {

    const events = this.state.events;

    return (
      <div className="App">
        <Router> 
        {/* <!--nawigacja--> */}
      
        
        
        <div id="nawigacja">
          <div id="nawigacjalogo">
            <a href="#"><img src="img/logo.png" /></a>
          </div>  
              
          <div id="nawigacjaakcje">
            <Link to="/wyszukiwanie"><i class="fa fa-search"/></Link>
            <a href=""><i class="fa fa-bell"/></a>
            <a href=""><i class="fa fa-user"/></a>
          </div>
        </div>
        
        <div id="menu">
          <div id="menus">
            <ul>
              <li><Link to="/"><i class="fa fa-home"/>  Home</Link></li>
              <li><Link to="/"><i class="fa fa-calendar"/>  Kalendarz</Link></li>
              <li><Link to="/"><i class="fa fa-users" />  Społeczność</Link></li>
              <li><Link to="/wyszukiwanie"><i class="fa fa-list-alt"/>  Lista wydarzeń</Link></li>
              <li><Link to="/"><i class="fa fa-bell" /><b>Ustaw powiadomienia!</b></Link></li>
            </ul>
          </div>
        </div>

        {/* <!-- tresc strony --> */}

                            
        <Switch>
          <Route exact path="/"><RHome /></Route>
          <Route path="/wyszukiwanie" component={EventsList}></Route>
        </Switch>
        </Router>
      </div>      
    );
  }

}

function RHome() {
  return (

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
                          <input class="form-control" type="text" placeholder="Search" aria-label="Search" style={{width:"50%", display: "inline-block"}} />
                        </div>
                        <div id="topwydarzeniekafelek">
                          <p>Top wydarzenie miesiąca:</p>
                          <div class="img-box">
                            <img src="kafelek.png" alt="" />
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
                          <b>Eventura</b> copyrights © 2020 <br />
                          <a href=""> <i class="fa fa-facebook" /></a>
                          <a href=""> <i class="fa fa-twitter-square" /></a>
                          <a href=""> <i class="fa fa-google" /></a>
                          <a href=""> <i class="fa fa-github" /></a>
                      </div>
                    </div>
          </div>
          );
}

function REmpty() {
  return <br />
}

export default App;