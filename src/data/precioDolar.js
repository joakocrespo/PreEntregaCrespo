export const precioDolar = ()=>fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((resp) => resp.json())
    .then((data) => {
        data = (data.blue.value_avg)
    })
    

