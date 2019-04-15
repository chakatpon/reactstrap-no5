import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer id="main-footer" className="p-5 bg-dark text-white">
            <div className="row">
              <div className="col-md-6">
                <a href="#" className="btn btn-outline-light">
                  <i className="fas fa-cloud"></i> Download Resume
                </a>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;