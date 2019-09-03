$('#IranMap #export').click(function(e) {
	
  e.preventDefault();	
  var titles = [];
  var data = [];

  /*
   * Get the table headers, this will be CSV headers
   * The count of headers will be CSV string separator
   */
  $('#IranMap table tr:eq(1) th').each(function() {
    titles.push($(this).text());
  });

  /*
   * Get the actual data, this will contain all the data, in 1 array
   */
  $('#IranMap table td').each(function() {
	  if ($(this).find("a").length != 0)
		 data.push($(this).find("a").text());
	  else
         data.push($(this).text());
  });
  
  /*
   * Convert our data to CSV string
   */
  var CSVString = prepCSVRow(titles, titles.length, '');
  CSVString = prepCSVRow(data, titles.length, CSVString);

  /*
   * Make CSV downloadable
   */
  var downloadLink = document.createElement("a");
  var blob = new Blob([CSVString]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "data.csv";

  /*
   * Actually download CSV
   */

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

   /*
* Convert data array to CSV string
* @param arr {Array} - the actual data
* @param columnCount {Number} - the amount to split the data into columns
* @param initial {String} - initial string to append to CSV string
* return {String} - ready CSV string
*/
function prepCSVRow(arr, columnCount, initial) {
  var row = ''; // this will hold data
  var delimeter = ','; // data slice separator, in excel it's `;`, in usual CSv it's `,`
  var newLine = '\r\n'; // newline separator for CSV row

  arr.forEach(function(arrItem, idx) {
      row += '"' + arrItem + '"' + ((idx+1)%columnCount == 0 ? newLine : delimeter);
  });

  return initial + row;
}
