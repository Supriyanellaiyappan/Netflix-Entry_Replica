var signin = document.querySelector(".signin");
var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");
signin.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});
var errorMsg = document.getElementById("error-msg");
var update = document.getElementById("update");
update.addEventListener("click", function (event) {
  event.preventDefault();
  var email = document.getElementById("Email").value.trim();
  var password = document.getElementById("password").value.trim();
  var language = document.querySelector(".language");
  errorMsg.style.display = "none";
  if (language.value === "English") {
    if (email && password) {
      popupoverlay.style.display = "none";
      popupbox.style.display = "none";
      signin.textContent = "Signed in";
      signin.style.backgroundColor = "red";
      signin.style.cursor = "default";
      signin.disabled = true;
    } else if (!email || !password) {
      errorMsg.style.display = "block";
      if (!email && !password) {
        errorMsg.textContent = "🅧 Please enter both email and password.";
      } else if (email && !password) {
        errorMsg.textContent = "🅧 Please enter password.";
      } else if (!email && password) {
        errorMsg.textContent = "🅧 Please enter email.";
      }
    }
  } else if (language.value === "தமிழ்") {
    if (email && password) {
      popupoverlay.style.display = "none";
      popupbox.style.display = "none";
      signin.textContent = "உள்நுழைந்தது";
      signin.style.backgroundColor = "red";
      signin.style.width = "110px";
      signin.style.cursor = "default";
      signin.disabled = true;
    } else if (!email || !password) {
      errorMsg.style.display = "block";
      if (!email && !password) {
        errorMsg.textContent =
          "🅧 தயவுசெய்து மின்னஞ்சலும் கடவுச்சொல்லும் உள்ளிடவும்.";
      } else if (email && !password) {
        errorMsg.textContent = "🅧 தயவுசெய்து கடவுச்சொல்லைலை உள்ளிடவும்.";
      } else if (!email && password) {
        errorMsg.textContent = "🅧 தயவுசெய்து மின்னஞ்சலை உள்ளிடவும்.";
      }
    }
  } else if (language.value === "हिन्दी") {
    if (email && password) {
      popupoverlay.style.display = "none";
      popupbox.style.display = "none";
      signin.textContent = "साइन इन किया गया";
      signin.style.backgroundColor = "red";
      signin.style.width = "110px";
      signin.style.cursor = "default";
      signin.disabled = true;
    }
    if (!email || !password) {
      errorMsg.style.display = "block";
      if (!email && !password) {
        errorMsg.textContent = "🅧 कृपया ईमेल और पासवर्ड दोनों दर्ज करें।";
      } else if (email && !password) {
        errorMsg.textContent = "🅧 कृपया पासवर्ड दर्ज करें।";
      } else if (!email && password) {
        errorMsg.textContent = "🅧 कृपया ईमेल दर्ज करें।";
      }
    }
  }
});
var language = document.querySelector(".language");
var h11 = document.getElementById("h11");
var h12 = document.getElementById("h12");
var p1 = document.getElementById("p1");
var email = document.querySelector(".email");
var submit = document.querySelector(".submit");
var heading = document.getElementById("heading");
var Email = document.getElementById("Email");
var password = document.getElementById("password");
var update = document.getElementById("update");
var errorMsg = document.getElementById("error-msg");
language.addEventListener("change", function () {
  var selectedLang = language.value;
  if (selectedLang === "தமிழ்") {
    signin.textContent = "உள்நுழை";
    signin.style.fontSize = "small";
    h11.textContent = "முடிவற்ற பொழுதுபோக்கு இங்கே தொடங்குகிறது";
    h11.style.fontSize = "larger";
    h12.textContent = "திட்டங்கள் ₹149 முதல்.";
    h12.style.fontSize = "larger";
    p1.textContent = "எப்போது வேண்டுமானாலும் ரத்து செய்யலாம் அல்லது மாற்றலாம்.";
    p1.style.fontSize = "medium";
    email.placeholder = "மின்னஞ்சலை உள்ளிடுக...";
    submit.textContent = "சமர்ப்பிக்கவும்";
    heading.textContent = "உள்நுழை";
    Email.placeholder = "மின்னஞ்சலை அல்லது தொலைபேசி எண் உள்ளிடுக";
    password.placeholder = "கடவுச்சொல்";
    update.textContent = "உள்நுழை";
    errorMsg.textContent =
      "🅧 தயவுசெய்து மின்னஞ்சலும் கடவுச்சொல்லும் உள்ளிடவும்.";
    if (!signin.disabled) {
      signin.textContent = "உள்நுழை";
    } else if (signin.disabled) {
      signin.disabled = false;
      signin.style.backgroundColor = "";
      signin.style.cursor = "pointer";
      signin.style.width = "";
    }
  } else if (selectedLang === "English") {
    signin.textContent = "Sign in";
    h11.textContent = "Endless Entertainment Starts here";
    h12.textContent = "Plans from ₹149.";
    p1.textContent = "cancel or switch plans at anytime.";
    email.placeholder = "Enter email Here...";
    submit.textContent = "Submit";
    heading.textContent = "Sign in";
    Email.placeholder = "Email or Mobile Number";
    password.placeholder = "Password";
    update.textContent = "Sign in";
    errorMsg.textContent = "🅧 Please enter both email and password.";
    if (!signin.disabled) {
      signin.textContent = "Sign in";
    } else if (signin.disabled) {
      signin.disabled = false;
      signin.style.backgroundColor = "";
      signin.style.cursor = "pointer";
      signin.style.width = "";
    }
  } else if (selectedLang === "हिन्दी") {
    signin.textContent = "साइन इन करें";
    signin.style.fontSize = "small";
    h11.textContent = "अंतहीन मनोरंजन यहीं से शुरू होता है";
    h11.style.fontSize = "larger";
    h12.textContent = "₹149 से योजनाएँ उपलब्ध हैं।";
    h12.style.fontSize = "larger";
    p1.textContent = "कभी भी रद्द या स्विच किया जा सकता है।";
    p1.style.fontSize = "medium";
    email.placeholder = "अपना ईमेल दर्ज करें...";
    submit.textContent = "सबमिट करें";
    heading.textContent = "साइन इन करें";
    Email.placeholder = "ईमेल या मोबाइल नंबर दर्ज करें";
    password.placeholder = "पासवर्ड";
    update.textContent = "साइन इन करें";
    errorMsg.textContent = "🅧 कृपया ईमेल और पासवर्ड दोनों दर्ज करें।.";
    if (!signin.disabled) {
      signin.textContent = "साइन इन करें";
    } else if (signin.disabled) {
      signin.disabled = false;
      signin.style.backgroundColor = "";
      signin.style.cursor = "pointer";
      signin.style.width = "";
    }
  }
});
