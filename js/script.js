// start script.js
var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

// optional
$('#blogCarousel').carousel({
    interval: 5000
});



// validation script

// validate email and password function -start
var mail = document.getElementById("email");
var pswd = document.getElementById("password");
function lvalidate() {
  var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  if (res.test(mail.value) != "1") {
    window.alert("Email Is Invalid");
    return false;
  }
  else if (psr.test(pswd.value) != "1") {
    window.alert("Password Is Invalid, try again");
    window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

    return false;
  }
  else {
    window.alert("validation Success");
    return true;
  }

};
// validate email and password function -end

// phone no validate function -start
var smail = document.getElementById("semail");
var spswd = document.getElementById("password1");
var spswd2 = document.getElementById("password2");
var phone = document.getElementById("phone");

function signupValidate() {
  var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


  if (res.test(smail.value) != "1") {

    window.alert("Please enter a valid Email id");
    return false;
  }
  else if (phoneno.test(phone.value) != "1") {
    window.alert("Please enter a valid phone number :");
    return false;
  }
  else if (psr.test(spswd.value) != "1") {
    window.alert("Please enter a valid Password");
    window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
    window.alert("try again");
    return false;
  }
  else if (spswd.value != spswd2.value) {
    window.alert("Passwords Doesnt Match, Please Re-enter :");
    return false;
  }
  else {
    window.alert("validation Success");
    return true;
  }

};

// phone no validate function -end

// password stregth function -start
$(document).ready(function () {

  $('#password1').on('keyup', function () {

    let textElement = $(this).val()
    let strength = 0

    $('#passwordStrength').find('h4').html(`Your Password: ${textElement}`)

    if (textElement.length > 0) {
      let sizeElements = textElement.length

      if (sizeElements > 10) {

        strength += 30

      } else {
        let calcMath = (sizeElements * 2)

        strength += calcMath

      }

    }

    let lowerCase = new RegExp(/[a-z]/)
    if (lowerCase.test(textElement)) {
      strength += 16
    }

    let upperCase = new RegExp(/[A-Z]/)
    if (upperCase.test(textElement)) {
      strength += 18
    }

    let regularNumber = new RegExp(/[0-9]/i)
    if (regularNumber.test(textElement)) {
      strength += 16
    }

    let specialChars = new RegExp(/[^a-z0-9]/i)
    if (specialChars.test(textElement)) {
      strength += 20
    }

    //Function to produce result
    let renderResult = (strengthData, color) => {
      return $('#strengthProgress').html(
        `
            <p class="">Password Strength :</p>
            <div class="progress" style="height: 15px;">
                <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 12px">${strength}%</strong></div>
            </div>`
      )
    }

    if (strength < 21) {
      renderResult(strength, 'danger')                      //red very weak password
    } else
      if (strength > 20 && strength < 41) {
        renderResult(strength, 'warning')                   //orange weak password
      } else
        if (strength > 40 && strength < 61) {
          renderResult(strength, 'secondary')               //medium password
        } else
          if (strength > 60 && strength < 81) {
            renderResult(strength, 'info')                  // strong password
          } else {
            renderResult(strength, 'success')               //very strong password
          }



  });

});
// password stregth function -end

// end of script.js