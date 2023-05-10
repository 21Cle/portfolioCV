/* -----------------------------------------
  Have focus outline only for keyboard users
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// function switchLanguage() {
//   var button = document.getElementById("switchLanguageButton");
//   if (button.innerText === "Français") {
//     button.innerText = "English";
//     document.documentElement.lang = "fr";
//     showFrenchElements();
//     hideEnglishElements();
//   } else {
//     button.innerText = "Français";
//     document.documentElement.lang = "en";
//     hideFrenchElements();
//     showEnglishElements();
//   };
// }

// function hideFrenchElements() {
//   var frenchElements = document.querySelectorAll('[lang="fr"]');
//   for (var i = 0; i < frenchElements.length; i++) {
//     frenchElements[i].classList.add('d-none');
//   }
// }


// function showFrenchElements() {
//   var frenchElements = document.querySelectorAll('[lang="fr"]');
//   for (var i = 0; i < frenchElements.length; i++) {
//     frenchElements[i].classList.remove('d-none');
//   }
// }

// function hideEnglishElements() {
//   var englishElements = document.querySelectorAll('[lang="en"]');
//   for (var i = 0; i < englishElements.length; i++) {
//     englishElements[i].classList.add('d-none');
//   }
// }

// function showEnglishElements() {
//   var englishElements = document.querySelectorAll('[lang="en"]');
//   for (var i = 0; i < englishElements.length; i++) {
//     englishElements[i].classList.remove('d-none');
//   }
// }
