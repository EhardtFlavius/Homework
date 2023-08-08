// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get the value of a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

// Function to set a value in browser storage
function setValueInStorage(key, value, storageType) {
  if (storageType === "local") {
    localStorage.setItem(key, value);
  } else if (storageType === "session") {
    sessionStorage.setItem(key, value);
  }
}

// Function to get a value from browser storage
function getValueFromStorage(key, storageType) {
  if (storageType === "local") {
    return localStorage.getItem(key);
  } else if (storageType === "session") {
    return sessionStorage.getItem(key);
  }
  return null;
}

// Get the language value from the cookie
var languageCookie = getCookie("language");

// Get the language value from the local storage
var languageStorage = getValueFromStorage("language", "local");

// Select the language based on the cookie or storage value
var selectedLanguage = languageCookie || languageStorage;

// Get the radio buttons
var radioButtons = document.getElementsByName("language");

// Set the checked state based on the selected language
for (var i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].value === selectedLanguage) {
    radioButtons[i].checked = true;
    break;
  }
}

// Add event listener to preserve the selected option in the cookie and storage
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", function (event) {
    var selectedValue = event.target.value;
    setCookie("language", selectedValue, 30); // Set the cookie with a 30-day expiration
    setValueInStorage("language", selectedValue, "local");
  });
}
