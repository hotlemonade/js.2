// 마우스 이벤트
//console.log(document.getElementById("header"));
var myHeader = document.getElementById("header");

myHeader.onmouseover = function(){
    this.classList.add("over");
    //this.style.backgroundColor = "white";
}

myHeader.onmouseout = function(){
    this.classList.remove("over");
    //this.style.backgroundColor = "rgba(0,0,0, .5)"
}

//스크롤 이벤트
window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    if(window.scrollY > 200){
    myHeader.style.height = 0 + "px";
    }
    else{
        myHeader.style.height = 100 + "px"
    }
});



