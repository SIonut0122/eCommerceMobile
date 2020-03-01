import React, {Component} from 'react';
import '../scripts/script.js';
import '../css/middlecontent.css';



class MiddleContent extends Component {
	constructor(props) {
		super(props);
	}




	render() {
		return(
			<div>
				<div className='container-fluid m-0'>
					{/* ---------- First col ----------- */}

					<div className='row'>
						<div className='mdc_first col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 '>
							<h1 className='mdc_first_h1'>Three cameras. Not just <label className='middcon_gray'>Wide-angle, Ultra Wide.</label></h1>
							<h2 className='mdc_first_h2'>Multi-perspective camera lenses.</h2>

							<div className='row align-left'>
								<p className='mdc_first_p'>
									 The powerful, next gen 16MP Ultra Wide Camera lets you fit more in each
									  shot. And in combination with the 12MP Wide-angle and Telephoto Cameras, 
									  you can shoot with 2x optical zoom.
								 </p>
							 </div>

						</div> 
						
						<div className='mdc_sec col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6'>
							<div className='lens_img_div'>
								<img src={require('../images/phone_lens.png')} className='lens_img_img' alt=''/>
							</div>
						</div>
					</div>

					{/* ---------- Second col ----------- */}

					<div className='row'>
						<div className='mc_sec_div col-12'>
							<div className='row justify-content-center'>
								<div className='mcsec_one col-12'>
									<div className='col-12'>
										<div className='row justify-content-center'>
											 <p className='msec_p_design col-4'>DESIGN</p>
											 <p className='msec_p_zoom col-4'>ZOOM</p>
											 <p className='col-4 msec_p_motion'>MOTION</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				 
					{/* ---------- Third col ----------- */}

				 	<div className='row'>
						<div className='mc_third_div col-12'>
							<div className='mc_third_title'>
							<h1 className='mc_third_h1'>Hi-Motion video <span>without the motion sickness</span></h1>
							</div>

							<div className='row justify-content-center'>
								<div className='mc_third_img col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5'></div>
							</div>

							<div className='row justify-content-center'>
								<div className='mc_img_shad col-12 col-sm-9 col-md-8 col-lg-5 col-xl-5'></div>
							</div>

							<div className='row justify-content-center'>
								<div className='mc_third_div_first col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
									<p className='mc_third_first_p'>4K UHD and HDR10+ <span>Recording brings the scene to life</span></p>
								</div>
								
								<div className='mc_third_div_sec col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
									<p className='mc_third_sec_p'>
											Shoot incredible footage and play it back with the details you saw in person. 
										With the rich color and contrast of <label className='middcon_gray'><b>HDR10+ </b></label> and <label className='middcon_gray'><b>Dynamic Tone Mapping</b></label>, colors stay accurate 
										on each scene.
									</p>
								</div>
							</div>
					

					{/* ---------- Fourth col ----------- */}

					<div className='row'>
							<div className='mc_fourth_div col-12'>
							 
								<h1 className='mc_fourth_h1'><b>Ultra Wide Camera</b> <span>captures the scene as you see it.</span></h1>
								 
								 <div className='row justify-content-center'>
									<span className='mc_fourth_div_img col-11 col-sm-9 col-md-8 col-lg-7 col-xl-7'></span>
							</div>

							<div className='mc_fourth_descr_div col-12'>
								<div className='row float-right'>
									<p className='mc_fourthimg_descr text-left col-11 col-sm-11 col-md-8 col-lg-5 col-xl-5'>With a view that is wider than the Wide-angle Camera, the Ultra Wide Camera delivers a 123 degree field of vision
									 <span> — meaning it sees almost as much as your eyes can.</span>
									</p>
								</div>
							</div>
						</div>
					</div>


					{/* ---------- Fifth col ----------- */}
							
					<div className='row'>
							<div className='mc_fifth_div col-12'>
								<div className='row'>
 								<div className='mc_fifth_first col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
										<h1 className='mc_fifth_h1'>Easily On the Move</h1>
										<div className='row justify-content-center'>
											<p className='mc_fifth_first_p'>
											Record exciting videos while skiing down the mountain. 
											The professional AIS plus OIS makes handheld video 
											seamless and steady.
											</p>
										</div>
								</div>

								<div className='mc_fifth_sec col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
										 
									 <div className='row justify-content-center'>
										 <video id='my-video' className='vidd video-js'   loop preload='false' autoplay='true'  width='400' height='400' data-setup='{}'>
										    <source src={require('../images/stable-video.mp4')} type='video/mp4'></source>
										</video>
									</div>
								</div>
							</div>
						</div>
					</div>


					{/* ---------- Sixth col ----------- */}

					<div className='row'>
							<div className='mc_sixth_div col-12'>
								<div className='row'>
								<h1 className='mc_sixth_h1 ml-auto'>Stay connected.</h1>
							</div>

							<div className='row justify-content-center'>
								<div className='all_devices_img col-11 col-sm-11 col-md-11 col-lg-8 col-xl-7'></div>
							</div>
								<p className='mc_sixth_p'>Welcome to a world without interruption where all devices work together right out of the box, so you can keep life moving.</p>
							</div>
					</div>
								
					</div>
				</div>


					{/* ---------- Seventh col ----------- */}

					<div className='row'>
							<div className='mc_seventh_div col-12'>
								<div className='row'>
									<h1>Power up <span className='mc_sev_h1_span'>without being tied down</span></h1>		
							</div>
							<div className='row mc_sev_h3_b'>
									<h3><b>Wireless Charger Duo Pad</b> <span>quickly recharges your smartphone with </span> 
									<b>Fast Wireless Charging</b> <span>while charging your </span> <b>Watch Active</b> <span>at the same time.</span></h3>		
							</div>
						</div>
					</div>
									

					{/* ---------- Eighth col ----------- */}
						
					<div className='row'>
							<div className='mc_eighth_div col-12'>
								<div className='row'>
									<h1 className='mc_eighth_h1'>Water resistence.</h1>		
							</div>
							<div className='row justify-content-center'>
									<div className='mc_eighth_waterresi_img col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6'></div>	
							</div>
							<div className='row'>
									<h2 className='mc_eighth_h2'> Ready for <label className='middcon_gray'>Exploration</label> </h2>		
							</div>
							<div className='row'>
									<p className='mc_eighth_p'>For the adventurous souls, your smartphone is protected with IP68 water and dust resistance.7 
									You are safe from <label className='middcon_gray'>sudden splashes or drops in water.</label> </p>	
							</div>
						</div>
					</div>

					{/* ---------- Ninth col ----------- */}  	

			  		<div className='row'>
						<div className='mc_ninth_div col-12'>
							<div className='row'>
								<h1>Choose your styl
								<span className='mc_ninth_h1_poin'>e</span>
								<span className='mc_ninth_h1_point'>.</span>
								</h1>
							</div>

							<div className='row justify-content-center'>
									<div id="chooseYourStyle" className="carousel slide col-12" data-ride="carousel">
									  <ol className="carousel-indicators">
									    <li data-target="#chooseYourStyle" data-slide-to="0" className="active"></li>
									    <li data-target="#chooseYourStyle" data-slide-to="1"></li>
									    <li data-target="#chooseYourStyle" data-slide-to="2"></li>
									    <li data-target="#chooseYourStyle" data-slide-to="3"></li>
									  </ol>
									  <div className="carousel-inner">
									    <div className="carousel-item active">
									    	<div className='row justify-content-center'>
									    	  <img className="d-block" src={require('../images/sm_sm.png')} alt="First slide"/>
									   		</div>
									    </div>
									    <div className="carousel-item">
									    	<div className='row justify-content-center'>
									     		 <img className="d-block" src={require('../images/sm_md.png')} alt="Second slide"/>
									    	</div>
									    </div>
									    <div className="carousel-item">
									   		 <div className='row justify-content-center'>
									     		 <img className="d-block" src={require('../images/sm_lg.png')} alt="Third slide"/>
									   		 </div>
									    </div>
									    <div className="carousel-item">
									    	<div className='row justify-content-center'>
									     	 <img className="d-block" src={require('../images/sm_xl.png')} alt="Third slide"/>
									    </div>
									    </div>
									  </div>
									  <a className="carousel-control-prev" href="#chooseYourStyle" role="button" data-slide="prev">
									   	 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
									    	<span className="sr-only">Previous</span>
									  </a>
									  <a className="carousel-control-next" href="#chooseYourStyle" role="button" data-slide="next">
									    	<span className="carousel-control-next-icon" aria-hidden="true"></span>
									   		<span className="sr-only">Next</span>
									  </a>
									</div>
							</div>
					
							<div className='row'>
								<div className='col-12 m-0 p-0'>
									<p className='mc_ninth_sutng'>Size up the <label className='middcon_gray'>next generation</label></p>
								</div>
								<div className='row'>
									<p className='mc_ninth_sutng_descr'>Storage sizes for all your needs, whether it’s HD movie collections or caching all your favorite Spotify songs.</p>
								</div>
							</div>
						</div>
					</div>

				
				</div>
			</div>
		)
	}
}

export default MiddleContent;