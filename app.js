//1
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if(h == 0){
        h== 12;
    }
    if(h > 12){
        h -= 12;
        session = "PM";
     }
    
    document.querySelector(".myClock").innerText = h + ":" + m + ":" + s + " "+ session;
     setTimeout(showTime, 1000);
  }
  
  showTime(); 

