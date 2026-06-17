
document.getElementById("healthform").addEventListener("submit", function(event) {
    event.preventDefault();

    let age = Number(document.getElementById("age").value);
    let bp = Number(document.getElementById("bp").value);
    let heartRate = Number(document.getElementById("heartrate").value);
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    let cholesterol = document.getElementById("cholesterol").value;
    let exercise = document.getElementById("exercise").value;
    let smoke = document.getElementById("smoke").value;

    let score = 0;

    if (age > 50) {
        score += 2;
    } else if (age > 30) {
        score += 1;
    }

    if (bp > 140) {
        score += 2;
    } else if (bp > 120) {
        score += 1;
    }

    if (heartRate > 100) {
        score += 2;
    }

    if (cholesterol === "bad") {
        score += 2;
    }

    if (exercise === "No") {
        score += 1;
    }

    if (smoke === "Yes") {
        score += 2;
    }

    let result = "";

    if (score <= 2) {
        result = "Low Risk ✅";
    } else if (score <= 5) {
        result = "Medium Risk ⚠️";
    } else {
        result = "High Risk 🚨";
    }

    document.getElementById("result").innerText = 
        "Your Risk Level: " + result;
        });

document.getElementById("feedbackform").addEventListener("submit", function(event){event.preventDefault();
    
    let feedback = document.getElementById("feedback").value;

    document.getElementById("feedbackresult").innerText = "Thanks for your feeback:"+feedback;

});