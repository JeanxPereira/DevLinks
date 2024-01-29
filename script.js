let currentAngle = 0
var lightTheme = false;

function rotateGradient(angle) {
  const gradient = document.getElementById("gradient")
  if (lightTheme) {
    gradient.style.background = `linear-gradient(${angle}deg, 
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.5) 100%,
    rgba(0, 0, 0, 0.5) 100%)`
  } else {
    gradient.style.background = `linear-gradient(${angle}deg, 
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 80%,
    rgba(255, 255, 255, 0.5) 100%,
    rgba(255, 255, 255, 0.5) 100%)`
  }
}

function animateRotation() {
  currentAngle += 0.5
  if (currentAngle >= 360) {
    currentAngle = 0
  }

  rotateGradient(currentAngle)
  requestAnimationFrame(animateRotation)
}

animateRotation()

function themeMode() {
  const html = document.documentElement

  if (html.classList.toggle('lightTheme')) {
    lightTheme = true
  } else {
    lightTheme = false
  }
}