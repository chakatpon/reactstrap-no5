import React from 'react';
import { Collapse } from 'reactstrap';

class Resume extends React.Component {
    render() {
        return(
            <div>
                <Collapse id="resume">
                  <div className="card card-body bg-success text-white py-5">
                    <h2>My Resume</h2>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
                  </div>

                  <div className="card card-body py-5">
                    <h3>Where Have I Worked?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque similique saepe inventore rem vitae esse.</p>
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Devmasters</h4>
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam.</p>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Full Stack Developer
                          </p>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Phone: (444) 444-4444
                          </p>
                        </div>
                        <div className="card-footer">
                          <h6 className="text-muted">Dates: 2015 - 2018</h6>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">123 Designs</h4>
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam.</p>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Web Designer
                          </p>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Phone: (222) 222-2222
                          </p>
                        </div>
                        <div className="card-footer">
                          <h6 className="text-muted">Dates: 2013 - 2015</h6>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Web Designer Pros</h4>
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam.</p>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Web Designer
                          </p>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Phone: (333) 333-3333
                          </p>
                        </div>
                        <div className="card-footer">
                          <h6 className="text-muted">Dates: 2010 - 2013</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
            </div>
        );
    }
}

export default Resume