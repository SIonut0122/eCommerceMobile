import React, {Component} from 'react';
import Navbar 			  from '../components/navbar';
import Footer 			  from '../components/footer';
import '../css/connected.css';



class Connected extends Component {
	constructor(props) {
		super(props);

		}


render() {
	return (
			<div>
				<div className='row justify-content-center'>
					<div className='connected_content col-12 m-0'>
						<div className='row'>
							<div className='connected_first col-12'>
								<h2>The power to <label className='conn_gray'>share power.</label></h2>

								<div className='row justify-content-center'>
									<p>
										Cables won't hold you back. With Wireless Powershare, you can charge your 
										devices wirelessly right on the back of your smartphone.
									</p>
								</div>

								<div className='row justify-content-center'>
									<div className='connected_f_img'></div>
								</div>

								<div className='row justify-content-center'>
									<p className='photo_descr'>
									<b>Sharing is Caring</b>
									<br />
									<br />
									<span>
										Device's Reverse Charge feature can refuel earbuds, 
										a toothbrush or save your friend's 
										dying phone. 
										<label className='conn_gray'>Charging is now also sharing.</label> 
									</span>
									</p>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='connected_second col-12'>
								<h2>Put your phone on your wrist.</h2>
								<p>Get notifications, meditate with Calm, track your fitness and control your music all from your wrist</p>

								<div className='row'>
									<span>
										A wide selection of watch straps of different colours and materials style your every look and mood.
									</span>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='acc_third col-12'>
								<h2>Keep out the noise, <label className='conn_gray'>not the call.</label></h2>
								<p className='acc_call_wi'>Call without interruption.</p>

								<div className='row justify-content-center'>
									<div className='acc_third_img'></div>
								</div>

								<div className='row'>
									<p className='acc_third_exp_self'>
										 Be heard everywhere with the dual microphones.
										 They switch between the outer and inner mic based on 
										 <label className='conn_gray'>background noise to keep you clear.</label>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='row justify-content-center'>	
					<div className='footer_class col-12'>
						<Footer />
					</div>
				</div>
			</div>
		)
	}
}

export default Connected;