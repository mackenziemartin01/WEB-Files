console.log("hi");

fetch ('weather.json')
.then((resp) => resp.json)
.then (function(data){
  let weather = data;
  console.log(weather);
  let location = weather.location.name;
  console.log(weather.current.temp_f);
})
