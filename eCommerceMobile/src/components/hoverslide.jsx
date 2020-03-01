import React, {Component} from 'react';
import  '../css/navbar.css';
import '../scripts/script.js';



class HoverSlide extends Component {
	constructor(props) {
		super(props);

		}



	render() {
		return (
			<div>
				<div className='row justify-content-center'>
					<div id="wrapper" className="skewed">
						 <div className="layer second_bottom">
						      <div className="content-wrap">
							      <img src={require('../images/1.jpg')} alt=''/>
							        <div className="hovslid_cont_sec content-body">       
								       <h2 className='hovslid_sec_h2'>The phone that doesn’t just stand out, <label className='hovslid_gray_sec'>it stands apart.</label></h2>
								           <p className='hovslid_sec_subtxt'>
												Completely redesigned to remove interruptions from your view. 
												No notch, no distractions. Precise laser cutting, on-screen security, 
												and a Dynamic AMOLED.
								           </p>
						      		</div>
						    </div>
						 
						    <div className="layer second_top">
						        <div className="content-wrap">
						       		 <img src={require('../images/2.jpg')} alt=''/>
						        		<div className="hovslid_cont_first content-body">
						          			 <h2 className='hovslid_first_h2'>Rewrite the rules of <label className='hovslid_gray_first'>photography.</label></h2>
					          				 <p className='hovslid_first_subtxt'>Zoom in to explore the mystery of the celestial at night, watch an eagle 
					          					 hovering over trees or examine the delicate details of crystal. 
					        			     </p>
						            	</div>
						        </div>
						    </div>

 							<div className="handle"></div>
 						</div>
					 </div>
				</div>
			</div>
		)
	}
}

export default HoverSlide;