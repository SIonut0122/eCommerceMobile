import React, {Component} from 'react';
import Navbar 		      from '../components/navbar';
import MiddleContent      from '../components/middleContent';
import Footer 		      from '../components/footer';
import Buy 			      from '../components/buy';
import HoverSlide         from '../components/hoverslide';
import Camera 		      from '../components/camera';
import Design 	          from '../components/design';
import Connected 	      from '../components/connected';
import Accessories        from '../components/accessories';
import '../css/main.css';
import '../scripts/script.js';



class Main extends Component {
	constructor(props) {
		super(props)

	 this.state = {}
	}



render() {
	return (
			<div>
				 	
				 	{/* --- Back to top button --- */}

					<div className='backToTop_button'>&#42779;</div>

					{/* --- Navbar  --- */}

					<div className='navbar_class m-0 col-12'>
						<Navbar />
					</div>
					
					{/* --- Buy Page --- */}

					<div className='container-fluid m-0 p-0'>
						<div className='m-0 buy_class col-12'>
							<Buy />
						</div>
					</div>
						 	
					{/* --- Main content pages --- */}

					<div className=' princ_container m-0 p-0'>

						<div className='hoverslide_class col-12'>
							<HoverSlide />
						</div>

						<div className='middlecontent_class col-12'>
							<MiddleContent />
						</div>

						<div className='footer_class col-12'>
							<Footer />
						</div>

					</div>
					
					{/* --- Info content pages for main content --- */}

					<div className=' mt-5 p-0 wrap_menu_container'>

						<div className='camera_class m-0 col-12'>
							<Camera />
						</div>

						<div className='design_class  m-0 col-12'>
							<Design />
						</div>

						<div className='connected_class m-0 col-12'>
							<Connected />
						</div>

						<div className='accessories_class m-0 col-12'>
							<Accessories />
						</div>

					</div>
			</div>
		)
	}

}

export default Main;