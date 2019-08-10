function sortTable(n) {

    function strcmp(s1,s2) {//Due to differences between order of Arabic and Persian alphabet in HTML code table, there is a need for remapping character codes and rewrite a customized strcmp
        var Alpha_Dict = {"1570":0, "1575":5, "1576":10, "1662":15, "1578":20, "1579":25, "1580":30, "1670":35, "1581":40, "1582":45, "1583":50, "1584":55, "1585":60, "1586":65, "1688":70, "1587":75, "1588":80, "1589":85, "1590":90, "1591":95, "1592":100, "1593":105, "1594":110, "1601":115, "1602":120, "1705":125, "1711":130, "1604":135, "1605":140, "1606":145, "1608":150, "1607":155, "1610":160, "1740":160};
	 // {"آ","ا","ب","پ","ت","ث","ج","چ","ح","خ","د","ذ","ر","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ه","ی"}
     // https://www.key-shortcut.com/en/writing-systems/%EF%BA%95%EF%BA%8F%D8%A2-arabic-alphabet/
	 
        max_length = Math.max(s1.length, s2.length);
  
        for (var i = 0; i < max_length; i++){
	  
	       if(i == s1.length || i == s2.length){
		      if(s1.length == s2.length){
	            return 0;  
		      }
		      else if(s1.length > s2.length){
		        return 1;
		      }
		      else {
                return -1; 
		      }
	        }
	  
	  
            if( Alpha_Dict[s1.charCodeAt(i)] > Alpha_Dict[s2.charCodeAt(i)] ){
		        return 1;
	        }
	        else if( Alpha_Dict[s1.charCodeAt(i)] < Alpha_Dict[s2.charCodeAt(i)] ){
               return -1;  
	        }
        }	
    }


  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("items_list").querySelector("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "desc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;

    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 2; i < (rows.length-4); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
			  
	  if (n == 0) {  // Sort first column (Province name)
		  prov_A = x.getElementsByTagName("A")[0].innerHTML.toLowerCase();
	      prov_B = y.getElementsByTagName("A")[0].innerHTML.toLowerCase();

		  if (dir == "asc") {
			if (strcmp(prov_A,prov_B) == 1) {
			  // If so, mark as a switch and break the loop:
			  shouldSwitch = true;
			  break;
			}
		  } else if (dir == "desc") { 
			if (strcmp(prov_A,prov_B) == -1) {
			  // If so, mark as a switch and break the loop:
			  shouldSwitch = true;
			  break;
			}
		  }
	  } else if (n == 1) {	// Sort second column (Quantity)
		  
		  if (dir == "asc") {
			if (Number(x.innerHTML.replace(/,/g, '')) > Number(y.innerHTML.replace(/,/g, ''))) {
			  // If so, mark as a switch and break the loop:
			  shouldSwitch = true;
			  break;
			}
		  } else if (dir == "desc") {
			if (Number(x.innerHTML.replace(/,/g, '')) < Number(y.innerHTML.replace(/,/g, ''))) {
			  // If so, mark as a switch and break the loop:
			  shouldSwitch = true;
			  break;
			}
		  }
	  }
    }
	
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "desc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "desc") {
        dir = "asc";
        switching = true;
      }
    }
  }
  
  var count = 0;
  var colors = {"white":"grey", "grey":"white"};
  var next_color = "white";
  var counter = 1;

	  
  $('#items_list table tr').each(function() {  // redo background colors (white, grey) for table after sorting
	    
	      var classes_string = $(this).attr('class'); 
	      if(!!classes_string && classes_string != "TB_header"){
	         var cur_color = classes_string.split(' ')[1];
	         if(count == 0) {
		        count++;
		     }
		     else if(count == 1){
			    next_color = colors[next_color];
			    count = 0;
		     }
		  
		     $(this).attr('class', classes_string.replace(cur_color, next_color));
			 $(this).find('span').text( counter + "- ");
			 counter++;
		  }  
   });
}