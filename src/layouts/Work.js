import React from 'react';

import $ from 'jquery/dist/jquery';



import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import 'ekko-lightbox/ekko-lightbox';


class Work extends React.Component {
    componentDidMount() {
        $(document).ready(function() {
            $(document).on('click', '[data-toggle="lightbox"]', function (e) {
                e.preventDefault();
                $(this).ekkoLightbox();
              });
        });
    }

    render() {
        return(
            <div id="work" className="collapse">
            <div className="card card-body bg-warning text-white py-5">
              <h2>My Work</h2>
              <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
            </div>
      
            <div className="card card-body py-5">
              <h3>What Have I Built?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum repudiandae debitis, nam iste amet.</p>
              <div className="row no-gutters">
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=252" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=253" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=254" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=255" alt="" className="img-fluid"/>
                  </a>
                </div>
              </div>
      
              <div className="row no-gutters">
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=256" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=257" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=257" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=258" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=258" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="https://unsplash.it/1200/768.jpg?image=259" data-toggle="lightbox">
                    <img src="https://unsplash.it/600.jpg?image=259" alt="" className="img-fluid"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Work;