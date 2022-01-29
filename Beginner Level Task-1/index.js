function myFunction(){
    var showmenu = document.getElementById("show")
    console.log(showmenu);
    var checkbox= document.getElementById("check");
    if (checkbox.checked==true) {
        showmenu.style.display="block";
    }
    else{
        showmenu.style.display="none";
    }
}
function submit() {
    alert("Thanks for Visiting. We will Contact you soon.")
}
