import React, {Component} from 'react';



export default class Header extends Component {
  render () {
    return (
   
	<header className="header trans_300">
		<div className="top_nav">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="top_nav_left">free shipping on all u.s orders over $50</div>
					</div>
					<div className="col-md-6 text-right">
						<div className="top_nav_right">
							<ul className="top_nav_menu">
								<li className="language">
									<a href="#">
										English
										<i class="fa fa-angle-down"></i>
									</a>
									<ul className="language_selection">
										<li><a href="#">French</a></li>
										<li><a href="#">Italian</a></li>
										<li><a href="#">German</a></li>
										<li><a href="#">Spanish</a></li>
									</ul>
								</li>
								<li className="account">
									<a href="#">
										My Account
										<i className="fa fa-angle-down"></i>
									</a>
									<ul className="account_selection">
										<li><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
										<li><a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
      </div>
      

<div className="main_nav_container">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-right">
      <div className="logo_container">
        <a href="#">Nordic<span>Shop</span></a>
      </div>
      <nav className="navbar">
        <ul className="navbar_menu">
          <li><a href="#">home</a></li>
          <li><a href="categories.html">shop</a></li>
          <li><a href="#">promotion</a></li>
          <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
          <li><a href="contact.html">contact</a></li>
        </ul>
        <ul className="navbar_user">
          
          <li className="checkout">
            <a href="#">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span id="checkout_items" class="checkout_items">2</span>
            </a>
          </li>
        </ul>
        <div className="hamburger_container">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </nav>
    </div>
  </div>
</div>
</div>
</header>

    );
  }
}
