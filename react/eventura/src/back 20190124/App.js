import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import EventsListItem from './EventsListItem';
import EventsSummary from './EventsSummary';
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
        
        {/* <!--nawigacja--> */}
      
        <Router>                     

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
              <li><a href="#contact"><i class="fa fa-users"></i>  Społeczność</a></li>
              <li><Link to="/wyszukiwanie"><i class="fa fa-list-alt"/>  Lista wydarzeń</Link></li>
              <li><a href="#about"> <i class="fa fa-bell"></i>  <b>Ustaw powiadomienia!</b></a></li>
            </ul>
          </div>
        </div>

        {/* <EventsList events={this.state.events} /> */}
        {/* {events ? <EventsList events={events} /> : 'Ładowanie…'} */}
        {/* <!-- tresc strony --> */}
        
        <Switch>
          <Route exact path="/">
            {this.RHome()}
          </Route>
          <Route path="/wyszukiwanie">
          <REvents/>
          </Route>     
        </Switch>
        </Router>
      
        <div id="stopka">
              Made by FKaminski, KWielgosz, RFrankiewicz<br />
              <b>Eventura</b> copyrights © 2020<br />
              <a href=""> <i class="fa fa-facebook"></i></a>
              <a href=""> <i class="fa fa-twitter-square"></i> </a>
              <a href=""> <i class="fa fa-google"></i> </a>
              <a href=""> <i class="fa fa-github"></i> </a>
          </div>
          
        </div>
       
    );
  }

  fetchEvents() {
    // Where we're fetching data from
    console.log('Zaczynam fetch funkcje')
    fetch(`/events/all`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          events: data,
          isLoading: false,
        })
        
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false })); 
  }

 

  RHome() {
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
                      </div>
            </div>
            );
  }


}

function REvents() {
  const { isLoading, events, error } = this.state;
  this.fetchEvents()
  return (

    <div>
        <div id="wyszukiwanie">
          <div class="wyszukiwarka">
            <div class="page__demo">
              <form class="search">
                <div class="a-field search__field">
                  <input type="text" id="query" class="r-text-field a-field__input search__input" placeholder="np. Koncerty Warszawa" required />
                  <button class="r-button search__button search__clear" type="reset">
                    <span class="search__clear-label">Wyczyść pole wyszukiwania</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" class="search__icon search__icon-clear">
                      <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" />
                    </svg>          
                  </button>
                  <label class="a-field__label-wrap search__hint" for="query">
                    <span class="a-field__label">Czego poszukujesz?</span>
                  </label>        
                </div>
                <button class="r-button search__button search__submit" type="submit">
                  <span class="search__submit-label">Wyszukaj</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" class="search__icon search__icon-search">
                    <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      <div>
        {console.log(events)}
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          events.map(event => {
            return(
            <div key={event.event_id}>
              <div id="pozycje_lista_wydarzenie">
                <div class="col-sm-2"/>
                  <div class="col-sm-8" style={{height:'100%'}}>
                    <div id="eventlistposition">
                      <div id="eventposition_zdjecie">
                        <div class="img-box">
                          <img src={event.logo}/>
                        </div>
                      </div>
                      <div id="eventposition_opis">
                        <p><a href="">{event.name}</a></p>
                        {event.date}<br/>
                        {event.summary}
                      </div>
                    </div>
                  </div>
                <div class="col-sm-2"></div>
              </div>
            </div>
          )})
        ) : (
          <h3>Ładowanie...</h3>
        )}
      </div>
    </div>
  );
}




function GetAll() {
  const url = '/events/all';

  fetch(url, {
    method: 'GET'

  })
    .then(res => res.json())
    .then(json => console.log(json))

    .catch(function(error) {
      console.log(error);
    });

  
}

export default App;