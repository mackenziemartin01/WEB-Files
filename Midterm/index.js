document.getElementById("Fridaybutton").addEventListener('click',function(){
  document.getElementById("fridayitems").classList.toggle("shown");
}
)

document.getElementById("Mondaybutton").addEventListener('click', function(){
  document.getElementById("mondayitems").classList.toggle("shown");
}
)

document.getElementById("Tuesdaybutton").addEventListener('click', function(){
  document.getElementById("tuesdayitems").classList.toggle("shown");
}
)

document.getElementById("Wednesdaybutton").addEventListener('click', function(){
  document.getElementById("wednesdayitems").classList.toggle("shown");
}
)

document.getElementById("Thursdaybutton").addEventListener('click', function(){
  document.getElementById("thursdayitems").classList.toggle("shown");
}
)

document.getElementById("Saturdaybutton").addEventListener('click', function(){
  document.getElementById("saturdayitems").classList.toggle("shown");
}
)

document.getElementById("Sundaybutton").addEventListener('click', function(){
  document.getElementById("sundayitems").classList.toggle("shown");
}
)

console.log("javascript working");
document.getElementById("meal").addEventListener("click", mealClicked);
document.getElementById("movie").addEventListener("click", movieClicked);
document.getElementById("laundry").addEventListener("click", laundryClicked);

function mealClicked(){
  alert("Healthy eating = Healthy mind");
  document.getElementById("meal").innerHTML = "Done";
}

function movieClicked(){
  alert ("Watch a comedy movie!");
  document.getElementById("movie").innerHTML = "Done";
}

function laundryClicked(){
  alert ("Start your week with clean clothes");
  document.getElementById("laundry").innerHTML = "Done";
}

document.getElementById("excersize").addEventListener("click", excersizeClicked);
document.getElementById("date").addEventListener("click", dateClicked);
document.getElementById("facemask").addEventListener("click", maskClicked);

function excersizeClicked(){
  alert ("Excersize helps improve energy!")
  document.getElementById("excersize").innerHTML = "Done";
}

function dateClicked(){
  alert ("Time to see your favorite person(:")
  document.getElementById("date").innerHTML = "Done";
}

function maskClicked(){
  alert ("Skin care is very important.")
  document.getElementById("facemask").innerHTML = "Done";
}

document.getElementById("pasta").addEventListener("click", pastaClicked);
document.getElementById("selfyoga").addEventListener("click", selfYogaClicked);
document.getElementById("dogwalk").addEventListener("click", dogWalkClicked);

function pastaClicked(){
  alert ("Make your signature vodka pasta")
  document.getElementById("pasta").innerHTML = "Done";
}

function selfYogaClicked(){
  alert ("Practicing yoga will clense your space")
  document.getElementById("selfyoga").innerHTML = "Done";
}

function dogWalkClicked(){
  alert ("The golden next door is really cute!")
  document.getElementById("dogwalk").innerHTML = "Done";
}

document.getElementById("recexcersize").addEventListener("click", recClicked);
document.getElementById("friend").addEventListener("click", friendClicked);
document.getElementById("tvshow").addEventListener("click", tvshowClicked);

function recClicked(){
  alert ("Walk over to campus!")
  document.getElementById("recexcersize").innerHTML = "Done";
}

function friendClicked(){
  alert ("Go see Leslie!")
  document.getElementById("friend").innerHTML = "Done"
}

function tvshowClicked(){
  alert ("Start binging season three.")
  document.getElementById("tvshow").innerHTML = "Done";
}

document.getElementById("walk").addEventListener("click", walkClicked);
document.getElementById("friends").addEventListener("click", friendsClicked);
document.getElementById("nap").addEventListener("click", napClicked);
document.getElementById("yoga").addEventListener("click", yogaClicked);

function friendsClicked(){
  alert("Go see Gretchen!");
  document.getElementById ("friends").innerHTML = "Done";
}

function walkClicked(){
  alert ("Get moving outside!");
  document.getElementById ("walk").innerHTML = "Done";
}
function napClicked(){
  alert ("Get some beauty sleep.");
  document.getElementById ("nap").innerHTML = "Done";
}

function yogaClicked(){
  alert ("Yoga boosts your mental health.");
  document.getElementById ("yoga").innerHTML = "Done";
}


document.getElementById("activity").addEventListener("click", activityClicked);
document.getElementById("goout").addEventListener("click", goOutClicked);
document.getElementById("dinner").addEventListener("click", dinnerClicked);

function activityClicked(){
  alert ("Go take in the mountains beauty");
  document.getElementById ("activity").innerHTML = "Done";
}
function goOutClicked(){
  alert ("Go have fun with your friends");
  document.getElementById ("goout").innerHTML = "Done";
}

function dinnerClicked(){
  alert ("Go to Pasta Jays");
  document.getElementById ("dinner").innerHTML = "Done";
}


document.getElementById("homework").addEventListener("click", homeworkClicked);
document.getElementById("grocery").addEventListener("click", groceryClicked);
document.getElementById("bedding").addEventListener("click", beddingClicked);
document.getElementById("journal").addEventListener("click", journalClicked);

function homeworkClicked(){
  alert ("Get ahead so that the week isn't as stressful.");
  document.getElementById ("homework").innerHTML = "Done";
}
function groceryClicked(){
  alert ("Get food so that you can eat healthy.");
  document.getElementById ("grocery").innerHTML = "Done";
}

function beddingClicked(){
  alert ("Fresh sheets equals a good nights sleep");
  document.getElementById ("bedding").innerHTML = "Done";
}

function journalClicked(){
  alert ("Reflect on what you are grateful for.");
  document.getElementById ("journal").innerHTML = "Done";
}
