document.addEventListener("DOMContentLoaded", function() {
  const cds = document.querySelectorAll(".cd");

  cds.forEach(cd => {
      cd.addEventListener("click", function() {
          cd.style.opacity = "0";
      });
  });
});
