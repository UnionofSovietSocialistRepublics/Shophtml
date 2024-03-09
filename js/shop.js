const url = 'https://real-time-product-search.p.rapidapi.com/search?q=Nike%20shoes&country=us&language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'efaac509d0msh43b0adacebeadf9p1497cbjsnb31f3175ffd7',
		'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
	}
};



async function gd(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
	data = JSON.parse(result);
	console.log(data.data[0].product_title);
	for (i=1; i<15; i++){
	document.getElementById("shop").innerHTML+=`<div style="width: 300px; height: 300px;"> <img src="${data.data[i].product_photos[0]}" style="width: 200px; height: 200px;" alt=""> <div>${data.data[i].product_title}</div> <div>${data.data[i].typical_price_range[0]}</div> <button><h2>Buy NOW!!!</h2></button> </div>`
}
} catch (error) {
	console.error(error);
}
}
gd();

