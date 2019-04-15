import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div id="contact" className="collapse">
            <div className="card card-body bg-danger text-white py-5">
              <h2>Contact</h2>
              <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
            </div>
      
            <div className="card card-body py-5">
              <h3>Get In Touch</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos illo, dicta id voluptates enim.</p>
              <form>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-danger text-white">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control bg-dark text-white" placeholder="Name"/>
                  </div>
                </div>
      
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-danger text-white">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input type="email" className="form-control bg-dark text-white" placeholder="Email"/>
                  </div>
                </div>
      
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-danger text-white">
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                    </div>
                    <textarea className="form-control bg-dark text-white" placeholder="Name"></textarea>
                  </div>
                </div>
      
                <input type="submit" value="Submit" className="btn btn-danger btn-block btn-lg"/>
              </form>
            </div>
          </div>
        );
    }
}

export default Contact