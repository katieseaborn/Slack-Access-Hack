$(document).ready(function(){
	
	var acc_spd = 200;
	
	console.log('[Acc] Starts');
	
	var acc_blink_inter = setInterval(function(){ 
		
		if ( $('body').hasClass('p-ia4_body') ) {
			
			console.log('[Acc] Blink');
		
			var acc_dark_inter = setInterval(function(){ 
				console.log('[Acc]', 'Checking dark mode');
				
				if ( ! $('body').hasClass('acc_darkened') ) {
					
					$('body').addClass('acc_darkened sk-client-theme--dark').removeClass('p-body--chrome-inverted');
					
					$('.p-ia4_top_nav').removeClass('sk-client-theme--light-inverted-sidebar');
					
					$('.ReactModal__Overlay').removeClass('p-prefs_dialog--light').addClass('p-prefs_dialog--dark');

					clearInterval(acc_dark_inter);
				}
			}, acc_spd);
		
			clearInterval(acc_blink_inter);
		}
	}, acc_spd);
	

	
	/************** Sidebar */
	
	var acc_sb_btn = document.createElement("button");
  acc_sb_btn.innerHTML = ">>";
  acc_sb_btn.className = 'acc_sb_btn';
  acc_sb_btn.id = 'acc_sb_btn';
  
  $(acc_sb_btn).on('click', function() {
  	
  	var $this = $(this);
  	
  	if ( ! $this.hasClass('acc_open') ) {
  		
  		console.log('[Acc] Open sidebar');
  		
  		$this.addClass('acc_open').text('<<');
  		
  		$('.p-ia4_client .p-client_workspace__layout').addClass('acc_swingout');
  		
  	} else {
  		
  		console.log('[Acc] Close sidebar');
  		
  		$this.removeClass('acc_open').text('>>');
  		
  		$('.p-ia4_client .p-client_workspace__layout').removeClass('acc_swingout');
  	}
  });
  
  // Add sidebar button
  var acc_sb_btn_inter = setInterval(function(){ 
		
		if ( $('.p-ia4_channel_list').length != 0 ) {
			
			console.log('[Acc] Adding sidebar button');
			
		  if ( ! $('.p-ia4_channel_list').hasClass('acc_sb_btn_inter') ) {
		  	
			  $(acc_sb_btn).prependTo('.p-ia4_channel_list');
			  
			  $('.p-ia4_channel_list').addClass('acc_sb_btn_inter');
		  
		  	clearInterval(acc_sb_btn_inter);
			}
		}
	}, acc_spd);


	
	/************** Channel tab bar */
	var acc_channel_inter = setInterval(function(){
		
		console.log('[Acc]', 'Checking channel tab bar');
		
		// if ( ! $('.channel_tab_bar__HY3uU').hasClass('acc_moved') ) {
		if ( $('.channel_tab_bar__HY3uU').length != 0 && ! $('.channel_tab_bar__HY3uU').hasClass('acc_moved') ) {
			
			console.log('[Acc]', 'Moving channel tab bar');
		
			$('.channel_tab_bar__HY3uU').addClass('acc_moved').detach().insertAfter('.p-view_header__big_button--channel');
			
			clearInterval(acc_channel_inter);
		}
		
	}, acc_spd*4);

	
});