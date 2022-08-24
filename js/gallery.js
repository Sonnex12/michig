function upDate(Sunday) {
    var url = Sunday.getAttribute("src");
    var alt = Sunday.getAttribute("alt");
    document.getElementById("image").style.backgroundImage = `url(${url})`;
    document.getElementById("image").innerHTML =Sunday.alt;
  }
  
  function unDo(x) {
    x=document.getElementById("image");
    x.style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
      "Hover over an image below to display here";
  }