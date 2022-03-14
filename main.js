var clicks = 00;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};
function reset(){
  clicks=00
   document.getElementById("clicks").innerHTML = clicks;
}
