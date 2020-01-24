import React, { Component } from 'react'

export class Home extends React.Component {
  
  render() {
    return(
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
    )
  }
}

export default Home
        