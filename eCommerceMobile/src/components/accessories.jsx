import React, {Component} from 'react';
import Navbar 			  from '../components/navbar';
import Footer 		      from '../components/footer';
import '../css/accessories.css';



class Accessories extends Component {
	constructor(props) {
		super(props);


		}

	render() {
		return (
			<div>
				<div className='row justify-content-center'>
					<div className='accessories_content m-0 col-12'>
						<div className='row'>
							<div className='accessories_first col-12'>
								<h2>Devices that pair with your <label className='acc_gray'>creative lifestyle.</label></h2>

									<div className='row justify-content-center'>
										<div className='acc_first_img'></div>
									</div>

									<div className='row'>
										<p className='acc_descr_first ml-auto'>
											Headphones Buds seamlessly connect to your device so you can play music and make calls <label className='acc_gray'>hands-free with Bixby.</label>
										</p>
									</div>

									<div className='row'>
										<p className='acc_descr_sec'>
										  	Device tracks activities and easily syncs with your smartphone to help
											you be healthier every day with <label className='acc_gray'>beautifully streamlined design.</label>
										</p>
									</div>
							</div>
						</div>


						<div className='row'>
							<div className='acc_second col-12'>
								<h2>Power up without being <label className='acc_gray'>tied down.</label></h2>
								<p className='acc_second_p'>Multi-perspective <b>camera lenses.</b></p>

								<div className='row justify-content-center'>
									<div className='acc_sec_img'></div>
								</div>

								<div className='row justify-content-center'>
									<span className='acc_first_descr ml-auto'>		
										<label className='acc_gray'><b>Wireless Charger Duo Pad</b></label> quickly recharges your device with <b>Fast Wireless 
										Charging</b> alongside other devices.
									</span>
								</div>

								<div className='row'>
									<span className='acc_sec_descr'>	
										<label className='acc_gray'><b>Wireless Charger Duo Pad</b></label> quickly recharges your device with <b>Fast Wireless 
										Charging</b> alongside other devices.
									</span>
								</div>
							</div>
						</div>


						<div className='row'>
							<div className='acc_third col-12'>
								<h2>Your most balanced life</h2>
								<div className='row justify-content-center'>
										<p className='acc_third_p'>Balance mind and body with sleep cycle tracking, reminders to keep moving, calorie tracking, guided meditation and breathing exercises for stress management.</p>
								</div>

								<div className='row justify-content-center'>
									<div className='acc_third_img_div'></div>
								</div>

								<div className='row'>
									<p className='exp_self'>Leave your phone <label className='acc_gray'>behind.</label></p>
								</div>

								<div className='row'>
									<p className='exp_self_two'>Leave your phone at home. With those Watches, you have the freedom to <label className='acc_gray'>call, text, stream music</label> and get <label className='acc_gray'>notifications</label> via cellular.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='row justify-content-center'>	
					<div className='footer_class col-12'><Footer /></div>
				</div>							 
			</div>
		)
	}
}

export default Accessories;