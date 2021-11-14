/* Global Variables */
const apiKey=',us&appid=ed2c201aaf3417d9ae88d06b67764e60'

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newCity =  document.getElementById('zip').value;
getCity(baseURL,newCity, apiKey)

}
const getCity = async (baseURL, city, key)=>{

  const res = await fetch(baseURL+city+key)
  try {

    const data = await res.json();
    console.log(data)
    document.getElementById('date').innerHTML = data[0].animal;
    document.getElementById('temp').innerHTML = data[0].facts;
    document.getElementById('content').innerHTML = data[0].fav;
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
getCity('/getcity',);
