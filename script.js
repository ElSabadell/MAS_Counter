
  document.onkeydown = function(blocco_tasti) {
    if(event.keyCode == 123) 
  { return false; }
    if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'I'.charCodeAt(0)) { return false; }
    if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'C'.charCodeAt(0)) { return false; }
    if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'J'.charCodeAt(0)) { return false; }
    if(blocco_tasti.ctrlKey && blocco_tasti.keyCode == 'U'.charCodeAt(0)) 
  { return false; } 
  }

  var countDownDate = new Date("Jun 1, 2020 00:00:00").getTime();
        
        var x = setInterval(function() {
        
          var now = new Date().getTime();
            
          var distance = countDownDate - now;
            
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          document.getElementById("demo").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
            
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "IT'S TIME TO START THE REVOLUTION";
          }
        }, 1000);