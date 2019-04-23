import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer id="main-footer" className="p-5 bg-dark text-white">
            <div className="row">
              <div className="col-md-6">
                <a href="https://download.canva.com/DADXFuD87ho/519/0-1827136116.pdf?response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Blue%2520Simple%2520Academic%2520Resume.pdf&response-expires=Tue%2C%2023%20Apr%202019%2017%3A32%3A47%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190423T154333Z&X-Amz-SignedHeaders=host&X-Amz-Expires=6553&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20190423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b07c636be2c06da93334d434b4fb03376ac0b1e344b8df30f63a787a5a967fb3" className="btn btn-outline-light">
                  <i className="fas fa-cloud"></i> Download Resume
                </a>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;