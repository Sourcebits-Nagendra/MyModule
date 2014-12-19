define(function(require,exports,module){

//‘use strict’;

//alert();  

var logic = function(){
    //alert(1);
    var g = document.getElementsByTagName("input")[0];
    g.addEventListener("change", function(){
      console.log(11);
      console.log(g.value);
      if (isNaN(g.value)){
        
      }
    })
  };
//alert(2);
  return logic();



});
