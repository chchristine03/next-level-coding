// Visualize our "joy" data through volume of confetti
// The higher the joy level, the more volume of confetti
// The lower the joy level, the less volume of confetti

let sheetID = "1MJ2eSUkd9ObYb91mSxIKZLTb6mwMpxjZNqn1yw94RS4";
let tabName = "Sheet1";
let myURL = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

let container = document.getElementById("dataHere");


async function getData() {

  try {
  
    let response = await fetch(myURL);
    let data = await response.json();
    
    // Loop through each row
    for(let dataPoint of data){
    console.log(dataPoint)
      let newElement = document.createElement("div");
    container.appendChild(newElement);
    newElement.classList.add("week");
    newElement.innerHTML = dataPoint.joy;
    
    for(let i = 0; i < dataPoint.joy * 10; i++) {
      
      let confettiElement = document.createElement("div");
      newElement.appendChild(confettiElement);
      
      confettiElement.classList.add("confetti");

      confettiElement.style.top = `${Math.random() * 75}px`;
      confettiElement.style.left = `${Math.random() * 75}px`;
      confettiElement.style.transform = `rotate(${Math.random() * 360}deg)`;
      confettiElement.style.backgroundColor = `hsl(${Math.random() * 360}, 60%, 60%)`;
    }
         
     if(dataPoint.holiday == "yes") {
       newElement.style.borderRadius = "100%";
       newElement.style.backgroundColor = "orange";
       
     }
    }
  
  } catch(error) {
    console.error(error);
  }
  
}

getData();