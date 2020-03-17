$(document).ready(function(){
    emulSelection();

    function decide_legend() { // Which one should be displayed
		$('#IranMap #legend li').hide();  // hide legend
   	        var NumColors = $("#IranMap  #NumColors").val();

			switch(NumColors){  // show corresponding legends
				case "2":
				            sessionStorage.setItem("NumColors", "2");
					    
                                            $('#IranMap #legend li:nth-child(1)').show();
					    $('#IranMap #legend li:nth-child(1) span').css("background-color", "#FC6600");
					    $('#IranMap #legend li:nth-child(1)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
                                            });

					    
                                            $('#IranMap #legend li:nth-child(2)').show();
					    $('#IranMap #legend li:nth-child(2) span').css("background-color", "#FCD12A");
					    $('#IranMap #legend li:nth-child(2)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'کمتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });	
				break;
				
				case "3":
					    sessionStorage.setItem("NumColors", "3");

					    $('#IranMap #legend li:nth-child(1)').show();
					    $('#IranMap #legend li:nth-child(1) span').css("background-color", "#C21807");
					    $('#IranMap #legend li:nth-child(1)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از دو برابر میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });
						
					    $('#IranMap #legend li:nth-child(2)').show();
					    $('#IranMap #legend li:nth-child(2) span').css("background-color", "#FC6600");
					    $('#IranMap #legend li:nth-child(2)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(3)').show();
					    $('#IranMap #legend li:nth-child(3) span').css("background-color", "#FCD12A");
					    $('#IranMap #legend li:nth-child(3)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'کمتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });						
				break;

				case "4":
					    sessionStorage.setItem("NumColors", "4");

					    $('#IranMap #legend li:nth-child(1)').show();
					    $('#IranMap #legend li:nth-child(1) span').css("background-color", "#7C0A02");
					    $('#IranMap #legend li:nth-child(1)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از دو برابر میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });
						
					    $('#IranMap #legend li:nth-child(2)').show();
					    $('#IranMap #legend li:nth-child(2) span').css("background-color", "#CD5C5C");
					    $('#IranMap #legend li:nth-child(2)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(3)').show();
					    $('#IranMap #legend li:nth-child(3) span').css("background-color", "#FC6600");
					    $('#IranMap #legend li:nth-child(3)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از نصف میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(4)').show();
					    $('#IranMap #legend li:nth-child(4) span').css("background-color", "#FCD12A");
					    $('#IranMap #legend li:nth-child(4)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'کمتر از نصف میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });							
				break;
				
				case "5":
					    sessionStorage.setItem("NumColors", "5");

					    $('#IranMap #legend li:nth-child(1)').show();
					    $('#IranMap #legend li:nth-child(1) span').css("background-color", "#C21807");
			                    $('#IranMap #legend li:nth-child(1)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از دو برابر میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });
						
					    $('#IranMap #legend li:nth-child(2)').show();
					    $('#IranMap #legend li:nth-child(2) span').css("background-color", "#CD5C5C");
					    $('#IranMap #legend li:nth-child(2)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(3)').show();
					    $('#IranMap #legend li:nth-child(3) span').css("background-color", "#FC6600");
					    $('#IranMap #legend li:nth-child(3)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از سه چهارم میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(4)').show();
					    $('#IranMap #legend li:nth-child(4) span').css("background-color", "#FCD12A");
					    $('#IranMap #legend li:nth-child(4)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از نصف میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(5)').show();
					    $('#IranMap #legend li:nth-child(5) span').css("background-color", "#FCF4A3");
					    $('#IranMap #legend li:nth-child(5)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'کمتر از نصف میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });						
				break;
				
				case "6":
					    sessionStorage.setItem("NumColors", "6");

					    $('#IranMap #legend li:nth-child(1)').show();
					    $('#IranMap #legend li:nth-child(1) span').css("background-color", "#7C0A02");
                                            $('#IranMap #legend li:nth-child(1)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از دو برابر میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });
						
					    $('#IranMap #legend li:nth-child(2)').show();
					    $('#IranMap #legend li:nth-child(2) span').css("background-color", "#C21807");
					    $('#IranMap #legend li:nth-child(2)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(3)').show();
					    $('#IranMap #legend li:nth-child(3) span').css("background-color", "#CD5C5C");
					    $('#IranMap #legend li:nth-child(3)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از سه چهارم میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(4)').show();
					    $('#IranMap #legend li:nth-child(4) span').css("background-color", "#FC6600");
					    $('#IranMap #legend li:nth-child(4)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از نصف میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(5)').show();
					    $('#IranMap #legend li:nth-child(5) span').css("background-color", "#FDA50F");
					    $('#IranMap #legend li:nth-child(5)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از یک چهارم میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(6)').show();
					    $('#IranMap #legend li:nth-child(6) span').css("background-color", "#FCD12A");
					    $('#IranMap #legend li:nth-child(6)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'کمتر از یک چهارم میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });						
				break;

				case "7":
					    sessionStorage.setItem("NumColors", "7");
					    $('#IranMap #legend li').show();

					    $('#IranMap #legend li:nth-child(1) span').css("background-color", "#7C0A02");
                                            $('#IranMap #legend li:nth-child(1)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از سه برابر میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(2) span').css("background-color", "#C21807");
                                            $('#IranMap #legend li:nth-child(2)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از دو برابر میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });
						
					    $('#IranMap #legend li:nth-child(3) span').css("background-color", "#CD5C5C");
					    $('#IranMap #legend li:nth-child(3)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(4) span').css("background-color", "#FC6600");
					    $('#IranMap #legend li:nth-child(4)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از سه چهارم میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(5) span').css("background-color", "#FDA50F");
					    $('#IranMap #legend li:nth-child(5)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از نصف میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(6) span').css("background-color", "#FCD12A");
					    $('#IranMap #legend li:nth-child(6)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'بیشتر از یک چهارم میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });

					    $('#IranMap #legend li:nth-child(7) span').css("background-color", "#FCF4A3");
					    $('#IranMap #legend li:nth-child(7)').hover(function() {
						$(this).css('cursor','pointer').attr('title', 'کمتر از یک چهارم میانگین');
						}, function() {
						$(this).css('cursor','auto');
					    });						

				break;				
			}		
	}
	
	$("#IranMap  #NumColors").change(function(){
		decide_legend();
		load_JSON(sessionStorage.getItem("fileName"));
	});

		
	$('#IranMap #selection_dropdowns').change(function() {  // Change on dropdown menu
			  var selectedItemQuantity = $("#Quantity select").children("option:selected").val();
			  var selectedItemQuantityType = $("#Quantity_Type select").children("option:selected").val();
			  var selectedItemYear = $("#Year select").children("option:selected").val();
			  var selectedItemMonth = $("#Month select").children("option:selected").val();
			  
			  var pathPrefix = "./JSON_Files/";
			  var fileName;
			  var mapType;

			  if (window.sessionStorage) { // save the selected values into session storage
			   sessionStorage.setItem("dropsel_quantity", selectedItemQuantity);
			   sessionStorage.setItem("dropsel_quantity_type", selectedItemQuantityType);
			   sessionStorage.setItem("dropsel_year", selectedItemYear);
			   sessionStorage.setItem("dropsel_month", selectedItemMonth);	
                           mapType = sessionStorage.getItem("map_type");			   
			  }
					
			  switch(selectedItemQuantity) {
				case "popu":
					fileName = pathPrefix + mapType + "_" + selectedItemQuantity + ".json";
					$("#Quantity_Type").hide();		   
					$("#Year").hide();
					$("#Month").hide();					
					break;
					  
				case "AMNT":
				case "CNT":
				case "TERM":
					fileName = pathPrefix + selectedItemYear + "_" + selectedItemMonth + "_" + mapType + "_" + selectedItemQuantity + "_" + selectedItemQuantityType + ".json";
					$("#Quantity_Type").show();
					$("#Year").show();
					$("#Month").show();
					break;
					
				case "amount": 
				case "trans":
				case "term":
					fileName = pathPrefix + mapType + "_" + selectedItemQuantity + "_" + selectedItemQuantityType + ".json";			  
					$("#Quantity_Type").show();
					$("#Year").hide();
					$("#Month").hide();
			  }
			  
			  sessionStorage.setItem("fileName", fileName);				  
			  load_JSON(fileName); 		
		});	



function emulSelection() {   // When refreshing the page or loading a new html, calling this function emulates selection of an option in dropdown menu	
	       var selectedItemQuantity = sessionStorage.getItem("dropsel_quantity");
	       var selectedItemQuantityType = sessionStorage.getItem("dropsel_quantity_type");		   
	       var selectedItemYear = sessionStorage.getItem("dropsel_year");
	       var selectedItemMonth = sessionStorage.getItem("dropsel_month");
	       var mapType = sessionStorage.getItem("map_type");			   

	       var pathPrefix = "./JSON_Files/";
	       var fileName;

	       if(selectedItemQuantity) {		// Keys are in the session storage   
			   
			 switch(selectedItemQuantity) {
				case "popu":
					fileName = pathPrefix + mapType + "_" + selectedItemQuantity + ".json";
					$("#Quantity_Type").hide();		   
					$("#Year").hide();
					$("#Month").hide();					
					break;
					  
				case "AMNT":
				case "CNT":
				case "TERM":
					fileName = pathPrefix + selectedItemYear + "_" + selectedItemMonth + "_" + mapType + "_" + selectedItemQuantity + "_" + selectedItemQuantityType + ".json";
					$("#Quantity_Type").show();
					$('#Quantity_Type select').val(selectedItemQuantityType);

					$("#Year").show();
					$('#Year select').val(selectedItemYear);

					$("#Month").show();
					$('#Month select').val(selectedItemMonth);

					break;
					
				case "amount": 
				case "trans":
				case "term":
					fileName = pathPrefix + mapType + "_" + selectedItemQuantity + "_" + selectedItemQuantityType + ".json";			  
					$("#Quantity_Type").show();
					$('#Quantity_Type select').val(selectedItemQuantityType);

					$("#Year").hide();
					$("#Month").hide();
			  }
			  
			  $('#Quantity select').val(selectedItemQuantity);

	       } else {     // Keys are not in the session storage
			   fileName = pathPrefix + "Prov_trans_All.json";
			   $('#Quantity select').val("trans");
			   $('#Quantity_Type select').val("All");
			   if (window.sessionStorage) {
				  sessionStorage.setItem("dropsel_quantity", "trans");
				  sessionStorage.setItem("dropsel_quantity_type", "All");
				  sessionStorage.setItem("map_type", "Prov");
			   }
		
			   $("#Year").hide();
			   $("#Month").hide();	
	       }
			 
		   if(!sessionStorage.getItem("NumColors")){
			   $("#IranMap #NumColors").val(7);
			   sessionStorage.setItem("NumColors", "7");
		   } 
		   else
			   $("#IranMap #NumColors").val(sessionStorage.getItem("NumColors"));

		   decide_legend();		   		   
		   sessionStorage.setItem("fileName", fileName);
		   load_JSON(fileName);
}

});
