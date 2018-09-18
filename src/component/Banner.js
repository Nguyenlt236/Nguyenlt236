import React , {Component} from 'react'
const styles = {
    "background-image" : "url(assets/images/slider_1.jpg)"
  }
  
  export default class Banner extends Component {
    render () {
      return (
        <div className="main_slider" style={styles}>
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content">
                  <h6>Spring / Summer Collection 2017</h6>
                  <h1>Get up to 30% Off New Arrivals</h1>
                  <div className="red_button shop_now_button"><a href="#">shop now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }