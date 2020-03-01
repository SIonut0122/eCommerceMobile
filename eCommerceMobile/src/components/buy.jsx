import React, {Component} from 'react';
import Navbar 			  from '../components/navbar';
import ReactImageMagnify  from 'react-image-magnify';
import Footer 			  from '../components/footer';
import '../css/buy.css';



class Buy extends Component {
	constructor(props) {
		super(props);


		this.state =  {
						
						 	main_image: require('../images/size/sm/sm_black/1.jpg'),
						 	main_device_name: 'SM',
						 	main_capacity: ['128GB','256GB'],
						 	main_price: 549,
						 	main_images: [
									require('../images/size/sm/sm_black/1.jpg'),
									require('../images/size/sm/sm_black/2.jpg'),
									require('../images/size/sm/sm_black/3.jpg'),
									require('../images/size/sm/sm_black/4.jpg')
										  ],
	 						main_img_one: [
									require('../images/size/sm/sm_black/1.jpg'),
									require('../images/size/sm/sm_black/2.jpg'),
									require('../images/size/sm/sm_black/3.jpg'),
									require('../images/size/sm/sm_black/4.jpg')
										  ],
	 						main_img_two: [
									require('../images/size/sm/sm_white/1.jpg'),
									require('../images/size/sm/sm_white/2.jpg'),
									require('../images/size/sm/sm_white/3.jpg'),
									require('../images/size/sm/sm_white/4.jpg')
										  ],
	 						
							main_color: 		  [{code:'#000000', name:'Black'}, {code:'#FFFFFF', name:'White'}],

							selectedColor: 		  'Black',
							selectedCapacity:     '64GB',
							buy_selected_size:     false,
							buy_selected_capacity: false,
							buy_selected_color:    false,
							infoAddressComplete:   false,
							cardDetailsComplete:   false,
							infoBillingComplete:   false,
							checkAgreeTerms: 	   false,


						
								size:  [   {
												device: 'SM',
												price: 549,
												image: require('../images/size/sm/sm_black/1.jpg'),
												capacity: ['128GB', '256GB'],
												color: [{code:'#000000', name:'Prism Black'}, {code:'#FFFFFF', name:'Prism White'}],
												main_img_one: [
													require('../images/size/sm/sm_black/1.jpg'),
													require('../images/size/sm/sm_black/2.jpg'),
													require('../images/size/sm/sm_black/3.jpg'),
													require('../images/size/sm/sm_black/4.jpg')
															],
												main_img_two: [
													require('../images/size/sm/sm_white/1.jpg'),
													require('../images/size/sm/sm_white/2.jpg'),
													require('../images/size/sm/sm_white/3.jpg'),
													require('../images/size/sm/sm_white/4.jpg')
															]
											},
											{
												device: 'MD',
												price: 749,
												image: require('../images/size/md/md_black/1.jpg'),
												capacity: ['128GB', '512GB'],
												color: [{code:'#000000', name:'Prism Black'}, {code:'#1732FF', name:'Prism Blue'}],
												main_img_one: [
													require('../images/size/md/md_black/1.jpg'),
													require('../images/size/md/md_black/2.jpg'),
													require('../images/size/md/md_black/3.jpg'),
													require('../images/size/md/md_black/4.jpg')
															],
												main_img_two: [
													require('../images/size/md/md_blue/1.jpg'),
													require('../images/size/md/md_blue/2.jpg'),
													require('../images/size/md/md_blue/3.jpg'),
													require('../images/size/md/md_blue/4.jpg')
															]
												}, 
												{
												device: 'LG',
												price: 849,
												image: require('../images/size/lg/lg_blue/1.jpg'),
												capacity: ['256GB', '1TB'],
												color: [{code:'#1A56EE', name:'Prism Blue'}, {code:'#FFA777', name:'Flamingo Pink'}],
												main_img_one: [
													require('../images/size/lg/lg_blue/1.jpg'),
													require('../images/size/lg/lg_blue/2.jpg'),
													require('../images/size/lg/lg_blue/3.jpg'),
													require('../images/size/lg/lg_blue/4.jpg')
															],
												main_img_two: [
													require('../images/size/lg/lg_pink/1.jpg'),
													require('../images/size/lg/lg_pink/2.jpg'),
													require('../images/size/lg/lg_pink/3.jpg'),
													require('../images/size/lg/lg_pink/4.jpg')
															]
												},
												{
												device: 'XL',
												price: 1099,
												image: require('../images/size/xl/xl_silver/1.jpg'),
												capacity: ['256GB', '512GB'],
												color: [{code:'#D0CACA', name:'Crown Silver'}],
												main_img_one: [
													require('../images/size/xl/xl_silver/1.jpg'),
													require('../images/size/xl/xl_silver/2.jpg'),
													require('../images/size/xl/xl_silver/3.jpg'),
													require('../images/size/xl/xl_silver/4.jpg')
															]
												},
										]		 
		}		  				
	}


viewLeftImg(e) {
	let spanImgLeft = document.querySelector('.wvpil_wrap'),
	    span 	    = spanImgLeft.getElementsByTagName('span');

			// if selected, remove selected button and style
	for(let i=0; i< span.length; i++) {
		span[i].style.border = '1px solid #D2CFCF';

	// if not, select the button and add style
			e.currentTarget.style.border = '1px solid black'; 
	}

 	// select from the left panel with img devices and display it on the main display box
			this.setState({
				main_image: e.target.src
			})
}


componentDidUpdate() {
	let proceedButton = document.querySelector('.proceed_buy_button');
	
		// if all the req boxes are checked, display the proceed button
			if(this.state.buy_selected_size && 
				this.state.buy_selected_capacity && 
				this.state.buy_selected_color) {
				proceedButton.setAttribute('style', 'opacity:1;pointer-events:visible;');
			}
	
}


selectSize(item,e) {
 
		let capButt 	= document.querySelectorAll('.cap_button'),
		    devSizeButt = document.querySelectorAll('.device_size_button'),
		    colorDev 	= document.querySelectorAll('.color_dev_one'),
		    spanImgLeft = document.querySelector('.wvpil_wrap'),
		    span 		= spanImgLeft.getElementsByTagName('span'),
			orderButton = document.querySelector('.place_order_button');
	

		// selected size state -> true
			this.setState({
				buy_selected_size: true,
				buy_selected_capacity: false,
				buy_selected_color: false
			})
			    
			// disable 'Place order' button
		orderButton.classList.remove('placeorderbutt_class');

			// if selected, remove selected button and style
		for(let i=0; i< devSizeButt.length; i++) {
		devSizeButt[i].classList.remove('selectBox');
	 
			// if not, select the button and add style
		 e.target.classList.add('selectBox');
	 
	}


		// set state to be displayed with all the info about the selected size device
	this.setState({
			main_image:       item.image,
			main_capacity: 	  item.capacity,
			main_device_name: item.device,
			main_images: 	  item.main_img_one,
			main_price: 	  item.price,
			main_img_one: 	  item.main_img_one,
			main_img_two: 	  item.main_img_two ? item.main_img_two : false,
			main_color: 	  item.color
	})

		// if any capacity device size selected, remove selected button and style
	for(let i=0; i< capButt.length; i++) {
		capButt[i].classList.remove('selectBox');
		capButt[i].children[1].style.display = 'none';
 
		}
			// if any color is  selected, remove selected button and style
	for(let i=0; i< colorDev.length; i++) {
		colorDev[i].classList.remove('selectBox');
 
		}

		// remove border selected for the left images
			for(let i=0; i< span.length; i++) {
			span[i].style.border = '1px solid #D2CFCF'; 
	}

}

selectCapacity(e) {
		let capButt = document.querySelectorAll('.cap_button');

	// set selected color state to true
		this.setState({
			buy_selected_capacity: true
		})

	if(this.state.selectedCapacity === this.state.main_capacity[0]) {
		this.setState({
			selectedCapacity: this.state.main_capacity[1]
		})
	} else {
		this.setState({
			selectedCapacity: this.state.main_capacity[0]
		})
	}

	// if selected, remove selected button and style
	for(let i=0; i< capButt.length; i++) {
		capButt[i].classList.remove('selectBox');
		capButt[i].children[1].style.display = 'none';
		capButt[i].children[1].style.color = 'black';
	// if not, select the button and add style
		e.target.classList.add('selectBox');
		e.target.children[1].style.display = 'block';
		e.target.children[1].style.color = 'black';
	}

}

selectColor(el,index,item) {
	let colorDev = document.querySelectorAll('.color_dev_one');

	// set state to chosen color and selected color to true
		this.setState({
			selectedColor: item.name,
			buy_selected_color: true
		})


	// if selected, remove selected button and style
	for(let i=0; i< colorDev.length; i++) {
		colorDev[i].classList.remove('selectBox');
	 
	// if not, select the button and add style
		el.target.classList.add('selectBox');
	 
	} 


 	// display the device button according to index of color

	if(index === 0) {
		this.setState({
			main_images: this.state.main_img_one,
			main_image: this.state.main_img_one[0]
		})

	} else if(index !== 0) {
		this.setState({
			main_images: this.state.main_img_two ? this.state.main_img_two : false,
			main_image: this.state.main_img_two ? this.state.main_img_two[0] : false
		})
	}
}



returnToBuyPage() {
	let cardDetailsInput = document.querySelectorAll('.card_details_input'),
		infoBillInput 	 = document.querySelectorAll('.billing_info_input'),
	    infoAddrInput 	 = document.querySelectorAll('.info_address_input'),
	    checkAgreeBox 	 = document.querySelector('.check_agree_box'),
	    orderButton 	 = document.querySelector('.place_order_button'),
	    proceedPage 	 = document.querySelector('.proceed_page'),
		loadingPage 	 = document.querySelector('.loading_proceed_page'),
		self 			 = this;

		// display the loading page
		loadingPage.style.display = 'block';

		setTimeout(function() {
		document.querySelector('.buy_first_half').style.display ='block';
 		document.querySelector('.buy_sec_half').style.display ='block';
		proceedPage.style.display = 'none';
		},2000);

		setTimeout(function() {
			loadingPage.style.display = 'none';
			// disable 'Place order' button
			orderButton.classList.remove('placeorderbutt_class');
			// uncheck agree box
			checkAgreeBox.checked = false;

			// set state to default

		self.setState({
			checkAgreeTerms:     false,
			infoAddressComplete: false,
			cardDetailsComplete: false,
			infoBillingComplete: false
		})
		// set buy inputs to default

			for(let i=0; i < infoAddrInput.length; i++) {
				// if any input is already .red, restore the default
				infoAddrInput[i].removeAttribute('style');
				infoAddrInput[i].value = '';
				}
			// restore style default for the 'Card details' inputs and set the value to none
			for(let i=0; i < cardDetailsInput.length; i++) {
			// if any input is already .red, restore the default
				cardDetailsInput[i].removeAttribute('style');
				cardDetailsInput[i].value = '';
			}
			for(let i=0; i < infoBillInput.length; i++) {
			// if any input is already .red, restore the default
				infoBillInput[i].removeAttribute('style');
				infoBillInput[i].value = '';
				}
		},2200);		
}

proceedWithOrder() {
	let proceedPage = document.querySelector('.proceed_page'),
	    loadingPage = document.querySelector('.loading_proceed_page');

					// if all the req boxes are selected, display the proceed page
		if(this.state.buy_selected_size && this.state.buy_selected_capacity && this.state.buy_selected_color) {
						
					// display the loading effect
				loadingPage.style.display = 'block';

				setTimeout(function() {
						// display the proceedpage after 2 sec
					proceedPage.style.display = 'block';
					// hide buy page
					document.querySelector('.buy_first_half').style.display ='none';
 					document.querySelector('.buy_sec_half').style.display ='none';

				},2000);
				setTimeout(function() {
					// hide loading page with delay
					loadingPage.style.display = 'none';
				},2300);
		}

}

/* --------------------- PLACE ORDER BOX -------------------- */

checkCreditCardBox(e) {

let cardDetailsDiv  = document.querySelector('.card_details_div'),
	billingInfoDiv  = document.querySelector('.billing_info_div'),
	payPalDiv 	    = document.querySelector('.paypal_image_div'),
	paypal_checkbox = document.querySelector('.paypal_checkbox');
	
	// uncheck the paypal box
	paypal_checkbox.checked = false;

	// if cardcredit box is checked and paypal box is not, display credit card payment method
	if(e.target.checked && paypal_checkbox.checked !== true) {
			// display credit card payment method
		cardDetailsDiv.style.display = 'block';
		billingInfoDiv.style.display = 'block';
			// hide paypal payment method
		payPalDiv.style.display = 'none';

			// set the 'Credit card info' and 'Billings info' to false (Paypal unselected)
		this.setState({
			cardDetailsComplete: false,
			infoBillingComplete: false
		})
	} 
}

checkPaypalBox(e) {

let cardDetailsDiv 		= document.querySelector('.card_details_div'),
    billingInfoDiv 		= document.querySelector('.billing_info_div'),
	payPalDiv 			= document.querySelector('.paypal_image_div'),
	creditcard_checkbox = document.querySelector('.creditcard_checkbox'),
	paypal_checkbox 	= document.querySelector('.paypal_checkbox'),
	cardDetailsInput 	= document.querySelectorAll('.card_details_input'),
	infoBillInput 		= document.querySelectorAll('.billing_info_input');

	// uncheck credit card box 
	creditcard_checkbox.checked = false;
	

	// if paypal box is checked and credit card box is not, display paypal payment method
	if(e.target.checked && creditcard_checkbox.checked !== true ) {
				// display credit card payment method
				cardDetailsDiv.style.display = 'none';
				billingInfoDiv.style.display = 'none';
				// hide paypal payment method
				payPalDiv.style.display = 'block';

				// restore style default for the 'Card details' inputs and set the value to none
				for(let i=0; i < cardDetailsInput.length; i++) {
				// if any input is already .red, restore the default
					cardDetailsInput[i].removeAttribute('style');
					cardDetailsInput[i].value = '';
				}
				for(let i=0; i < infoBillInput.length; i++) {
				// if any input is already .red, restore the default
					infoBillInput[i].removeAttribute('style');
					infoBillInput[i].value = '';
					}

						// set the 'Credit card info' and 'Billings info' to true (Paypal selected)
					this.setState({
						cardDetailsComplete: true,
						infoBillingComplete: true
					})
	} 
}


haveitDeliveredCheckbox(e){
	let wrapAddressInfo    = document.querySelector('.wrap_inputs'),
		findNearestStore   = document.querySelector('.find_nearest_store_div'),
	    pickit_up_checkbox = document.querySelector('.pickit_up_checkbox');

 

if(e.target.checked) {
		// displat the Info Address inputs
		wrapAddressInfo.style.display = 'flex';
		// hide the 'Find the nearest store' message
		findNearestStore.style.display = 'none';
		// uncheck the 'pick it up' checkbox
		pickit_up_checkbox.checked = false;

		// set the 'Have it delivered' state to false (inputs check required)
		this.setState({
					infoAddressComplete: false
				})
	}
}

 
pickitUpCheckbox(e) {
		 let wrapAddressInfo 	 = document.querySelector('.wrap_inputs'),
		     findNearestStore 	 = document.querySelector('.find_nearest_store_div'),
		     haveit_del_checkbox = document.querySelector('.haveit_del_checkbox'),
		     infoAddrInput 		 = document.querySelectorAll('.info_address_input');

		if(e.target.checked) {
			// hide info address inputs
			wrapAddressInfo.style.display = 'none';
			// displat 'find nearest store' message
			findNearestStore.style.display = 'flex';
			// uncheck the 'Have it delivered' message
			haveit_del_checkbox.checked = false;

			// if the info address inputs are not empty, clear all
			for(let i=0; i < infoAddrInput.length; i++) {
				// if any input is already .red, restore the default
				infoAddrInput[i].removeAttribute('style');
				infoAddrInput[i].value = '';
			}
				// set the 'Have it delivered' state to true (address not required)
					this.setState({
					infoAddressComplete: true
				})
		}
}


 
checkValdInputs() {
	let  infoAddrInput 		 = document.querySelectorAll('.info_address_input'),
		 infoBillInput       = document.querySelectorAll('.billing_info_input'),
 		 cardDetailsInput    = document.querySelectorAll('.card_details_input'),
		 haveItDelCheckBox   = document.querySelector('.haveit_del_checkbox'),
		 pickItupCheckbox    = document.querySelector('.pickit_up_checkbox'),
		 paypal_checkbox     = document.querySelector('.paypal_checkbox'),
		 creditcard_checkbox = document.querySelector('.creditcard_checkbox'),
		 buyContainer 		 = document.querySelector('.buy_container'),
	     checkAgreeBox 		 = document.querySelector('.check_agree_box'),
	     orderButton 		 = document.querySelector('.place_order_button');

	
	// uncheck agree box
	checkAgreeBox.checked = false;
	// set check agree box state to false
		this.setState({
			checkAgreeTerms: false
		})
	// disable 'Place order' button
	orderButton.classList.remove('placeorderbutt_class');

 	// if deliver option is checked, check the address form inputs
if(haveItDelCheckBox.checked === true) {
		// if all the info address inputs are not empty, proceed
			// if not, highlight the empty ones
		for(let i=0; i < infoAddrInput.length; i++) {
				// check for blank spaces
				let trimed = infoAddrInput[i].value.trim();
			if(infoAddrInput[i].value.length > 1 && trimed.length === infoAddrInput[i].value.length) {
				this.setState({
					infoAddressComplete: true
				})
			} else {
				this.setState({
					infoAddressComplete: false
				})
			}
		}
			// if pick it up checkbox is checked, proceed
} else if(pickItupCheckbox.checked === true && haveItDelCheckBox.checked === false) {
						this.setState({
							infoAddressComplete: true
						})
}

if(creditcard_checkbox.checked === true) {
					// if all the credit cards info inputs are not empty, proceed
						// if not, highlight the empty ones
			for(let i=0; i < cardDetailsInput.length; i++) {
					// check for blank spaces
					let trimed = cardDetailsInput[i].value.trim();
				if(cardDetailsInput[i].value.length > 1 && trimed.length === cardDetailsInput[i].value.length) {
					this.setState({
						cardDetailsComplete: true
					})
				} else {
					this.setState({
						cardDetailsComplete: false
					})
				}
			} 

					// if all the  billings info inputs are not empty, proceed
				// if not, highlight the empty ones
					let checkBill = 0;
			for(let i=0; i < infoBillInput.length; i++) {
					// check for blank spaces
					let trimed = infoBillInput[i].value.trim();
					// check if the number of inputs with values inside is equal with the infoBillInputs
					if(infoBillInput[i].value.length > 1 && trimed.length === infoBillInput[i].value.length) {
						checkBill += 1;
					} 

					// if infobillinput number is equal with the inputs with value inside, proceed
				if(checkBill === infoBillInput.length) {
						this.setState({ infoBillingComplete: true })
				} else {
						this.setState({ infoBillingComplete: false })
				}
	}

} else if(creditcard_checkbox.checked === false && paypal_checkbox.checked === true) {
			this.setState({
						cardDetailsComplete: true,
						infoBillingComplete: true
					})
	}
}

placeOrder() {
let infoAddrInput 	  	= document.querySelectorAll('.info_address_input'),
  	infoBillInput     	= document.querySelectorAll('.billing_info_input'),
	cardDetailsInput  	= document.querySelectorAll('.card_details_input'),
 	haveItDelCheckBox 	= document.querySelector('.haveit_del_checkbox'),
 	pickItupCheckbox  	= document.querySelector('.pickit_up_checkbox'),
    paypal_checkbox   	= document.querySelector('.paypal_checkbox'),
    creditcard_checkbox = document.querySelector('.creditcard_checkbox'),
    buyContainer 		= document.querySelector('.buy_container');


 	// if deliver option is checked, check the address form inputs
if(haveItDelCheckBox.checked === true) {
		// if all the info address inputs are not empty, proceed
			// if not, highlight the empty ones
		for(let i=0; i < infoAddrInput.length; i++) {
				// if any input is already .red, restore the default
				infoAddrInput[i].removeAttribute('style');
				// check for blank spaces
				let trimed = infoAddrInput[i].value.trim();

			if(infoAddrInput[i].value.length > 1 && trimed.length === infoAddrInput[i].value.length) {
				this.setState({ infoAddressComplete: true })
			} else {
				infoAddrInput[i].style.border = '1px solid #FF0000';
				this.setState({ infoAddressComplete: false })
			}
		}
			// if pick it up checkbox is checked, proceed
} else if(pickItupCheckbox.checked === true && haveItDelCheckBox.checked === false) {
	this.setState({ infoAddressComplete: true })
}

if(creditcard_checkbox.checked === true) {
					// if all the credit cards info inputs are not empty, proceed
						// if not, highlight the empty ones
			for(let i=0; i < cardDetailsInput.length; i++) {
				// if any input is already .red, restore the default
					cardDetailsInput[i].removeAttribute('style');
					// check for blank spaces
					let trimed = cardDetailsInput[i].value.trim();
				if(cardDetailsInput[i].value.length > 1 && trimed.length === cardDetailsInput[i].value.length) {
					this.setState({
						cardDetailsComplete: true
					})
				} else {
					cardDetailsInput[i].style.border = '1px solid #FF0000';
					this.setState({
						cardDetailsComplete: false
					})
				}
			} 

					// if all the  billings info inputs are not empty, proceed
				// if not, highlight the empty ones
			let checkBill = 0;
	for(let i=0; i < infoBillInput.length; i++) {
		
		// if any input is already .red, restore the default
			infoBillInput[i].removeAttribute('style');
			// check for blank spaces
			let trimed = infoBillInput[i].value.trim();
			// check if the number of inputs with values inside is equal with the infoBillInputs
			if(infoBillInput[i].value.length > 1 && trimed.length === infoBillInput[i].value.length) {
				checkBill += 1;
			} else {
				infoBillInput[i].style.border = '1px solid #FF0000';
			}

			// if infobillinput number is equal with the inputs with value inside, proceed
		if(checkBill === infoBillInput.length) {
				this.setState({
							infoBillingComplete: true
						})
		} else {
				this.setState({
							infoBillingComplete: false
						})
		}
	}

} else if(creditcard_checkbox.checked === false && paypal_checkbox.checked === true) {
			this.setState({
						cardDetailsComplete: true,
						infoBillingComplete: true
					})
	}

	// if all the inputs are not empty, display the 'email confirmation' message and refresh page
	if(this.state.cardDetailsComplete && this.state.infoBillingComplete && this.state.infoAddressComplete && this.state.checkAgreeTerms) {
				
				    let finish_order_div = document.querySelector('.finish_order_div');
				   
				    	 setTimeout(function() {
				    	  finish_order_div.style.display = 'block';
				    },1000);
				  
				         setTimeout(function() {
				    		window.location.reload();
				    },7000);
				}
	}


agreeCheckbox(e) {	
	let orderButton = document.querySelector('.place_order_button');

	 	if(e.target.checked) {
	 		orderButton.classList.add('placeorderbutt_class');

	 		this.setState({
	 			checkAgreeTerms: true
	 		})
	 	} else {
	 		orderButton.classList.remove('placeorderbutt_class');

	 		this.setState({
	 			checkAgreeTerms: false
	 		})
	 	}
} 


render() {
	{/* Note: If error, check div at line 717 where it ends (1197 ?) */}
	
	let defoz = {
		cursor: 'pointer',
		marginRight: '14px'
	};

	return(

		<div>
			<div className='row justify-content-center'>
				<div className='buy_container col-12 m-0'>
					<div className='row'>
						<div className='loading_proceed_page col-12'>
							<div className='row justify-content-center'>
								<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='buy_first_half m-0 p-0 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
							<div className='row justify-content-center'>
								
								<div className='wrap_view_phone_img_left col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
									<div className='row justify-content-center'>
										<div className='wvpil_wrap'>
											<div className='row justify-content-center'>
												{this.state.main_images.map((item,index)  =>  {
												 return (
													<span key={index} 
														className='span_img_left col-9 col-sm-7 col-md-7 col-lg-9 col-xl-8'
															onClick={(e) => this.viewLeftImg(e)}>
														 		<img src={item} alt=''/>
													</span>
												 )
													
													})}
											</div>
										</div>
									</div>
								</div>

								<div className='img_view col-10 col-sm-9 col-md-7 col-lg-9'>
									<div className='row justify-content-center'>
										<div className='img_view_wrap col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
											<div className='row justify-content-center'>
												<img src={this.state.main_image} alt=''/>
											</div>
										</div>


										<div className='info_box_imgwrap col-12'>
											<div className='row justify-content-center'>

												<div className='wrap_info_box'>
													<div className='row justify-content-center'>
														<span className='wib_span col-6'>
														<img src={require('../images/free_shipp_icon.png')} alt='Free shipping'/>
														Free shipping
														</span>
														<span className=' wib_span col-6'>
														<img src={require('../images/trade_icon.png')} alt='Trade and save'/>
														Trade in and save up to $250
														</span>
													</div>
												</div>
											
												<div className='wrap_devunder_img_list col-12'>
													<div className='row justify-content-center'>
														<div classsName='devunder_img_list col-12'>
															{this.state.main_images.map((item,index)  =>  {
																 return (
																		<span 
																		key={item}
																		onClick={(e) => this.viewLeftImg(e)}>
																		<img src={item} alt=''/>
																		</span>
																		)												
																})}
														</div>
													</div>
												</div>
											</div>
										</div>
									
									</div>
								</div>
							</div>
						</div>

						<div className='buy_sec_half  col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
							<div className='row'>
								<p className='device_size_title'>Device size</p>
							</div>

								{/* --------- Device device div --------- */}

								<div className='row justify-content-center'>
									<div className='wrap_device_size col-12'>
										<div className='row justify-content-center'>
											{this.state.size.map((item,index) => {
												return (
											<span key={index} 
												className='device_size_button col-4 col-sm-3 col-md-4 col-lg-4 col-xl-4'
													onClick={(e) => this.selectSize(item,e)}>
														{item.device} <label>${item.price}</label>
											</span>
														)
												})}

										</div>
									</div>
								</div>


								{/* --------- Capacity device div --------- */}

								<div className='row'>
									<p className='capacity_device_title'>Capacity </p>
								</div>

								<div className='row justify-content-center'>
									<div className='capacity_device_size col-12'>
										<div className='row justify-content-center'>
											
											<div className='cap_dev_size_low cap_button col-5 col-sm-4 col-md-3' onClick={(e) => this.selectCapacity(e)}>
												<span className='capdev_low_txt'>{this.state.main_capacity[0]}</span>
												<span className='capdev_low_txt_plus'></span>
											</div>

											<div className='cap_dev_size_high cap_button col-5 col-sm-4 col-md-3' onClick={(e) => this.selectCapacity(e,this)}>
												<span className='capdev_high_txt'>{this.state.main_capacity[1]}</span>
												<span className='capdev_high_txt_plus'>+100</span>
											</div>
											
										</div>
									</div>
								</div>

								{/* --------- Color device div --------- */}

								<div className='row'>
								<p className='color_device_title'>Color </p>
								</div>


								<div className='row justify-content-center'>
									<div className='color_device_size col-12'>
										<div className='row justify-content-center'>
											{this.state.main_color.map((item,index) => {
													return (
											<div key={index} 
											className='color_dev_one col-3 col-sm-2 col-md-2' 
											style={{backgroundColor: item.code}} 
											title={item.name}
											onClick={(e) => this.selectColor(e,index,item)}>
											</div>
														)
													})}
											 
										</div>
									</div>
								</div>

									{/* --------- Proceed button div --------- */}

								<div className='row justify-content-center'>
									<div className='proceed_buy_button col-8 col-sm-6 col-md-5' onClick={() => this.proceedWithOrder()}>
										Proceed
									</div>
								</div>

								<div className='row'>
									<div className='info_under_proceed_button col-12'>
											<div className='row'>
												<span className='col-12'>
												<img src={require('../images/free_shipp_icon.png')} alt='Free shipping'/>
												Free shipping</span>
											</div>
											<div className='row'>
												<span className='col-12'>
												<img src={require('../images/trade_icon.png')} alt='Trade and save'/>
												Trade in and save up to $250</span>
											</div>
									  </div>
								</div>

						</div>
					</div>
			
					{/* ------------------ PROCEED PAGE --------------- */}

					<div className='row'>
						<div className='proceed_page col-12'>
							<div className='row justify-content-center'>
								<div className='finish_order_div col-12'>
									<div className='row justify-content-center'>
										<div className='finish_order_msg col-11 col-sm-10 col-md-8 col-lg-6 col-xl-6'>
											<div className='row justify-content-center'>
												<div className='wrap_finish_order_msg'>
													<p>Thank you for purchasing from our store.</p>
													<p>You will receive a confirmation email soon.</p>
													<p>You will be redirected to the main page in <span>5 seconds</span>.</p>
														<div className='row justify-content-center'>
															<div className="finish_order_rign"><div></div><div></div><div></div><div></div></div>
														</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						    <div className='row justify-content-center'>
								 	
								 	<div className='proceed_first_half m-0 p-0 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
								 		<div className='row'>
											<span className='back_to_buy_page' onClick={() => this.returnToBuyPage()}>Return to buy page</span>
										</div>
							 
								 	{/* ------------- DEV IMG AND INFO ------------ */}

								 		<div className='row justify-content-center'>
											<div className='proceed_dev_img col-11 col-sm-8 col-md-6 col-lg-9 col-xl-7'>
												<div className='row justify-content-center'>
													<img src={this.state.main_img_one[0]} alt=''/>
												</div>
											</div>
										</div>

										<div className='row justify-content-center'>
											<div className='proceed_info_device col-11'>
												<div className='row'>
													<p className='proceed_sel_info col-9'>
														<span className='row'>
															<p>
															<span>{this.state.main_device_name}</span> - 
															<span>{this.state.selectedCapacity}</span> - 
															<span>{this.state.selectedColor}</span>
															</p>
														</span>
														<span className='est_time_del row mt-2'>
														<img src={require('../images/free_shipp_icon.png')} alt='Free shipping'/>
															Estimated delivery time - 3-5 days
														</span>
													</p>
													<p className='col-3'>${this.state.main_price}</p>
												</div>
											</div>
										</div>
									 	
								 		<div className='row justify-content-center'>
											<div className='order_summ_device col-11'>
												<span className='proceed_subtitle'>Order Summary</span>
												<p className='subtotal_sum order_subtotal'>
														<span>Subtotal</span>
														<span>${this.state.main_price}</span>
												</p>
												<p className='order_subtotal'>
														<span>Estimated tax</span>
														<span>$0.00</span>
												</p>
												<p className='ship_tax order_subtotal'>
														<span>Shipping tax</span>
														<span>Free</span>
												</p>
												<p className='order_subtotal'>
														<span>Total</span>
														<span className='total_price_sum'>${this.state.main_price}</span>
												</p>
											</div>
										</div>

								 	</div>
								<div className='proceed_sec_half  col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>

												<div className='row'>
													<p className='checkout_txt'>CHECKOUT (1 ITEM(S))</p>
												</div>

												<div className='row'>
													<p className='please_fill col-12'>Hello, please check your order details.</p>
												</div>

												<div className='row justify-content-center'>
													<div className='delivery_option col-11'>
														<p className='proceed_subtitle'>DELIVERY OPTION</p>
														<p className='how_uulo'>How would you like to get your order?</p>
													 
														 <div className="form">
														  <input type="radio"  className='haveit_del_checkbox' onChange={(e) => this.haveitDeliveredCheckbox(e)} style={defoz} value="option1" defaultChecked></input>
																 <b className='hit_del'>Have it delivered</b> 
														 </div>

														 <div className="form form_two">
															<input  onChange={(e) => this.pickitUpCheckbox(e)} type="radio" style={defoz} className='forminput_piu pickit_up_checkbox' value="option1"></input>
															<b className='hit_del'>Pick it up</b>
														</div>
													</div>
												</div>
											
												<div className='row justify-content-center'>
													<div className='input_info_div col-11'>
														<div className='row'>
															<div className='find_nearest_store_div col-12'>
																	<div className='row justify-content-center'>
																			<p>Find the nearest store</p>
																	</div>
																	<div className='row justify-content-center'>				
																			<a href='https://www.google.com/maps'>
																			<p>Open Google Maps</p>
																			</a>	
																	</div>
															</div>
														</div>

														<div className='row'>
															<div className='wrap_inputs'>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='First name'></input>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='Last name'></input>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text'  autocomplete='off' placeholder='Address Line 1'></input>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text'  autocomplete='off' placeholder='Address Line 2'></input>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text'  autocomplete='off' placeholder='City'></input>
																	<span>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text'  autocomplete='off' placeholder='State'></input>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text'  autocomplete='off' placeholder='Zip Code'></input>
																	</span>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text'  autocomplete='off' placeholder='Email'></input>
																	<input className='info_address_input' onChange={() => this.checkValdInputs()} type='text'  autocomplete='off' placeholder='Phone Number'></input>
															</div>
														</div>
													</div>
												</div>
											


													{/* -------------- PAYMENT INFO ADDRESS DIV -------------- */}

													<div className='row justify-content-center'>
														<div className='payment_info_div col-11'>
															<div className='row'>
																<p className='proceed_subtitle'>PAYMENT INFORMATION</p>
															</div>
															<div className='row creditcard_div'>
																<div className="form col-12">
													 				 <input className='creditcard_checkbox' type="checkbox" onClick={(e) => this.checkCreditCardBox(e)} style={defoz} defaultChecked></input>
																		 <b className='pay_b_cred'>CREDIT CARD</b>
																</div>
																 <span className='credit_card_img'></span>
															</div>
															<div className='row'>
																<div className="form paypal_div col-12">
													 				 <input className='paypal_checkbox' type="checkbox"  onClick={(e) => this.checkPaypalBox(e)} style={defoz}></input>
																		 <b className='pay_b_cred'>PAYPAL</b>
																</div>
																 <span className='paypal_img'></span>
															</div>
														</div>
													</div>


													{/* -------------- CARD DETAILS DIV -------------- */}

														<div className='row justify-content-center'>
															<div className='paypal_image_div col-11'>
																<a href='https://www.paypal.com/us/webapps/mpp/home'>
																<img src={require('../images/checkout_paypal.png')} alt=''/>
																</a>
															</div>
															
															<div className='card_details_div col-11'>
																<div className='row'>
																	<p className='proceed_subtitle'>CARD DETAILS</p>
																</div>
																<div className='row'>
																	<div className='card_details_input_div col-11'>
																		<input className='card_details_input' onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='Card number'></input>
																		<span>
																			<input className='card_details_input' onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='Exp.Date (MM/YY)'></input>
																			<input className='card_details_input' onChange={() => this.checkValdInputs()} type='password' autocomplete='off' placeholder='Security code'></input>
																		</span>
																	</div>
																</div>
															</div>
														</div>
														

														{/* -------------- BILLING INFO DIV -------------- */}

														<div className='row justify-content-center'>
															<div className='billing_info_div col-11'>
																<div className='row'>
																	<p className='proceed_subtitle'>BILLING ADDRESS</p>
																</div>

																<div className='row'>
																	<div className='billing_info_div_inputs'>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text' placeholder='First name'></input>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='Last name'></input>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text'  autocomplete='off'placeholder='Address Line 1'></input>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text'  autocomplete='off'placeholder='Address Line 2'></input>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='City'></input>
																		<span>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='State'></input>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='Zip Code'></input>
																		</span>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='Email'></input>
																		<input className='billing_info_input'  onChange={() => this.checkValdInputs()} type='text' autocomplete='off' placeholder='Phone Number'></input>
																	</div>
																</div>
															</div>
														</div>

														{/* ----------- SAVE THIS CARD CHECKBOX ------------- */}


														<div className='row'>
															<div className="form save_this_card_div col-12">
													 				 <input type="checkbox" style={defoz} value="option1"></input>
																		 	<b className='save_this_card'>Save this card</b>	 
															</div>
														</div>		

														{/* ----------- AGREE CHECKBOX ------------- */}

														<div className='row'>
															<div className="form agree_div col-12">
													 				 <input className='check_agree_box' onChange={(e) => this.agreeCheckbox(e)} type="checkbox" style={defoz}></input>
																	<b className='agree_text'>I agree to the <i>Terms of Sale</i> and the <i>Privacy Policy</i>.</b>
															</div>
														</div>																			


														{/* ----------- PLACE ORDER BUTTON ------------- */}

														<div className='row justify-content-center'>
															<div className='place_order_button col-6' onClick={() => this.placeOrder()}>PLACE ORDER</div>
														</div>				

								</div>
							</div>
						</div>
					</div>
				</div>
		 
				<div className='footer_class  col-12'><Footer /></div>

			</div>
		</div>

		)
	}
}

export default Buy;