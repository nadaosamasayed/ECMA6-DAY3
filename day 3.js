 var fruits =  ["apple", "strawberry", "banana", "orange", "mango"] 
//1-a
var nada =fruits.findIndex(function(nada)
{
    console.log(fruits)
    console.log(nada)
   

}


)
//1-b
 function check(Fruit) {
        for(var i=0; i<Fruit.length; i++){
          if(typeof Fruit[i] != "string") {
             return false;
           }
        }
       
        return true;
       }
       console.log(check(fruits));
//1-c

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

//1-e

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

