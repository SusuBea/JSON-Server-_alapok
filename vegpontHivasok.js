export function getAdatok(vegpont, callbackFv){
    fetch(vegpont, {
        method: "GET",

        headers: {
            "Content-Type": "application/json",
            
          },
    })
        .then((response) => response.json())
        .then( (data)=> callbackFv(data))
        .catch((error) => console.log(error));

}


export function deleteAdatok(vegpont, id){
    vegpont = vegpont+"/"+id
    fetch(vegpont, {
        method: "DELETE",

        headers: {
            "Content-Type": "application/json",
            
          },
    })
        .then((response) => response.json())
        .then( (data)=> callbackFv(data))
        .catch((error) => console.log(error));

}


export function postAdatok(vegpont, ujAdat){
    fetch(vegpont, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            
          },

        body: JSON.stringify(ujAdat)
    })
        .then((response) => response.json())
        .then( (data)=> console.log(data))
        .catch((error) => console.log(error));

}