function showGuide(bodyPart){

    const popup = document.getElementById("popup");

    const title = document.getElementById("popup-title");

    const text = document.getElementById("popup-text");

    popup.style.display = "flex";

    if(bodyPart === "chest"){

        title.innerHTML = "Chest Exercises";

        text.innerHTML =
        "• Bench Press <br><br>" +
        "• Push Ups <br><br>" +
        "• Chest Fly <br><br>" +
        "• Incline Dumbbell Press";

    }

    else if(bodyPart === "arm"){

        title.innerHTML = "Arm Exercises";

        text.innerHTML =
        "• Bicep Curls <br><br>" +
        "• Hammer Curls <br><br>" +
        "• Tricep Dips <br><br>" +
        "• Cable Pushdowns";

    }

    else if(bodyPart === "thigh"){

        title.innerHTML = "Thigh Exercises";

        text.innerHTML =
        "• Squats <br><br>" +
        "• Lunges <br><br>" +
        "• Leg Press <br><br>" +
        "• Bulgarian Split Squats";

    }

    else if(bodyPart === "back"){

        title.innerHTML = "Back Exercises";

        text.innerHTML =
        "• Pull Ups <br><br>" +
        "• Deadlifts <br><br>" +
        "• Barbell Rows <br><br>" +
        "• Lat Pulldowns";

    }

    else if(bodyPart === "calves"){

        title.innerHTML = "Calves Exercises";

        text.innerHTML =
        "• Standing Calf Raises <br><br>" +
        "• Seated Calf Raises <br><br>" +
        "• Jump Rope <br><br>" +
        "• Farmer Walk";

    }

}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}

/* NAVBAR POPUPS */

function showInfo(type){

    const popup = document.getElementById("info-popup");

    const title = document.getElementById("info-title");

    const text = document.getElementById("info-text");

    popup.style.display = "flex";

    if(type === "programs"){

        title.innerHTML = "Programs";

        text.innerHTML =
        "Strength Training <br><br>" +
        "Fat Loss <br><br>" +
        "Muscle Building";

    }

    else if(type === "about"){

        title.innerHTML = "About";

        text.innerHTML =
        "Fitness Guide helps people discover exercises for every muscle group.";

    }

    else if(type === "contact"){

        title.innerHTML = "Contact";

        text.innerHTML =
        "Email: fitnessguide@gmail.com <br><br>" +
        "Phone: +44 123456789";

    }

}

function closeInfo(){

    document.getElementById("info-popup").style.display = "none";

}