


function heraing() {
    document.getElementById("put").style.fontSize = "x-large";
    
  }




  function paragraph() {
    document.getElementById("pru").style.fontStyle = "italic";
    document.getElementById("pru").style.background = 'red'
  }



  function boody() {
    document.body.style.background = "#f3f3f3  no-repeat right top";
  }



  function setImageVisible(id, visible) {
    const img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

function image() {
    document.getElementById("image1").style.visibility = "hidden ";
   
    
  }

  function name1() {
    const x = document.createElement("SCRIPT");
    const t = document.createTextNode("alert('Enter the name')");
    x.appendChild(t);
    document.body.appendChild(x);
  }

  function mouseEnter() {
    document.getElementById("pru").style.color = "blue";
  }
  
  function mouseLeave() {
    document.getElementById("pru").style.color = "black";
  }