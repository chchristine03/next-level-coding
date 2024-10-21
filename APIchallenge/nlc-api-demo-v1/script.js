let shadowElem = document.getElementById('shadow');

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


async function getData() {

    const myUrl = "http://api.weatherapi.com/v1/current.json?key=2f6f1e13929243068db234321241410&q=10009";

    try {
      const response = await fetch(myUrl);
      
      const data = await response.json();
      //console.log(data);
      
      //console.log(data.current.wind_degree);

      const wind = data.current.wind_degree;
      console.log(wind);
      
      let shadowRange = map(wind, 0, 360, 70, -70)
      shadowElem.style.transform= "scaleY(-1) skew(" + shadowRange + "deg)";
      
    } catch (error) {
      console.error(error.message);
    }
    
  }


  getData();


