import React, {Component} from 'react';
import Navbar 			  from '../components/navbar';
import Footer 		      from '../components/footer';
import '../css/design.css';



class Design extends Component {
	constructor(props) {
		super(props);

		}


render() {
	return (
			<div>
				<div className='row justify-content-center'>
					<div className='design_content col-12'>
						<div className='row'>
							<div className='design_first col-12'>
								<h2>Materials selected for a difference 
									<span className='design_gray'>you can feel.</span>
								</h2>

								<div className='row justify-content-center'>
									<p>
										You’re ready for photos day or night with dual aperture providing day 
										to night light control—adjusting and optimizing light before you tap the shutter. Plus, 
										the powerful processor automatically 
										combines multiple frames of the same low-light moment into 
										<span className='design_gray'>one beautiful shot.</span>
									</p>
								</div>

								<div className='row justify-content-center'>
									<div className='design_photo_camera'>
										<div className='row justify-content-center'>
											<span></span>
											<span></span>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div className='row'>
							<div className='design_second col-12'>

								<h2>Infinity Display perfected from <label className='design_gray'>the pixel up</label></h2>

								<p className='design_second_p'>Cinema-grade display you'll have to <label className='design_gray'>see</label> to <label className='design_gray'>believe.</label></p>

								<div className='row justify-content-center'>
									<div className='design_second_img'></div>
								</div>

								<div className='row justify-content-center'>
									<span className='ml-auto'>	
											Immerse yourself in rich tones and amazing contrast in every scene—even the dark 
											ones—with a HDR10+ certified Infinity screen that 
											<label className='design_gray'>
												delivers clear picture even in bright daylight.
											</label>
									</span>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='design_third col-12'>
								<h2>Size and dimension options <span className='design_gray'>to fit your lifestyle.</span></h2>

								<div className='row justify-content-center'>
									<div className='design_third_img'></div>
								</div>

								<div className='row'>
									<p className='third_exp_self_two'>
										Available in four models, <b>SM, MD, LG</b> and <b>XL </b>
										are as elegant to hold as they are to see, thanks to a large 
										<label className='design_gray'>Cinematic Infinity Display and 
										ergonomic grip.
										</label>
									</p>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='design_fourth col-12'>
								<h2>One UI <label className='design_gray'>simplifies</label> the way you use your phone.</h2>

								<div className='row justify-content-center'>
									<div className='design_ui_photo'></div>
								</div>

								<div className='row'>
									<p className='fourth_exp_self'>One UI is designed for how you use your phone: <label className='design_gray'>with one hand.</label> Less clutter, less friction, less putting all your stuff down to do <label className='design_gray'>something on your phone.</label></p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ----------- Footer section ------------ */}

				<div className='row justify-content-center'>	
					<div className='footer_class col-12'>
						<Footer />
					</div>
				</div>
			</div>
		)
	}
}

export default Design;