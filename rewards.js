window.onload = function() {
document.getElementsByClassName("redeem")[0].onclick = function() {

  document.getElementsByClassName("popup")[0].style.display = 'block';
  [...document.getElementsByClassName("rewards-item")].forEach(function(el) {
    el.classList.remove("active");
  });

  setTimeout(
    function() {
      document.getElementsByClassName("popup")[0].style.display = 'none';
  }, 3000);
};
[...document.getElementsByClassName("rewards-item")].forEach(function(el) {
  el.onclick = function() {
    el.classList.add("active");
  }
});
};
