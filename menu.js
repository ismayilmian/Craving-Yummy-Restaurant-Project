var productcontainer = document.getElementById("product");
var searchbar = document.getElementById("productSearch");
var productlist = productcontainer.querySelectorAll("div");

searchbar.addEventListener("keyup", function (event) {
  var enteredtext = event.target.value.toUpperCase();

  for (count = 0; count < productlist.length; count = count + 1) {
    var productname = productlist[count].querySelector("p").textContent;
    if (productname.toUpperCase().indexOf(enteredtext) < 0) {
      productlist[count].style.display = "none";
    }
    else{
        productlist[count].style.display = "block";

    }
    
  }
});

