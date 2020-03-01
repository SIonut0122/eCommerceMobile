import React, {Component} from 'react';
import Navbar 			  from '../components/navbar';
import Footer 			  from '../components/footer';
import '../css/camera.css';
import '../scripts/script.js';



class Camera extends Component {
	constructor(props) {
		super(props);

		}


	render() {
		return (
				<div>
					<div className='row justify-content-center'>
						<div className='camera_content m-0 col-12'>

							<div className='row'>
								<div className='camera_first col-12'>
									<h2>An extraordinary dual aperture camera that isn't <span className='cam_g_txt'>afraid of the dark</span></h2>

									<div className='row'>
										<p className='ml-auto'>You’re ready for photos day or night with dual aperture providing day 
										to night light control—adjusting and optimizing light before you tap the shutter. Plus, 
										the powerful processor automatically  
										<span className='cam_g_txt'> combines multiple frames of the same low-light moment into one beautiful shot.</span>
										</p>
									</div>

										<div className='row justify-content-center'>
											<div className='night_photo_camera'></div>
										</div>

										<div className='row justify-content-center'>
											<p className='photo_descr'>
											<b>F1.5 aperture mode</b>
											<span>Pulls in more light to brighten up low light scenes.</span>
											</p>
										</div>

								</div>
							</div>

							<div className='row'>
								<div className='camera_second col-12'>
									<h2>Three cameras. Not just <span className='cam_g_txt'>Wide-angle, Ultra Wide.</span></h2>

									<p className='camera_sec_p'>Multi-perspective camera lenses.</p>

									<div className='row justify-content-center'>
										<div className='wide_photo_camera'></div>
									</div>

									<div className='row justify-content-center'>
										<span className='cam_sec_span ml-auto'>	
												The powerful, next gen 16MP Ultra Wide Camera lets you fit more in each shot. 
												And in combination with the 12MP Wide-angle 
												and Telephoto Cameras, <span className='cam_g_txt'>you can shoot with 2x optical zoom.</span>
										</span>
									</div>
								</div>
							</div>

							<div className='row'>
								<div className='camera_third col-12'>
									<h2>The selfie camera <span className='cam_g_txt'>that overperforms</span></h2>
									<p className='camera_third_p'>Multi-perspective camera lenses.</p>
									<p className='ml-auto'>Front Camera enhances selfies without <span className='cam_g_txt'>overprocessing them.</span></p>
									<div className='row justify-content-center'>
										<div className='selfie_photo_camera'></div>
									</div>
									<div className='row'>
										<p className='exp_third_self'>Experience a front camera packed with pioneering mobile innovations like self-focusing selfies, UHD video and dual lenses.</p>
									</div>
								</div>
							</div>

							<div className='row'>
								<div className='camera_fourth col-12'>
									<h2>The camera so intelligent it makes you a <span className='cam_g_txt'>better photographer</span></h2>
									<p className='camera_fourth_p'>Pro Assist is your shortcut to professional-looking photos.</p>
									<p className='p_camera_fourth'>
									<span>Front Camera enhances selfies without</span> 
									<span className='cam_g_txt'>overprocessing them.</span>
									</p>
									<div className='row justify-content-center'>
										<div className='super_photo_camera'></div>
									</div>
									<div className='row'>
										<p className='fourth_exp_self_p'>Scene Optimizer is an intelligent photo assistant that recognizes 30 popular subjects, while Local Tone Mapping adjusts settings to the scene and Flaw Detection alerts you to photo mishaps.</p>
									</div>
								</div>
							</div>
					
						</div>
					</div>

					<div className='row justify-content-center'>	
						<div className='footer_class col-12'><Footer />
						</div>
					</div>
				</div>
		)
	}
}

export default Camera;