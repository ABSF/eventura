import React, { Component } from 'react'
import EventsListItem from "./EventsListItem";

export class EventsList extends React.Component {
  state = {
    isLoading: true,
    events: null,
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

  

  render() {
    const { isLoading, events, error } = this.state;
    this.fetchEvents()
    return (
      <div>
        {console.log(events)}
        // Display a message if we encounter an error
        {error ? <p>{error.message}</p> : null}
        // Here's our data check
        {!isLoading ? (
          events.map(event => 
          <EventsListItem
            key={events.event_id}
            event_id={events.event_id}
            event_date={events.date}
            event_name={events.name}
            event_summary={events.summary}
          />
        )
        // If there is a delay in data, let's let the user know it's loading
        ) : (
          <h3>Ładowanie...</h3>
        )}
      </div>
    );
  }
}

export default EventsList