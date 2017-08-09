// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var display = document.querySelector(".customers");
var newPersonArr = [];

(function() {
  "use strict";
  callAPI();
})();

function callAPI() {
  fetch("https://randomuser.me/api/?results=12")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var personArr = data.results;
      console.log("personArr: ", personArr);
      populateHTML(personArr);
    });
}

function populateHTML(arr) {
  for (var i = 0; i < arr.length; i++) {
    newPersonArr.push(arr[i]);
  }

  for (var i = 0; i < newPersonArr.length; i++) {
    currentPerson = newPersonArr[i];

    function createElement(currentPerson) {
      let contactWrapper = document.createElement("div");
      contactWrapper.classList.add("contactWrapper");

      let contactImageWrapper = document.createElement("div");
      contactImageWrapper.classList.add("contactImageWrapper");
      contactWrapper.appendChild(contactImageWrapper);

      let contactHeader = document.createElement("h3");
      contactWrapper.appendChild(contactHeader);
      contactHeader.classList.add("contactHeader");
      let contactEmail = document.createElement("p");
      contactWrapper.appendChild(contactEmail);
      contactEmail.classList.add("contactEmail");

      let contactAddress = document.createElement("div");
      contactAddress.classList.add("contactAddress");

      let contactStreet = document.createElement("p");
      contactAddress.appendChild(contactStreet);
      let contactCityStateZip = document.createElement("p");
      contactAddress.appendChild(contactCityStateZip);
      let contactPhone = document.createElement("p");
      contactAddress.appendChild(contactPhone);

      contactWrapper.appendChild(contactAddress);

      contactHeader.textContent =
        currentPerson.name.first + " " + currentPerson.name.last;
      contactEmail.textContent = currentPerson.email;
      contactStreet.textContent = currentPerson.location.street;
      contactCityStateZip.textContent =
        currentPerson.location.city +
        ", " +
        currentPerson.location.state +
        " " +
        currentPerson.location.postcode;
      contactPhone.textContent = currentPerson.phone;

      contactImageWrapper.style.background =
        "url(" + currentPerson.picture.large + ") no-repeat center center";
      contactImageWrapper.style.backgroundSize = "cover";
      document.querySelector(".customers").appendChild(contactWrapper);
    }
    createElement(currentPerson);
  }
}
