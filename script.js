function openBox(title){

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-title").innerText = title;
}

function closeBox(){

    document.getElementById("popup").style.display = "none";
}