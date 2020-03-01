import hoverEffect from 'hover-effect';
import $           from 'jquery';



document.addEventListener('DOMContentLoaded', function(){

let backToTop = document.querySelector('.backToTop_button');

// Listener for back to top button
  // jquery solution
backToTop.addEventListener('click', function() {
   $('body,html').animate({
        scrollTop : 0                      
    }, 500);
});
 

  // ---------------------------------- MAIN PAGE ANIMATION PART --------------- //

    // ------- FIRST DIV ----------- //


    let hovslid_cont_first   = document.querySelector('.hovslid_cont_first'),
        hovslid_first_h2     = document.querySelector('.hovslid_first_h2'),
        hovslid_first_subtxt = document.querySelector('.hovslid_first_subtxt'),
        hovslid_cont_sec     = document.querySelector('.hovslid_cont_sec'),
        hovslid_sec_subtxt   = document.querySelector('.hovslid_sec_subtxt'),
        hovslid_sec_h2       = document.querySelector('.hovslid_sec_h2'),
        hovslid_gray_first   = document.querySelector('.hovslid_gray_first'),
        hovslid_gray_sec     = document.querySelector('.hovslid_gray_sec');

    setTimeout(function() {
          hovslid_cont_first.style.marginLeft = '0';
          hovslid_first_h2.style.opacity = '1';

          hovslid_cont_sec.style.marginRight = '0';
          hovslid_sec_h2.style.opacity = '1';
    },1000);

    setTimeout(function() {
         hovslid_first_subtxt.style.opacity = '1';
         hovslid_sec_subtxt.style.opacity = '1';
          
          hovslid_gray_first.style.color = '#5C5C5C';
          hovslid_gray_sec.style.color = '#5C5C5C';
    },2300);

         
  // Hover changing image effect for the fourth div image presentation
    new hoverEffect({
    parent:            document.querySelector('.mc_fourth_div_img'),
    intensity:         0.5,
    image1:            require('../images/s_photo_sample.jpg'),
    image2:            require('../images/s_photo_sample_two.jpg'),
    displacementImage: require('../images/trans.png')
  });



  // Animate half slide from the first div

  let wrapper  = document.getElementById('wrapper'),
      topLayer = wrapper.querySelector('.second_top'),
      handle   = wrapper.querySelector('.handle'),
      skew     = 0,
      delta    = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + 'px';
    topLayer.style.width= e.clientX + skew + delta + 'px';
  });


 document.addEventListener('scroll', function(e) {

    if(window.pageYOffset > 315) {

    // ------ SECOND DIV ------------ //
        let mdc_first_div = document.querySelector('.mdc_first'),
            mdc_first_h1  = document.querySelector('.mdc_first_h1'),
            mdc_first_h2  = document.querySelector('.mdc_first_h2'),
            mdc_first_p   = document.querySelector('.mdc_first_p');

           mdc_first_h1.style.opacity = '1';
           mdc_first_h1.style.paddingTop = '0';

           setTimeout(function() {
              mdc_first_h2.style.opacity = '1';
              mdc_first_h2.style.top = '70px';

              mdc_first_p.style.top = '90px';
              mdc_first_p.style.opacity = '1';
           },1000);
    }

     // ---------- THIRD DIV --------- //

       if(window.pageYOffset > 1790) {
           let mc_third_title = document.querySelector('.mc_third_title');
               mc_third_title.style.left = '10px';
       }

       if(window.pageYOffset > 2320) {
           let mc_third_first_p = document.querySelector('.mc_third_first_p'),
               mc_third_sec_p   = document.querySelector('.mc_third_sec_p');

               mc_third_first_p.style.opacity = '1';
            
              setTimeout(function(){
                  mc_third_sec_p.style.opacity = '1';
              },1000);
       }

      // --------- Fourth div ----------- //

       if(window.pageYOffset > 2536) {
          let mc_fourth_h1  = document.querySelector('.mc_fourth_h1'),
              mc_fourth_img = document.querySelector('.mc_fourth_div_img');

              mc_fourth_h1.style.opacity = '1';
              mc_fourth_h1.style.marginTop = '0';
            
              setTimeout(function() {
                 mc_fourth_img.setAttribute('style', 'transform: scale(1);');
              },1000);
        }
        
           if(window.pageYOffset > 3239) {
              let mc_fourth_descr_div = document.querySelector('.mc_fourth_descr_div');
                  mc_fourth_descr_div.style.opacity ='1';
                  mc_fourth_descr_div.style.marginLeft ='0';
          }


      // -------- Fifth div --------- //

         if(window.pageYOffset > 3537) {
             let mc_fifth_h1      = document.querySelector('.mc_fifth_h1'),
                 mc_fifth_first_p = document.querySelector('.mc_fifth_first_p'),
                 vidd             = document.querySelector('.vidd');

                mc_fifth_h1.style.marginTop = '0';
                vidd.style.opacity = '1';
                vidd.style.top = '80px';
                mc_fifth_h1.style.opacity = '1';

                setTimeout(function() {
                      mc_fifth_first_p.style.opacity = '1';
                },200);
           }

           if(window.pageYOffset > 4012) {
              let mc_sixth_h1 = document.querySelector('.mc_sixth_h1'),
                  all_devices_img = document.querySelector('.all_devices_img');
              
                  mc_sixth_h1.style.right = '50px';
                  mc_sixth_h1.style.opacity = '1';
                  all_devices_img.style.opacity = '1';
           }
           if(window.pageYOffset > 4435) {
               let mc_sixth_p = document.querySelector('.mc_sixth_p');
                   mc_sixth_p.style.opacity = '1';
                   mc_sixth_p.style.left = '10px';
           }


      // ------ Seventh div ---------- //

         let mc_sev_h1_span = document.querySelector('.mc_sev_h1_span'),
             mc_sev_h3_b    = document.querySelector('.mc_sev_h3_b');

              if(window.pageYOffset > 4864) {
                    mc_sev_h1_span.style.opacity = '1';
              }

      // ------ Eighth div ------- //

         let mc_eighth_h1           = document.querySelector('.mc_eighth_h1'),
             mc_eighth_waterresi_img = document.querySelector('.mc_eighth_waterresi_img'),
             mc_eighth_h2            = document.querySelector('.mc_eighth_h2'),
             mc_eighth_p             = document.querySelector('.mc_eighth_p');


         if(window.pageYOffset > 5709) {

            mc_eighth_h1.style.opacity = '1';
            mc_eighth_h1.style.marginTop = '0';

            setTimeout(function() {
              mc_eighth_waterresi_img.style.opacity = '1';
            },200);
         }

          if(window.pageYOffset > 6072) {
                mc_eighth_h2.style.marginLeft = '10px';
                mc_eighth_h2.style.opacity = '1';

                   setTimeout(function() {
              mc_eighth_p.style.opacity = '1';
            },300);
          }

      // ----- Ninth div ---- //

      let mc_ninth_h1_poin     = document.querySelector('.mc_ninth_h1_poin'),
          mc_ninth_h1_point    = document.querySelector('.mc_ninth_h1_point'),
          mc_ninth_sutng       = document.querySelector('.mc_ninth_sutng'),
          mc_ninth_sutng_descr = document.querySelector('.mc_ninth_sutng_descr');


      if(window.pageYOffset > 6427) {
          mc_ninth_h1_point.style.opacity = '1';
          mc_ninth_h1_point.style.marginLeft = '0';

           setTimeout(function() {
             mc_ninth_h1_poin.style.color = '#F63535';
           },1000);
      } 

      if(window.pageYOffset > 7348) {
            mc_ninth_sutng.style.opacity = '1';
            mc_ninth_sutng.style.marginTop = '0';

            setTimeout(function() {
              mc_ninth_sutng_descr.style.opacity = '1';
            },300);
        }


            // Animate 'Three cameras' section photo 
     let lens_img_img = document.querySelector('.lens_img_img');
     let lens_img_div = document.querySelector('.lens_img_div');

        // Main page, second div. 
       // Animate to right image while scrolling
     let imgLeftValue = 0;

     if(window.pageYOffset > 150) {
        imgLeftValue += 20;
        lens_img_div.style.backgroundSize = '100% 50%';
        lens_img_img.style.left = imgLeftValue + 'px';
     } else if(window.pageYOffset <= 200) {
       imgLeftValue = 0;
        lens_img_img.style.left = imgLeftValue + 'px';
     } 


       // Main page, second div.
      // Animate up/down text while scrolling
    let msec_p_design = document.querySelector('.msec_p_design');
    let msec_p_zoom = document.querySelector('.msec_p_zoom');
    let msec_p_motion = document.querySelector('.msec_p_motion');

  
     // Second div moving while scrolling text animation
     if(window.scrollY > 300) {
        if(window.innerWidth > 854) {
           msec_p_design.style.top     = Math.max(330 - 0.45*window.scrollY) +'px';
           msec_p_design.style.opacity = Math.max(1 * window.scrollY);
           msec_p_zoom.style.bottom    = Math.max(450 - 0.35*window.scrollY) +'px';
           msec_p_motion.style.top     = Math.max(330 - 0.45*window.scrollY) +'px';
     } else {
           msec_p_design.style.top  = Math.max(430 - 0.45*window.scrollY) +'px';
           msec_p_zoom.style.bottom = Math.max(450 - 0.50*window.scrollY) +'px';
           msec_p_motion.style.top  = Math.max(430 - 0.50*window.scrollY) +'px';
       } 
     }
  });
});