var fruits =  ["apple", "strawberry", "banana", "orange", "mango"] 
//1-a
var nada =fruits.findIndex(function(nada)
{
    console.log(fruits)
    console.log(nada)
   

}


)
// //1-b
 function check(Fruit) {
        for(var i=0; i<Fruit.length; i++){
          if(typeof Fruit[i] != "string") {
             return false;
           }
        }
       
        return true;
       }
       console.log(check(fruits));
// //1-c

var fr1 = "apple" 
console.log(fr1.startsWith("a"))

var fr2 = "banana" 
console.log(fr2.startsWith("a"))

//1-d

let fruitsFilter= fruits.filter(function(item,index)
{
    
        return item.startsWith("b")||item.startsWith("s")
    
})
console.log(fruitsFilter);

// //1-e

let fruitsFilter2= fruits.map(function nada(index,item)
{
    
    for(let i=0;i<index.length;i++){
        return `I Like ${index}`;
}
    
})
console.log(fruitsFilter2);

//1-f

fruits.forEach(function nada(item,index){
    
    console.log(index,item)
})


//2-a

function text(){
    let ID = document.getElementById("fruits").value;
  
    fetch("https://jsonplaceholder.typicode.com/posts?id-" + ID).then(function(data){


data.json().then(function(tex){
   console.log(tex)

})


    }).catch(function(tex2){
        console.log(tex2)
    })
}

//2-b

let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3")
let h4 = document.getElementById("h4")

async function products(){
    let response = await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")
let data = await response.json()
console.log(data)
for(let i=0;i<data.length;i++)
{
    h2.innerHTML = data[i].name;
    h3.innerHTML = data[i].price;
    h4.innerHTML = data[i].image;

}



}

products()

