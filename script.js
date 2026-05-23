function showPopup(title){

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-title").innerText = title;
}

function closePopup(){

    document.getElementById("popup").style.display = "none";
}