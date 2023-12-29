var myheader= document.querySelector('h1')
console.log(myheader) 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changecolor(){
    colorinput=getRandomColor()
    myheader.style.color=colorinput;
  }
  setInterval("changecolor()",1000)
  var p=document.querySelector('p')
  p.textContent="This is the Changed text"
  