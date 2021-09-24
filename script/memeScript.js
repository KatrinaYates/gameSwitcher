$(function() {
    var $start_counter = $( '#event-start' ),
    $drag_counter = $( '#event-drag' ),
    $stop_counter = $( '#event-stop' ),
    counts = [ 0, 0, 0 ];
    
    $( '#dogePic' ).draggable({
      start: function() {
        counts[ 0 ]++;
        updateCounterStatus( $start_counter, counts[ 0 ] );
      },
      drag: function() {
        counts[ 1 ]++;
        updateCounterStatus( $drag_counter, counts[ 1 ] );
      //   calculateWow($new_count); 
      },
      stop: function() {
        counts[ 2 ]++;
        updateCounterStatus( $stop_counter, counts[ 2 ] );
        var pos = $('#dogePic').position();
        $('#positionTop').text( pos.top );
        $('#positionLeft').text( pos.left );
      }

    });
    
    function updateCounterStatus( $event_counter, new_count ) {
      // first update the status visually...
      if ( !$event_counter.hasClass( 'ui-state-hover' ) ) {
        $event_counter.addClass( 'ui-state-hover' )
          .siblings().removeClass( 'ui-state-hover' );
      }
      // ...then update the numbers
      $( 'span.count', $event_counter ).text( new_count );
    }
        // calculateWow(new_count); 
    // function calculateWow (xyz){
    //   if(xyz < 500){
    //     document.getElementById('encourage').style.display = 'block';
    //   }
    //   else {
    //     document.getElementById('encourage').style.display = 'none';
    //     document.getElementById('wow').style.display = 'block';
    //   }
    // };

    $('#dragInfo').hide();
    $('#positionInfo').hide();

    $('#dragButton').click(function() {
      $('#dragInfo').show();
    });

    $('#dragClose').click(function() {
      $('#dragInfo').hide();
    });

      
    $('#positionButton').click(function(){
      $('#positionInfo').show();
    });

    $('#positionClose').click(function() {
      $('#positionInfo').hide();
    });

    // $('dogePic').drop(function() {
    //   var pos = $('#dogePic').position();
    //   $('#positionTop').text( pos.top );
    //   $('#positionLeft').text( pos.left );
    // });
  
  });