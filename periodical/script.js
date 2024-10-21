

/*const url = 'https://brand-logo-api.p.rapidapi.com/brand/retrieve';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd8b5bbd9fcmshf749d0da053113dp1c5ed4jsn527843f5c58f',
		'x-rapidapi-host': 'brand-logo-api.p.rapidapi.com'
	}
};

async function getData() {

    const url = 'https://brand-logo-api.p.rapidapi.com/brand/retrieve';

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    
    
  }


  getData();

  */


 /*
  const url = 'https://brand-logo-api.p.rapidapi.com/brand/retrieve';
  const API_KEY = 'brand__3ZWNr9UNGmmy3MGDgK4TSZ6Y';

  const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': 'd8b5bbd9fcmshf749d0da053113dp1c5ed4jsn527843f5c58f',
          'x-rapidapi-host': 'brand-logo-api.p.rapidapi.com'
      }
  };
  
  async function getData() {
      try {
          const response = await fetch(url, options);
  
          // Convert the response to JSON
          const result = await response.json();
  
          // Check if brand.colors exists and is an array
          if (result.brand && Array.isArray(result.brand.colors)) {
              // Extract all hex values from the colors array
              const hexColors = result.brand.colors.map(color => color.hex);
              console.log('Hex Colors:', hexColors);
          } else {
              console.log('No colors data found.');
          }
      } catch (error) {
          console.error('Error fetching brand data:', error);
      }
  }
  
  getData();

  */
 
const url = 'https://brand-logo-api.p.rapidapi.com/brand/retrieve';  // Random brand API endpoint
const apiKey = 'brand__3ZWNr9UNGmmy3MGDgK4TSZ6Y'; // Replace with your actual API key

const options = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }
};

async function getRandomBrandColors() {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        
        // Assuming the API returns a random brand and it has a colors array
        if (result.brand && Array.isArray(result.brand.colors)) {
            // Extract hex values from the colors array
            const hexColors = result.brand.colors.map(color => color.hex);
            console.log('Hex Colors:', hexColors);
        } else {
            console.log('No colors data found.');
        }
    } catch (error) {
        console.error('Error fetching brand data:', error);
    }
}

getRandomBrandColors();

/*const title = document.querySelector('.title');

function rotateTitle() {
  let angle = 0;
  setInterval(() => {
    angle += 1;
    title.style.transform = `rotate(${angle}deg) translate(-50%, -100%)`;
  }, 10); // Adjust speed here
}

rotateTitle();
*/