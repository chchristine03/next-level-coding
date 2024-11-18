
let sheetID = "1HGTFu9kxH9vRqMfCxhS35v34Z4qTVGOhw9VNlI-sgdc";
let tabName = "Sheet1";

let myURL = `https://opensheet.elk.sh/${sheetID}/${tabName}`;
let container = document.getElementById("dataHere");

const illustrations = {
  Floral: "imgs/floral.png",
  Sweet: "imgs/sweet.png",
  Fresh: "imgs/fresh.png",
  Woody: "imgs/woody.png",
  Herbal: "imgs/herbal.png",
  Fruity: "imgs/fruity.png",
};

const fragranceColors = {
  Floral: [215, 127, 247], // floralColor
  Sweet: [231, 65, 137],   // sweetColor
  Fruity: [255, 252, 76],  // fruityColor
  Woody: [118, 109, 87],   // woodyColor
  Fresh: [121, 184, 239],  // freshColor
  Herbal: [86, 180, 97],   // herbalColor
};
async function getData() {
  try {
    let response = await fetch(myURL);
    let data = await response.json();

    for (let dataPoint of data) {

      console.log(dataPoint.FragranceStrength);
        
      let silhouetteContainer = document.createElement("div");
      silhouetteContainer.classList.add("silhouette-container");
      container.appendChild(silhouetteContainer);

      let backgroundLayer = document.createElement("div");
      backgroundLayer.classList.add("background-layer");


      if (dataPoint.Texture === "Foam") {
        backgroundLayer.classList.add("circle-background");
      } else if (dataPoint.Texture === "Gel") {
        backgroundLayer.classList.add("stripe-background");
      }
      silhouetteContainer.appendChild(backgroundLayer);

      let fragranceNameElement = document.createElement("div");
      fragranceNameElement.classList.add("fragrance-name");
      fragranceNameElement.innerText = dataPoint.ScentName;
      silhouetteContainer.appendChild(fragranceNameElement);


      let infoText = document.createElement("div");
      infoText.classList.add("info-text");
      infoText.innerHTML = "Bath and Body Works <br> Hand Soap <br> 8.75 fl oz / 259 mL"; // Adding a line break using <br>
      silhouetteContainer.appendChild(infoText);

      let canvas = document.createElement("canvas");
      silhouetteContainer.appendChild(canvas);
      let ctx = canvas.getContext("2d");

      canvas.width = 500;
      canvas.height = 500;

      let img = new Image();
      img.onload = () => {
        const imgAspectRatio = img.width / img.height;
        const canvasAspectRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgAspectRatio > canvasAspectRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspectRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspectRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        let strength = parseInt(dataPoint.FragranceStrength, 10);
        let transparency = strength === 1 ? 0.8 : strength === 2 ? 0.5 : strength === 3 ? 0.2 : 0.6;
        let color = fragranceColors[dataPoint.FragranceType] || [0, 0, 0];


        gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${1 - transparency * 0})`);
        gradient.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${1 - transparency * 1.7})`);
        gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);

        ctx.globalCompositeOperation = "source-in";
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

      };
    }
    

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();