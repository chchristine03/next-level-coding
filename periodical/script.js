/*
async function getData() {

    const url = 'https://brand-logo-api.p.rapidapi.com/brand/retrieve';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd8b5bbd9fcmshf749d0da053113dp1c5ed4jsn527843f5c58f',
            'x-rapidapi-host': 'brand-logo-api.p.rapidapi.com'
        }
    };


    
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


function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function getMonthlyRandomId(min, max) {
    const now = new Date();
    const monthSeed = now.getFullYear() * 100 + now.getMonth() + 1;
    return min + (monthSeed % (max - min + 1));
}

async function getMonthlyRecipeCalories() {
    const randomId = getMonthlyRandomId(8000, 9000); // Adjust ID range based on Tasty's available range
    const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${randomId}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd8b5bbd9fcmshf749d0da053113dp1c5ed4jsn527843f5c58f',
            'x-rapidapi-host': 'tasty.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        // Get calories
        const calories = result.nutrition?.calories;
        const dishName = result.name;

        console.log("Dish Name:", dishName);
        console.log("Monthly Recipe Calories:", calories);
        
        
        // Invert the mapping: Assuming calories 0-1000 maps to brightness from 2 (bright) to 0.5 (dark)
        let brightness = map(calories, 0, 1000, 1,0.1);
        console.log("Brightness:", brightness);
        console.log()

        // Apply brightness filter to the plate image
        const plateImage = document.querySelector('.plate');
        plateImage.style.filter = `brightness(${brightness})`;
        console.log("Plate image filter:", plateImage.style.filter);
        
        const dishTextElement = document.querySelector('.dish-name');
        dishTextElement.innerText = dishName;

    } catch (error) {
        console.error(error);
    }
}

getMonthlyRecipeCalories();