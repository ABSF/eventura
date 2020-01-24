import React, { Component } from 'react'
import EventsListItem from "./EventsListItem";

export class EventsList extends React.Component {
  state = {
    isLoading: true,
    events: [],
    error: null
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

  componentDidMount(){
    this.fetchEvents()
  }

  render() {
    const { isLoading, events, error } = this.state;
    
    return (
      
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
        // If there is a delay in data, let's let the user know it's loading
        ) : (
          <h3>Ładowanie...</h3>
        )}

      </div>
    );
  }
}

export default EventsList
        