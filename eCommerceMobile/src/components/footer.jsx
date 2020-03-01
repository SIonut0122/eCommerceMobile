import React, {Component} from 'react';
import '../scripts/script.js';
import '../css/footer.css';



class Footer extends Component {
	constructor(props) {
		super(props);
	}



openShopPage() {
	// open buy page with delay of 2 sec
	setTimeout(function() {
			// hide main pages to display buy page
			document.querySelector('.wrap_menu_container').style.display = 'none';
			document.querySelector('.princ_container').style.display ='none';
			// open buy page
			document.querySelector('.buy_class').style.display ='block';
				// hide buy button
			document.querySelector('.buy_button').style.display ='none';
				// display cart icon
			document.querySelector('.buy_icon_img').style.display ='block';

			// hightlight none for the nav buttons
			let navButt = document.querySelectorAll('.nav_menu_button');

				for(let i=0; i < navButt.length; i++ ) {
					navButt[i].classList.remove('active_nav');
			}

	},1000);
}


	render() {
		return(
			<div>
				<div className='row'>
					<div className='footer_wrapper col-12'>
						<div className='wrap_util_links col-12'>
							<div className='footer_util_links col-12'>
								<div className='row justify-content-center'>
									<div className='foot_util_link_div col-12 col-sm-3'>
										<span onClick={() => this.openShopPage()}>SHOP</span>
									</div>
									<div className='foot_util_link_div col-12 col-sm-3'>
										<span>SUPPORT</span>
									</div>
									<div className='foot_util_link_div col-12 col-sm-3'>
										<span onClick={() => this.openShopPage()}>OFFERS</span>
									</div>
									<div className='foot_util_link_div col-12 col-sm-3 col-3'>
										<span>ABOUT</span>
									</div>
								</div>
							</div>
							
							<div className='row justify-content-center m-0'>
								<div className='wrap_social_icons col-12'>
									<div className='row'>
										<p className='footer_copyrights_footer'>©2019, ionutdev.com. All rights reserved.</p>
									</div>
									<div className='row'>
										<div className='social_icons_icons col-12'>
											<div className='social_icons_icons_wrapper'>
												<div className='row justify-content-center'>
													<p className='footer_followus'>Follow us:</p>
														<span className='fb_soc_icon soc_icon'></span>
														<span className='twitter_soc_icon soc_icon'></span>
														<span className='insta_soc_icon soc_icon'></span>
														<span className='youtube_soc_icon soc_icon'></span>
												</div>
											</div>
										</div>
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


export default Footer;