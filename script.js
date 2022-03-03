const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display == "none") {
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".main").style.gridTemplateColumns = "0.5fr 1.5fr";
  } else {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".main").style.gridTemplateColumns = "1fr";
  }
});
