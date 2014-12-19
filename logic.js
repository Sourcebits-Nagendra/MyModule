define(function(require,exports,module){
  var logic = function(){
    var g = document.getElementsByTagName("input")[0];
    g.addEventListener("change", function(){
      if (isNAN(g.value)){
        alert("Enter digits only");
      }
    })
  };
  return logic;
});
