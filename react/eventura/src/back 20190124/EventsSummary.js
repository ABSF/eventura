import React, { Component } from 'react'

class EventsSummary extends React.Component {
  
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
      <div class="row row-no-gutters">
        <div class="panel_event"/>
        <div class="col-sm-9panel" style="height:100%;">
          <div class="col-sm-9panel event_info">
            <div class="event_info1 ">
              <h1>{event_name}</h1><br/>
              <b><h4>{event_date}</h4></b>
              <p>{event_venue}}</p>
              <p>{event_category}}</p>
            </div>
            <div class="event_info2 " style="padding-top: 30px;">
              <div class="img-box" style="margin-left: 0;">
                <img src={event_logo} alt="" />
              </div>
            </div>
            <br/><br/><br/><br/>
            <p>{event_summary}</p>           
          </div>
          <div class="event_info3 ">
          </div>
        </div>
      </div>
    )
  }
}

export default EventsSummary      