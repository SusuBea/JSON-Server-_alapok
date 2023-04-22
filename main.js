import { getAdatok, deleteAdatok, postAdatok} from "./vegpontHivasok.js";

$(function(){
    let vegpont = "https://pokeapi.co/api/v2/pokemon/2"
   
        getAdatok(vegpont, pokemonMegjelenit)

    let sajatvegpont = "  http://localhost:3000/adatLista"
    getAdatok(sajatvegpont, sajatMegjelenito)

    $("#torol").on("click", function(){
        deleteAdatok(sajatvegpont, 2)

    })

    $("#ujelem").on("click", function(){
        const ujAdat =  
        {
            
            "kor": 5,
            "fajta": "Tacsi",
            "nem": "kan"
          }
        postAdatok(sajatvegpont, ujAdat)

    });
       
    

     

})



function pokemonMegjelenit(data){
    console.log(data);
    let kep = data.sprites.front_default
    let nev = data.name
    
   $("main").append(`<img src="${kep}" alt="${data.name}">`)
   $("main").append(nev)


}

function sajatMegjelenito(data){
    console.log(data)

}
