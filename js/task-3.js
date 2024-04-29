const userName = document.querySelector("#name-input")
const spanText = document.querySelector("#name-output")
userName.addEventListener("input", nameInput)

function nameInput (event) {
  let nameUser = event.target.value.trim()

if (nameUser === "") {
    nameUser = "Anonymous";
     } else {
     spanText.textContent = nameUser;
}}


// стилі для інпуту userName
userName.style.width = "360px";
userName.style.height = "40px";
userName.style.paddingLeft = "16px";
userName.style.borderRadius = "8px"
userName.style.border = "1px solid #808080"


// стилі для привітання
const title = document.querySelector("h1")

title.style.color = "#2E2F42";
title.style.size = "24px";
title.style.fontWeight = "600";
title.style.lineHeight = "1.33"
title.style.letterSpacing = "0.03em"





