function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

var objpeople = [
  {
    username:"Priyanka",
    password: "12345"
  }
]

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var objArray =JSON.parse(localStorage.getItem("credential"));
        if (!objArray) objArray =[];


        for (var i = 0; i < objArray.length; i++){
          if(
            username == objArray[i].username &&
            password == objArray[i].password
          ){
            console.log(objArray[i]);
            localStorage.setItem("currentuser",JSON.stringify(objArray[i]));
            console.log(username + " is logged in!");
            window.location.href = "./profile.html";

            break;
          }
          else if( i === objArray.length-1){
            console.log("incorrect username and password")
            setFormMessage(loginForm, "error", "Invalid username/password combination");
          }

        }
        // Perform your AJAX/Fetch login


    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        var username = document.getElementById("signupUsername").value;
        var password = document.getElementById("signuppassword").value;

        var email = document.getElementById("email").value;
        var mobilenumber = document.getElementById("mobilenumber").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var pincode = document.getElementById("pincode").value;
        var country = document.getElementById("country").value;
        var companyName = document.getElementById("companyName").value;
        var occupation = document.getElementById("occupation").value;
        var yearOfExperience = document.getElementById("yearOfExperience").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        if(password !== confirmPassword){
          setFormMessage(createAccountForm, "error", "password and confirmPassword is not matching");
        }
        var newuser ={
          username:username,
          password:password,
          email:email,
          mobilenumber:mobilenumber,
          address:address,
          city:city,
          state:state,
          pincode:pincode,
          country:country,
          companyName:companyName,
          occupation:occupation,
          yearOfExperience:yearOfExperience
        }
        var objArray = JSON.parse(localStorage.getItem("credential"));
        if(!objArray) objArray = [];
        objArray.push(newuser);
        // sessionStorage.setItem("credential",JSON.stringify([]));
        localStorage.setItem("credential",JSON.stringify(objArray));
        console.log(JSON.parse(localStorage.getItem("credential")));
        window.location.href = "./index.html";
        // Perform your AJAX/Fetch login

        // setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);


        });
    });
});


// function login(){
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//
//   for (var i = 0; i < objpeople.length; i++){
//     if(
//       username == objpeople[i].username &&
//       password == objpeople[i].password
//     ){
//       console.log(username + "is logged in!");
//       break;
//     }
//     else if( i === objpeople.length-1){
//       console.log("incorrect username and password")
//     }
//     }
//   }
// }
