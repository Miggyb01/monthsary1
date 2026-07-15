const correctPassword = "20260615";
const correctBirthday = "20021217";

// Outer Site Password Protection
function checkPassword(){
    let input = document.getElementById("password").value;
    if(input === correctPassword){
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("website").style.display = "block";
        window.scrollTo(0, 0);
    }
    else{
        document.getElementById("error").innerHTML = "❌ Wrong password. Hint: It's our anniversary date!";
    }
}

// Inner Birthday Lock inside the Letter Section
function checkBirthday(){
    let input = document.getElementById("birthday-input").value;
    if(input === correctBirthday){
        // Hide lockbox and smoothly reveal secret letter
        document.getElementById("letter-lock").style.display = "none";
        document.getElementById("secret-letter").style.display = "block";
    }
    else{
        document.getElementById("birthday-error").innerHTML = "❌ That doesn't seem to be your birthdate, try again!";
    }
}
