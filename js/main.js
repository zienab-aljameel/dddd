


window.onscroll = function() {myFunction2()};
function myFunction2() {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("about").className = "about";
    document.getElementById("inf").className = "inf";
    document.getElementById("orbit-demo").className = "gaming-chair-gltf";

  } else {
    document.getElementById("about").className = "about2";
    document.getElementById("inf").className = "inf2";
    document.getElementById("orbit-demo").className = "chair";

  }
}
