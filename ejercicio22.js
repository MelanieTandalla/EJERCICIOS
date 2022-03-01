alert("Realizar un programa que muestre la serie de fibonacci");

function fibonacci (limit){
    let fiserie = [0,1];
    for (let i = 2; i < limit ; i++) {
        fiserie[i] = fiserie[i-1] + fiserie [i-2];
        
    }
    return fiserie
}

let serie = fibonacci(13);
let ul = document.getElementById("serie");

serie.forEach(numero =>{
    let li = document.createElement("li");
    li.innerHTML = numero;
    ul.append(li);
});