import React from 'react'

class EventsSummary extends React.Component {
  
  render() {
    const { 
      event_date,  
      event_logo, 
      event_name, 
      event_summary, 
      event_venue 
    } = this.props

    return(
      <div>
        <div class="row row-no-gutters">
          <div class="panel_event"></div>
          <div class="col-sm-9panel" style={{height: '100%'}}>
            <div class="col-sm-9panel event_info">
              <div class="event_info1 ">
                <h1>{event_name}</h1><br />
                <b><h4>{event_date}</h4></b>
                <p>{event_venue}</p>
              </div>
              <div class="event_info2 " style={{'padding-top': '30px'}}>
                <div class="img-box" style={{'margin-left': '0'}}>
                  <img src={event_logo} alt="logo" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>{event_name}</p>
                    </div>
                  </div> 
                </div>
              </div><br /><br /><br /><br />
              <p>{event_summary}</p>
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

export default EventsSummary