document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.querySelector(".ableton-logo-container");

  if (logoContainer) {
    logoContainer.innerHTML = `
      <div class="logo-part-1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="logo-part-2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
  }
});
