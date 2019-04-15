import React from 'react';
import { Collapse } from 'reactstrap';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Collapse className="collapse show" id="home" >
                    <div className="card card-body bg-primary text-white py-5">
                      <h2>Welcome To My Page</h2>
                      <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
                    </div>
                      
                    <div className="card card-body py-5">
                      <h3>My Skills</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ea excepturi officia quisquam atque eos.</p>
                      <hr/>

                      <h4>HTML 5</h4>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width:'90%'}}></div>
                      </div>

                      <h4>CSS 3</h4>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width:'90%'}}></div>
                      </div>

                      <h4>JavaScript</h4>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width:'70%'}}></div>
                      </div>

                      <h4>React/Redux</h4>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width:'100%'}}></div>
                      </div>

                      <h4>Boostrap</h4>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width:'80%'}}></div>
                      </div>
                    </div>
              </Collapse>
            </div>
        );
    }
}

export default Home;