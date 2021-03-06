import React from 'react'
import './App.css';
import EventsList from './EventsList.js';
import EventsSummary from './EventsSummary.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const BASE_URL = "/events/all";
const BASE_URL_O = "/events/1";

class App extends React.Component {

  state = {
    isLoading: true,
    events: [],
    eventsO: [],
    error: null
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.fetching(BASE_URL)
    this.fetching(BASE_URL_O)
    console.log('componentDidMount zakonczono')
  }

  fetching(URL){
    this.setState({isLoading: true})

    fetch(URL)
      .then(res => {
        if(res.ok){
          return res.json()
        } else {
          throw Error("Błąd przy pobieraniu danych z bazy!")
        }
      }) 
      .then(events => {
        console.log('Pobrał JSON.')
        console.log(events);
        this.setState({events, isLoading: false})
      })
      .catch(error => {
        this.setState({error})
        // console.log(error.message)
      })
  }

  RHome() {
    return (
  
            <div class="row row-no-gutters">
                      <div class="col-sm-9panel" style={{height:'100%'}}>
                        <div class="gallery-image">
                          <div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
                              </div>
                            </div> 
                          </div>
                          <div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
                              </div>
                            </div> 
                          </div><div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
                              </div>
                            </div> 
                          </div><div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
                              </div>
                            </div> 
                          </div><div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
                              </div>
                            </div> 
                          </div><div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
                              </div>
                            </div> 
                          </div><div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
                              </div>
                            </div> 
                          </div><div class="img-box">
                            <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                            <div class="transparent-box">
                              <div class="caption">
                                <p>Five Finger Death Punch</p>
                                <p class="opacity-low">Five Finger Death Punch w zimowej europejskiej trasie koncertowej!</p>
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
                              <img src="https://dummyimage.com/350x250/000/fff&text=photo" alt="logo" />
                              <div class="transparent-box">
                                <div class="caption">
                                  <p>Five Finger Death Punch</p>
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                        <div id="stopka">
                            Made by FKaminski, KWielgosz, RFrankiewicz<br />
                            <b>Eventura</b> copyrights © 2020 <br />
                            <a href="#fa"> <i class="fa fa-facebook" /></a>
                            <a href="#tw"> <i class="fa fa-twitter-square" /></a>
                            <a href="#gg"> <i class="fa fa-google" /></a>
                            <a href="#gh"> <i class="fa fa-github" /></a>
                        </div>
                      </div>
            </div>
            );
          }
  

  render() {

    const events = this.state.events;

    return (
      <div className="App">
        <Router> 
        {/* <!--nawigacja--> */}
      
        
        
        <div id="nawigacja">
          <div id="nawigacjalogo">
            <a href="#logo"><img src="img/logo.png" alt="logo"/></a>
          </div>  
              
          <div id="nawigacjaakcje">
            <Link to="/wyszukiwanie"><i class="fa fa-search"/></Link>
            <a href="#bell"><i class="fa fa-bell"/></a>
            <a href="#user"><i class="fa fa-user"/></a>
          </div>
        </div>
        
        <div id="menu">
          <div id="menus">
            <ul>
              <li><Link to="/"><i class="fa fa-home"/>  Home</Link></li>
              <li><Link to="/"><i class="fa fa-calendar"/>  Kalendarz</Link></li>
              <li><Link to="/"><i class="fa fa-users" />  Społeczność</Link></li>
              <li><Link to="/wyszukiwanie"><i class="fa fa-list-alt"/>  Lista wydarzeń</Link></li>
              <li><Link to="/wydarzenie"><i class="fa fa-bell" /><b>Ustaw powiadomienia!</b></Link></li>
            </ul>
          </div>
        </div>

        {/* <!-- tresc strony --> */}
                 
        <Switch>
          <Route exact path="/">{this.RHome}</Route>
          <Route path="/wyszukiwanie" component={EventsList} />
          <Route path="/wydarzenie">{this.RSummary}</Route>
        </Switch>
        </Router>
      </div>      
    );
  }
  RSummary() {

    return(
      <div>
        <div class="row row-no-gutters">
          <div class="panel_event"></div>
          <div class="col-sm-9panel" style={{height: '100%'}}>
            <div class="col-sm-9panel event_info">
              <div class="event_info1 ">
                <h1>event_name</h1><br />
                <b><h4>event_date</h4></b>
                <p>event_venue</p>
              </div>
              <div class="event_info2 " style={{'padding-top': '30px'}}>
                <div class="img-box" style={{'margin-left': '0'}}>
                  <img src='event_logo' alt="logo" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>event_name</p>
                    </div>
                  </div> 
                </div>
              </div><br /><br /><br /><br />
              <p>event_summary</p>
              <div class="kupbilet">
                <a href="#kup" class="btn btn-white btn-animation-1">Kup bilet już teraz <br />
                <b>100 zł</b></a> 
              </div>
            </div>
            <div class="event_info3 ">
            </div>
          </div>
        </div>
        <div id="stopka_event">
            Made by FKaminski, KWielgosz, RFrankiewicz<br />
            <b>Eventura</b> copyrights © 2020 <br />
            <a href=""><i class="fa fa-facebook" /></a>
            <a href=""><i class="fa fa-twitter-square" /></a>
            <a href=""><i class="fa fa-google" /></a>
            <a href=""><i class="fa fa-github" /></a>
        </div>
      </div>
    )
  }

 
}

export default App;