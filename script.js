
// choose a better name!
function toggleMenu()
{
  let links = document.getElementById("navbar-nav");
  if (links.style.display === "none")
  {
    links.style.display = "flex";
  }
  else
  {
    links.style.display = "none";
  }
}
