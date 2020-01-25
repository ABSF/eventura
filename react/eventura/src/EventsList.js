import React from 'react';
import EventsSummary from './EventsSummary.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const BASE_URL = "/events/all";

export class EventsList extends React.Component {
  state = {
    isLoading: false,
    events: [],
    error: null,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  searchDraft = () => {
    alert('Podano następujące informacje: ' + this.state.draft)
    const str = this.state.draft.trim()
    var regex = /(\d+\-+)/
    var url = ''

    if(regex.test(str)){//zawiera date, szuka dla daty
      alert('Wynik pozytywny regex: ')
      url = '/events/search?dateStart=' + str + '&dateEnd=' + str
      alert('Adres url dla szukania daty: ' + url)
      this.fetching(url)
    }else{//nie zawiera daty, szuka w summary
      alert('Wynik negatywny regex: ')
      url = '/events/search?text=' + str
      alert('Adres url dla szukania frazy w summary: ' + url)
      this.fetching(url)
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.fetching(BASE_URL)
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

  render() {
    const {error, isLoading, events} = this.state

    if(error){
      return <p>{error.message}</p>
    }

    if(isLoading){
      return <p>Ładowanie...</p>
    }
    
    return (
      <div>
        <Router>
        <div id="wyszukiwanie">
          <div class="wyszukiwarka">
            <div class="page__demo">
              <form class="search" onSubmit={this.searchDraft}>
              <div class="a-field search__field">
                <input type="text" id="query" class="r-text-field a-field__input search__input" placeholder="np. Koncerty Warszawa" required onChange={this.updateDraft}/>
                <button class="r-button search__button search__clear" type="reset">
                  <span class="search__clear-label">Wyczyść pole wyszukiwania</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" class="search__icon search__icon-clear">
                  <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/>
                  </svg>          
                </button>
                <label class="a-field__label-wrap search__hint" for="query">
                  <span class="a-field__label">Czego poszukujesz?</span>
                </label>        
              </div>
              <button class="r-button search__button search__submit" type="submit">
                <span class="search__submit-label">Wyszukaj</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" class="search__icon search__icon-search">
                  <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/>
                </svg>
              </button>
              </form>
            </div>
          </div>    
        </div>
        <div>
          {events.map(event => (
            <div key={event.event_id}>
              <div id="pozycje_lista_wydarzenie" >
                <div class="col-sm-2"></div>
                <div class="col-sm-8" style={{height:'100%'}}>
                  <div id="eventlistposition">
                    <div id="eventposition_zdjecie">
                      <div class="img-box">
                        <img src={event.logo} alt="" />
                        <div class="transparent-box">
                          <div class="caption">
                          <p>{event.name}</p>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div id="eventposition_opis">
                      <p><a href="#event"><Link to="/wydarzenie" component={EventsSummary}>{event.name}</Link></a></p>
                    </div> 
                  </div>
                </div>
                  <div class="col-sm-2" />
              </div> 
            </div>
          ))}
        </div><br /><br /><br /><br /><br />
        <footer>        
          <div id="bottom">                    
            <div id="stopka">
              Made by FKaminski, KWielgosz, RFrankiewicz<br />
              <b>Eventura</b> copyrights © 2020 <br />
              <a href="#fb"> <i class="fa fa-facebook" /></a>
              <a href="#tw"> <i class="fa fa-twitter-square" /></a>
              <a href="#gg"> <i class="fa fa-google" /></a>
              <a href="#gh"> <i class="fa fa-github" /></a>
            </div>
          </div>
        </footer>
        <Switch>
          <Route path="/wydarzenie"></Route>
        </Switch>
        </Router>
      </div>
    );
      

  }
}

export default EventsList
        