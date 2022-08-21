// first, a useful variable to neaten things up:
const htmlRoot = document.querySelector("html");
const colorScheme = document.querySelector('meta[name="color-scheme"]');


// check for color-scheme, if not set, then...
if (colorScheme.content === "light dark") {
  // ..if user OS is in dark mode...
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // ..add dark-mode class to html element
    htmlRoot.classList.add("dark-mode");
  }
}

// set color-scheme to dark
function switchDark() {
  colorScheme.setAttribute("content", "dark");
  htmlRoot.classList.add("dark-mode");
}
// set color-scheme to light
function switchLight() {
  colorScheme.setAttribute("content", "light");
  htmlRoot.classList.remove("dark-mode");
}

function toggleMode() {
  // check for color-scheme, if not set, then...
  if (colorScheme.content === "light dark") {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      switchLight();
    } else {
      switchDark();
    }
  } else if (colorScheme.content === "light") {
    switchDark();
  } else if (colorScheme.content === "dark") {
    switchLight();
  }
}

// now we can to check for live changes, by adding an
// event listener in case our user flips the OS mode
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  // only run if the html element color-scheme is not set
  if (colorScheme.content === "light dark") {
    // add/remove dark mode to match OS setting
    if(event.matches) {
      htmlRoot.classList.add("dark-mode");
    } else {
      htmlRoot.classList.remove("dark-mode");
    }
  }
});