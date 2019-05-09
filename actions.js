console.log("kkkkkkk")
var menu = 0

function Menu(){
    console.log("fala tu");
    if(menu == 1){
        document.getElementById("secondd").style.animation = "rightLeft 1s ease-in-out";
        document.getElementById("secondd").style.left = "-120em";
        menu = 0;
    }else if (menu == 0){
        document.getElementById("secondd").style.display = "block";
        document.getElementById("secondd").style.animation = "leftRight 1s ease-in-out";
        document.getElementById("secondd").style.left = "0em";
        menu = 1;
    }
    
}

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

console.log(w);

if( w > 429){
    console.log("entrei");
    window.onscroll = function(){
        var top = window.pageYOffset
        console.log(top)
       
        if( top >= 130 ) {
            console.log("chegou");
            document.getElementById("textOne").style.animation ="fadeOut .5s ease-in-out";
            document.getElementById("cubos").style.animation ="fadeOut .5s ease-in-out";
            document.getElementById("textOne").style.opacity = "0";
            document.getElementById("cubos").style.opacity = "0";
        }else if( top < 130 &&  document.getElementById("textOne").style.opacity == "0"){
            document.getElementById("textOne").style.animation ="fadeIn 1s ease-in-out";
            document.getElementById("textOne").style.opacity = "1";
            document.getElementById("cubos").style.animation ="fadeIn 1s ease-in-out";
            document.getElementById("cubos").style.opacity = "1";
        }
    
        if(top >= 250 && top < 550){
            console.log("alou")
            document.getElementById("textTwo").style.display = "block";
            document.getElementById("textTwo").style.margin = "17em 0 0 17%";
            document.getElementById("textTwo").style.animation ="fadeIn 3s ease-in-out";
            document.getElementById("textTwo").style.opacity = "1";
        }else if(top < 100) {
            document.getElementById("textTwo").style.margin = "60em 0 0 17%";
        }else if(top >= 550 ){
            document.getElementById("textTwo").style.animation ="fadeOut .5s ease-in-out";
            document.getElementById("textTwo").style.opacity = "0";
            document.getElementById("textTwo").style.display = "none";
        }
    
        if(top >= 590 && top < 850){
            console.log("alou")
            document.getElementById("fourrth").style.margin = "40em 0 40em 0";
            document.getElementById("fourrth").style.animation ="fadeIn 3s ease-in-out";
            document.getElementById("fourrth").style.opacity = "1";
        }else if (top < 500){
            document.getElementById("fourrth").style.margin = "80em 0 0 0";
        }else if(top >= 850 ){
            document.getElementById("fourrth").style.animation ="fadeOut .5s ease-in-out";
            document.getElementById("fourrth").style.opacity = "0";
        }
    
        if(top >= 905 && top < 1200){
            console.log("alou")
            document.getElementById("fif").style.margin = "60em 0 0 0";
            document.getElementById("fif").style.animation ="fadeIn 3s ease-in-out";
            document.getElementById("fif").style.opacity = "1";
        }else if (top < 870){
            document.getElementById("fif").style.margin = "90em 0 0 0";
        }else if(top >= 1200 ){
            document.getElementById("fif").style.animation ="fadeOut .5s ease-in-out";
            document.getElementById("fif").style.opacity = "0";
        }
    }
}

