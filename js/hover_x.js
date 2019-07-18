$(function() {
		
    $('#IranMap svg g:nth-child(1) path').hover(function() {  // Hover on map
        var className = $(this).attr('class');

        $('#IranMap table .' + className).addClass('hover');
		var item_name = $('#IranMap table .' + className + ' td:nth-child(1)').text();
		var item_quant = $('#IranMap table .' + className + ' td:nth-child(2)').text();
				
        $('#IranMap #show-title').html(item_name + "</br>" + item_quant).css({'display': 'block'});
     
    }, function() {
		var className = $(this).attr('class');

        $('#IranMap table .' + className).removeClass('hover');
        $('#IranMap #show-title').html('').css({'display': 'none'});
    });

    $('#IranMap table tr').hover(function() {  // Hover on table
		var classes_string = $(this).attr('class'); 
	      if(!!classes_string)
              var className = classes_string.split(' ')[0];
        var object = '#IranMap svg g:nth-child(1) .' + className;
        $(object).attr('class', className + ' hover');
    }, function() {
		var classes_string = $(this).attr('class'); 
	      if(!!classes_string)
               var className = classes_string.split(' ')[0];
        var object = '#IranMap svg g:nth-child(1) .' + className;
        var currentClass = $(object).attr('class');
		if(currentClass)
            $(object).attr('class', currentClass.replace(' hover', ''));
    });

    $('#IranMap g:nth-child(1)').mousemove(function(e) {  // Tooltip on map
        var posx = 0;
        var posy = 0;
        if (!e)
            var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        if ($('#IranMap #show-title').html()) {
            var offset = $(this).offset();
            var x = (posx - offset.left + 25) + 'px';
            var y = (posy - offset.top - 5) + 'px';
            $('#IranMap #show-title').css({'left': x, 'top': y});
        }
    });

});