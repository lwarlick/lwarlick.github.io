var pLifts = localStorage.getItem('workoutOutline').split(',');

$(document).ready(function() {
	    	$("#calcDrop").click(function() {
          $(".calcList").slideToggle(300);
        });

        $("p").click(function() {
          var pclass = "." + $(this).attr('class');
          $(pclass).each(function() {
            $(this).css("background-color", "rgb(249, 249, 249)")
          })
          if ($(this).css("background-color")=="rgb(249, 249, 249)") {
            $(this).css("background-color", "rgb(153, 153, 153)");
          }
          else if($(this).css("background-color") == "rgb(153, 153, 153)") {
              $(this).css("background-color" ,"rgb(241, 241, 241)");
          }
        });

        $("#run").click(function() {
          if ($("#fifteenmin").css("background-color") == "rgb(153, 153, 153)") {
            if (pLifts[0]!="0") document.getElementById("ones").innerHTML = '1'
            if (pLifts[1]!="0") document.getElementById("twos").innerHTML = '1'
            if (pLifts[2]!="0") document.getElementById("threes").innerHTML = '1'
            if (pLifts[3]!="0") document.getElementById("fours").innerHTML = '1'
            if (pLifts[4]!="0") document.getElementById("fives").innerHTML = '1'
            if (pLifts[5]!="0") document.getElementById("sixs").innerHTML = '1'
            if (pLifts[6]!="0") document.getElementById("sevens").innerHTML = '1'
            if (pLifts[7]!="0") document.getElementById("eights").innerHTML = '1'
            if (pLifts[8]!="0") document.getElementById("nines").innerHTML = '1'
            if (pLifts[9]!="0") document.getElementById("tens").innerHTML = '1'
          }
          else if ($("#thirtymin").css("background-color") == "rgb(153, 153, 153)") {
            if (pLifts[0]!="0") document.getElementById("ones").innerHTML = '2'
            if (pLifts[1]!="0") document.getElementById("twos").innerHTML = '2'
            if (pLifts[2]!="0") document.getElementById("threes").innerHTML = '2'
            if (pLifts[3]!="0") document.getElementById("fours").innerHTML = '2'
            if (pLifts[4]!="0") document.getElementById("fives").innerHTML = '2'
            if (pLifts[5]!="0") document.getElementById("sixs").innerHTML = '2'
            if (pLifts[6]!="0") document.getElementById("sevens").innerHTML = '2'
            if (pLifts[7]!="0") document.getElementById("eights").innerHTML = '2'
            if (pLifts[8]!="0") document.getElementById("nines").innerHTML = '2'
            if (pLifts[9]!="0") document.getElementById("tens").innerHTML = '2'
          }
          else if ($("#fortyfivemin").css("background-color") == "rgb(153, 153, 153)") {
            if (pLifts[0]!="0") document.getElementById("ones").innerHTML = '3'
            if (pLifts[1]!="0") document.getElementById("twos").innerHTML = '3'
            if (pLifts[2]!="0") document.getElementById("threes").innerHTML = '3'
            if (pLifts[3]!="0") document.getElementById("fours").innerHTML = '3'
            if (pLifts[4]!="0") document.getElementById("fives").innerHTML = '3'
            if (pLifts[5]!="0") document.getElementById("sixs").innerHTML = '3'
            if (pLifts[6]!="0") document.getElementById("sevens").innerHTML = '3'
            if (pLifts[7]!="0") document.getElementById("eights").innerHTML = '3'
            if (pLifts[8]!="0") document.getElementById("nines").innerHTML = '3'
            if (pLifts[9]!="0") document.getElementById("tens").innerHTML = '3'
          }
          else if ($("#sixtymin").css("background-color") == "rgb(153, 153, 153)") {
            if (pLifts[0]!="0") document.getElementById("ones").innerHTML = '4'
            if (pLifts[1]!="0") document.getElementById("twos").innerHTML = '4'
            if (pLifts[2]!="0") document.getElementById("threes").innerHTML = '4'
            if (pLifts[3]!="0") document.getElementById("fours").innerHTML = '4'
            if (pLifts[4]!="0") document.getElementById("fives").innerHTML = '4'
            if (pLifts[5]!="0") document.getElementById("sixs").innerHTML = '4'
            if (pLifts[6]!="0") document.getElementById("sevens").innerHTML = '4'
            if (pLifts[7]!="0") document.getElementById("eights").innerHTML = '4'
            if (pLifts[8]!="0") document.getElementById("nines").innerHTML = '4'
            if (pLifts[9]!="0") document.getElementById("tens").innerHTML = '4'
          }
          if ($("#light").css("background-color") == "rgb(153, 153, 153)") {
            if (pLifts[0]!="0") document.getElementById("ones").innerHTML += ' &times; 5' 
            if (pLifts[1]!="0") document.getElementById("twos").innerHTML += ' &times; 5' 
            if (pLifts[2]!="0") document.getElementById("threes").innerHTML += ' &times; 5' 
            if (pLifts[3]!="0") document.getElementById("fours").innerHTML += ' &times; 5' 
            if (pLifts[4]!="0") document.getElementById("fives").innerHTML += ' &times; 5' 
            if (pLifts[5]!="0") document.getElementById("sixs").innerHTML += ' &times; 5' 
            if (pLifts[6]!="0") document.getElementById("sevens").innerHTML += ' &times; 5' 
            if (pLifts[7]!="0") document.getElementById("eights").innerHTML += ' &times; 5' 
            if (pLifts[8]!="0") document.getElementById("nines").innerHTML += ' &times; 5' 
            if (pLifts[9]!="0") document.getElementById("tens").innerHTML += ' &times; 5' 
          }
          else if ($("#medium").css("background-color") == "rgb(153, 153, 153)") {
            if (pLifts[0]!="0") document.getElementById("ones").innerHTML += ' &times; 8' 
            if (pLifts[1]!="0") document.getElementById("twos").innerHTML += ' &times; 8' 
            if (pLifts[2]!="0") document.getElementById("threes").innerHTML += ' &times; 8' 
            if (pLifts[3]!="0") document.getElementById("fours").innerHTML += ' &times; 8' 
            if (pLifts[4]!="0") document.getElementById("fives").innerHTML += ' &times; 8' 
            if (pLifts[5]!="0") document.getElementById("sixs").innerHTML += ' &times; 8' 
            if (pLifts[6]!="0") document.getElementById("sevens").innerHTML += ' &times; 8' 
            if (pLifts[7]!="0") document.getElementById("eights").innerHTML += ' &times; 8' 
            if (pLifts[8]!="0") document.getElementById("nines").innerHTML += ' &times; 8' 
            if (pLifts[9]!="0") document.getElementById("tens").innerHTML += ' &times; 8' 
          }
          else if ($("#high").css("background-color") == "rgb(153, 153, 153)") {
            if (pLifts[0]!="0") document.getElementById("ones").innerHTML += ' &times; 10' 
            if (pLifts[1]!="0") document.getElementById("twos").innerHTML += ' &times; 10' 
            if (pLifts[2]!="0") document.getElementById("threes").innerHTML += ' &times; 10' 
            if (pLifts[3]!="0") document.getElementById("fours").innerHTML += ' &times; 10' 
            if (pLifts[4]!="0") document.getElementById("fives").innerHTML += ' &times; 10' 
            if (pLifts[5]!="0") document.getElementById("sixs").innerHTML += ' &times; 10' 
            if (pLifts[6]!="0") document.getElementById("sevens").innerHTML += ' &times; 10' 
            if (pLifts[7]!="0") document.getElementById("eights").innerHTML += ' &times; 10' 
            if (pLifts[8]!="0") document.getElementById("nines").innerHTML += ' &times; 10' 
            if (pLifts[9]!="0") document.getElementById("tens").innerHTML += ' &times; 10' 
          }

          $("#workoutFinal").css('visibility', 'visible')
          $("#setsAndReps").css('visibility', 'visible')
          $("#liftDescription").css('visibility', 'visible')
        })
})

$(document).ready(function(){
  $("#one").on({
     mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },
  });

  $("#two").on({
 mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },  });

  $("#three").on({
    mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },
  });

  $("#four").on({
     mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },
  });

  $("#five").on({
     mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },
  });

  $("#six").on({
     mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },
  });

  $("#seven").on({
 mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },  });

  $("#eight").on({
 mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },  });

  $("#nine").on({
 mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },  });

  $("#ten").on({
 mouseover: function() {
      liftDescription.innerHTML = "<img src='Gifs/" + $(this).html() + ".gif'>"
    },  });

});
		function openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
     	document.body.style.marginLeft = "250px";
     	document.body.style.opacity = "50%";
    }

  	function closeNav() {
    	document.getElementById("mySidenav").style.width = "0px";
    	document.body.style.marginLeft = "0px";
    	document.body.style.opacity = "100%";
    }
    function loadLifts(m) {
      if (m[0]!='0') {
        document.getElementById("one").innerHTML = m[0];
      }
      if (m[1]!='0') {
        document.getElementById("two").innerHTML = m[1];
      }
      if (m[2]!='0') {
        document.getElementById("three").innerHTML = m[2];
      }
      if (m[3]!='0') {
        document.getElementById("four").innerHTML = m[3];
      }
      if (m[4]!='0') {
        document.getElementById("five").innerHTML = m[4];
      }
      if (m[5]!='0') {
        document.getElementById("six").innerHTML = m[5];
      }
      if (m[6]!='0') {
        document.getElementById("seven").innerHTML = m[6];
      }
      if (m[7]!='0') {
        document.getElementById("eight").innerHTML = m[7];
      }
      if (m[8]!='0') {
        document.getElementById("nine").innerHTML = m[8];
      }
      if (m[9]!='0') {
        document.getElementById("ten").innerHTML = m[9];
      }
    }