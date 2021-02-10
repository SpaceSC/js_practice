// write async before name of function
const pageLoad = () => {
 let myObject = {
   number: 4,
   string: "hi",
   boolean: true,
   object2: {
     key1: 1,
     key2: "value2"
   }
 };

 let myArray = Object.keys(myObject);
 console.log(myArray);

 function isItObject(obj) {
   for (let value of Object.values(obj)){
     //array és null is object
    if(typeof value === 'object' && value !== null){
      console.log("ez egy ojjjjektum");
    } else {
     console.log("ez NEM ojjjjektum");
    } 
   }
 }

 isItObject(myObject);

}
window.addEventListener("load", pageLoad);

/*for ciklus, benne if else
ha ez egy objectum
„ez egy objektum”
ha nem objektum akkor 
„nem objektum”*/