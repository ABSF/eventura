import React from 'react'

class EventsListItem extends React.Component {
  
  render() {
    const { 
      event_id, 
      event_date, 
      event_category, 
      event_logo, 
      event_name, 
      event_summary, 
      event_venue 
    } = this.props

    return(
      <div id="pozycje_lista_wydarzenie" >
        <div class="col-sm-2"></div>
          <div class="col-sm-8" style="height:100%;">
            <div id="eventlistposition">
              <div id="eventposition_zdjecie">
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
              <div key={event_id} id="eventposition_opis">
                <p><a href="">{event_name}</a></p>
                {event_date}<br/>
                {event_summary}
              </div>
            </div>
          </div>
        <div class="col-sm-2"></div>
      </div>
    )
  }
}

export default EventsListItem      