

// console.log( document.GetElementsByClassName("options"));
// console.log( document.GetElementsByClassName("options")[0].innerHTML);

const images = ["golden.jpeg","pitbull.jpeg", "sushi.jpeg"];
const title = ["pizza", "salad", "sushi"];

for(i=0, i<document.getElementsByClassName("options").length, i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  // console.log(document.getElementsByClassName("options")[i].innerHTML);

  document.getElementsByClassName("options")[i].innerHTML += '<img src= "assets/' + images[i]+ ' " >';
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
