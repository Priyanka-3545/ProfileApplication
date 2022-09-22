window.onload = simpleFunction( 10, 20 ); // call function with parameters on page load
      function simpleFunction( num1, num2 ) {
         var user = JSON.parse(localStorage.getItem('currentuser'));
         console.log(user);
         document.getElementById('name').innerHTML = user.username;
         document.getElementById('email').innerHTML = user.email;
         document.getElementById('mobile').innerHTML = user.mobilenumber;
         document.getElementById('address').innerHTML = user.address;
         document.getElementById('city').innerHTML = user.city;
         document.getElementById('state').innerHTML = user.state;
         document.getElementById('pincode').innerHTML = user.pincode;
         document.getElementById('country').innerHTML = user.country;
         document.getElementById('companyName').innerHTML = user.companyName;
         document.getElementById('occupation').innerHTML = user.occupation;
         document.getElementById('yearOfExperience').innerHTML = user.yearOfExperience;

      }
