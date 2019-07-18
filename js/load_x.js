function load_JSON(fname_JSON) {
	$.getJSON(fname_JSON) // Colorize map based on data from JSON file
	    .done(function(data) {
	         $('#IranMap #date td:nth-child(2)').text(data["Date"]);
	         $('#IranMap table .TB_header th:nth-child(2) span').text(data["Quantity_Type"]);
	         var prov_name = $('#prov_name').attr("data-province-name");
	         var AVG_Key = "AVG";
			 var Total_Key = "Total";
			 
			 if(prov_name){
		          AVG_Key = prov_name + "AVG";
				  Total_Key = prov_name + "Total";
			 }
			   
      	     var AVG = data[AVG_Key];
			 $('#IranMap #total td:nth-child(2)').text((data[Total_Key]).replace(/\B(?=(\d{3})+(?!\d))/g, ","));		 

	         $('#IranMap #JSON_Load_Alert p').hide();
              
		 var Dictionary;
		 if(data["Dict"])
		     Dictionary = data["Dict"];
		 else
		     Dictionary = "Dict1";  // Use default dictionary
			  
     		 var Dict_Path;
	         if(fname_JSON.includes('Counties'))
		     Dict_Path = "./js/dicts/Counties_" + Dictionary + ".js";
	         else
		     Dict_Path = "./js/dicts/Prov_" + Dictionary + ".js";
			 
	         $.getScript(Dict_Path)   // Get corresponding dictionary file in order to map JSON file names to names inside html files 
                        .done(function() {  
			      $('#IranMap table tbody tr').each(function() {
				  var classes_string = $(this).attr('class'); 
				  if(!!classes_string)
				  var className = classes_string.split(' ')[0];
						
				  var mappedClassName = items_map[className];
				  var val = data[mappedClassName];
						
				  if(val) {		
					if(parseInt(val) > parseInt(AVG)*2/3)
						$('#IranMap svg .' + className).css({fill:"#dc181c"});  // red
					else if(parseInt(val) > parseInt(AVG)/3)
						$('#IranMap svg .' + className).css({fill:"#ea6520"});  // orange
					else
						$('#IranMap svg .' + className).css({fill:"#f7b432"});  // yellow
						
					var thousands_commas = val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					$('#IranMap table .' + className + ' td:nth-child(2)').text(thousands_commas);
				  }
			      });
                  sortTable(1);				  
			})
				
			.fail(function(jqxhr, textStatus, error) {
				console.log("Dictinary: "+ Dict_Path +" not found or not with a correct js format!!!");
				console.log(textStatus + " " + error);
	                        $('#IranMap #JSON_Load_Alert p').show();
                                $('#IranMap #JSON_Load_Alert p').text("دیکشنری مناسب یافت نشد.");
                                $('#IranMap g:nth-child(1) path').css({ fill: "white" });  
                                $('#IranMap table td:nth-child(2)').text("");
                                $('#IranMap table th:nth-child(2) span').text("");
                        });
 		 })
          
     	    .fail(function(jqxhr, textStatus, error) {
	       console.log("JSON File: "+ fname_JSON +" not found or not with a correct JSON format!!!");	
	       console.log(textStatus + " " + error);
	       $('#IranMap #JSON_Load_Alert p').show();
               $('#IranMap #JSON_Load_Alert p').text("داده ای یافت نشد.");
               $('#IranMap g:nth-child(1) path').css({ fill: "white" });  
               $('#IranMap table td:nth-child(2)').text("");
               $('#IranMap table th:nth-child(2) span').text("");
            });		
};


function load_HTML(fname_HTML) {					
					
	$("#IranMap").load(fname_HTML, function() { 
		$.getScript("./js/hover_x.js");  // Both county and main map need the script
		$.getScript("./js/sort_table.js"); // Both county and main map need the script
		$.getScript("./js/DropdownSel.js"); // Both county and main map need the script

			
		if(fname_HTML.includes("iranmap")) {   
		    sessionStorage.setItem("map_type", "Prov");        // HTML loads with main map content
		} else {                              
		    sessionStorage.setItem("map_type", "Counties");   // HTML loads with county map content
		}
		
		emulSelection();
	});
}
