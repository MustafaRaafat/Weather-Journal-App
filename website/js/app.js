// Create a new date instance dynamically with JS
let d = new Date();
let newDate =  d.getDate()+'/'+(d.getMonth()+1)+'/'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
const PersonalAPIKey ="ed2c201aaf3417d9ae88d06b67764e60";
const BaseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const feelings=document.querySelector('#feelings');
const dateUI=document.querySelector('#date');
const tempUI=document.querySelector('#temp');
const contentUI=document.querySelector('#content');



// Event listener to add function to existing HTML DOM element
let getButton =document.querySelector("#generate");

/* Function called by event listener */
getButton.addEventListener("click",()=>{
  // console.log(feelings.value);
getAnimalDemo(BaseURL,document.querySelector("#zip").value,PersonalAPIKey);
});

/* Function to GET Web API Data*/
const getAnimalDemo = async (baseURL="",zipCode="",APIKey="")=>{
  const res = await fetch(baseURL+zipCode+"&units=imperial&appid="+APIKey)
  //Call API\
  try{
    let feel= feelings.value;
    const data = await res.json();
    let projectData={data,newDate,feel}
    clintappdata('/city',projectData)
    .then(
      upUI('/city')
    );
    
  } catch(error){
    // appropriately handle the error
    // console.log( error);
  }
  
}



/* Function to POST data */
const clintappdata= async (url='',data={})=>{
    const res=await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const clintnewdata=await res.json();
        return clintnewdata;
    }catch(error){
        // console.log('error');
    }
    
}

/* Function to GET Project Data */
const eee=async (url='')=>{
const responseFromServer= await fetch(url);
try {
  const results=await responseFromServer.json();
  // console.log(results);
  if (results.data.cod!=200) {
    tempUI.textContent=results.data.message;
  }else{
    dateUI.textContent=results.newDate;
  tempUI.textContent=results.data.main.temp+' C';
  contentUI.textContent=results.feel;
  }
  
  }
  catch(error) {
    // console.log("error", error);
  }
};

const upUI=async (url)=> {
  eee(url);
}
