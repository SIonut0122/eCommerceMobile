import React, {Component} from 'react';
import  '../css/navbar.css';



class Navbar extends Component {
	constructor(props) {
		super(props);

		}


openBuyPage() {
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

openHighlights(e) {
	// reload location
	window.location.reload();
}



openCamera(e) {
		let buyPage 		  = document.querySelector('.buy_class'),
			princContainer    = document.querySelector('.princ_container'),
		    designPage 		  = document.querySelector('.design_class'),
		    cameraPage 		  = document.querySelector('.camera_class'),
		    connectedPage     = document.querySelector('.connected_class'),
		    accessoriesPage   = document.querySelector('.accessories_class'),
		    navButt 		  = document.querySelectorAll('.nav_menu_button'),
		    cameraNav 		  = document.querySelector('.camera_nav'),
		    wrapMenuContainer = document.querySelector('.wrap_menu_container'),
		    buyButton         = document.querySelector('.buy_button');

		    setTimeout(function() {
		    	buyButton.style.display 		= 'block';
		    	wrapMenuContainer.style.display = 'block';
			    princContainer.style.display 	= 'none';
			    buyPage.style.display 			= 'none';
			    designPage.style.display 		= 'none';
			    connectedPage.style.display 	= 'none';
			    accessoriesPage.style.display 	= 'none';
			    cameraPage.style.display 		= 'block';
			   
		    },500);

		     // hightlight selected nav button
			for(let i=0; i < navButt.length; i++ ) {
				navButt[i].classList.remove('active_nav');
			}
		    e.target.classList.add('active_nav');

}

openDesign(e) {
		let buyPage 	   	  = document.querySelector('.buy_class'),
			princContainer 	  = document.querySelector('.princ_container'),
		    designPage     	  = document.querySelector('.design_class'),
		    cameraPage     	  = document.querySelector('.camera_class'),
		    connectedPage     = document.querySelector('.connected_class'),
		    accessoriesPage   = document.querySelector('.accessories_class'),
		    navButt 		  = document.querySelectorAll('.nav_menu_button'),
		    wrapMenuContainer = document.querySelector('.wrap_menu_container'),
		    buyButton 		  = document.querySelector('.buy_button');

		    setTimeout(function() {
		    	buyButton.style.display 		= 'block';
		    	wrapMenuContainer.style.display = 'block';
			    princContainer.style.display 	= 'none';
			    buyPage.style.display 			= 'none';
			    designPage.style.display 		= 'block';
			    connectedPage.style.display 	= 'none';
			    accessoriesPage.style.display   = 'none';
			    cameraPage.style.display 	    = 'none';
		     },500);

		      // hightlight selected nav button
			for(let i=0; i < navButt.length; i++ ) {
				navButt[i].classList.remove('active_nav');
			}
		    e.target.classList.add('active_nav');
}

openConnected(e) {
		let buyPage 		  = document.querySelector('.buy_class'),
			princContainer 	  = document.querySelector('.princ_container'),
		    designPage 	 	  = document.querySelector('.design_class'),
		    cameraPage 	 	  = document.querySelector('.camera_class'),
		    connectedPage 	  = document.querySelector('.connected_class'),
		    accessoriesPage   = document.querySelector('.accessories_class'),
		    navButt 		  = document.querySelectorAll('.nav_menu_button'),
		    wrapMenuContainer = document.querySelector('.wrap_menu_container'),
		    buyButton 		  = document.querySelector('.buy_button');

		    setTimeout(function() {
		    	buyButton.style.display 		= 'block';
		    	wrapMenuContainer.style.display = 'block';
			    princContainer.style.display    = 'none';
			    buyPage.style.display 			= 'none';
			    designPage.style.display 		= 'none';
			    connectedPage.style.display 	= 'block';
			    accessoriesPage.style.display 	= 'none';
			    cameraPage.style.display 		= 'none';
		    },500);

		      // hightlight selected nav button
			for(let i=0; i < navButt.length; i++ ) {
				navButt[i].classList.remove('active_nav');
			}
		    e.target.classList.add('active_nav');
}


openAccessories(e) {
		let buyPage 	      = document.querySelector('.buy_class'),
			princContainer    = document.querySelector('.princ_container'),
		    designPage 	      = document.querySelector('.design_class'),
		    cameraPage 	      = document.querySelector('.camera_class'),
		    connectedPage     = document.querySelector('.connected_class'),
		    accessoriesPage   = document.querySelector('.accessories_class'),
		    navButt 		  = document.querySelectorAll('.nav_menu_button'),
		    wrapMenuContainer = document.querySelector('.wrap_menu_container'),
		    buyButton 		  = document.querySelector('.buy_button');

		     setTimeout(function() {
		     	buyButton.style.display 		= 'block';
		     	wrapMenuContainer.style.display = 'block';
			    princContainer.style.display 	= 'none';
			    buyPage.style.display 		    = 'none';
			    designPage.style.display 		= 'none';
			    connectedPage.style.display 	= 'none';
			    accessoriesPage.style.display 	= 'block';
			    cameraPage.style.display 		= 'none';
		     },500);

		  // hightlight selected nav button
			for(let i=0; i < navButt.length; i++ ) {
				navButt[i].classList.remove('active_nav');
			}
		    	e.target.classList.add('active_nav');
}



	render() {
		return (
			<div>
				<div className='main_container container-fluid'>
					<div className='row justify-content-center'>	
						<div className='navbar_wrap col-12'>
							<div className='row justify-content-center'>	
								<div className='first_nb_col col-4 '>
									<span></span>
								</div>
								<div className='sec_nb_col col-3'></div>
								<div className='third_nb_col col-5'>
									<div className='row justify-content-center'>	
										<span className='buy_button' onClick={() => this.openBuyPage()}>BUY</span>
										<span className='buy_icon_img'></span>
									</div>
								</div>
							</div>
							<div className='row justify-content-center'>	
								<div className='nav_menu_wrapper col-12'>
									<div className='row justify-content-center'>
										<span className='nav_menu_button active_nav' onClick={(e) => this.openHighlights()}>HIGHLIGHTS</span>
										<span className='nav_menu_button' onClick={(e) => this.openCamera(e)}>CAMERA</span>
										<span className='design_nav nav_menu_button' onClick={(e) => this.openDesign(e)}>DESIGN</span>
										<span className='connected_nav nav_menu_button' onClick={(e) => this.openConnected(e)}>CONNECTED</span>
										<span className='accessories_nav nav_menu_button' onClick={(e) => this.openAccessories(e)}>ACCESSORIES</span>
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

export default Navbar;