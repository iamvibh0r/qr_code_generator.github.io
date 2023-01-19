const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generateBtn = container.querySelector(".form .btn-info"),
qrImg = container.querySelector(".qr-code img");

generateBtn.addEventListener("click",() =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",() => {
        container.classList.add("active");
        generateBtn.innerText = "Generate OR Code";
    });
});


qrInput.addEventListener("keyup",() =>{
    if(!qrInput.value){
        container.classList.remove("active");
    }
});




document.addEventListener("contextmenu",function(e){
  alert("Code Available on github");
  e.preventDefault();
});

document.onkeydown = function(e){
  if(event.keyCode == 123){
    alert("Code Available on github");
    return false;
  }

  if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
    alert("Code Available on github");
    return false;
    
  }
};
