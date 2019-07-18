$(document).ready(function(){
	dropdown_handler();
    emulSelection();
});

	function dropdown_handler() {
		
		$('#IranMap #selection_dropdowns').change(function() {  // Change on dropdown menu
			  var selectedItemQuantity = $("#Quantity select").children("option:selected").val();
			  var selectedItemQuantityType = $("#Quantity_Type select").children("option:selected").val();
			  var selectedItemYear = $("#Year select").children("option:selected").val();
			  var selectedItemMonth = $("#Month select").children("option:selected").val();
			  
			  var pathPrefix = "./JSON_Files/";
			  var fileName;
			  var mapType;

			  if (window.sessionStorage) {
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
			  
			  load_JSON(fileName); 		
		});
	}
	



function emulSelection() {   // When refreshing the page, calling this function emulates selection of an option in dropdown menu	
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
			 
		   load_JSON(fileName);
}