// const div = document.getElementsByClassName('parent');
// console.log(div)
// div[0].innerHTML= "<h2 style = color:green> vikas </h2>";
// const h1 = document.createElement("h1");
// div[0].appendChild(h1);
// h1.innerText = "element is created";
// h1.style.backgroundColor = "yellow";
// h1.style.color = "red"
// const img = document.createElement("img")
// img.src = "dbms.jpg"
// img.setAttribute("height","200px")
// div[0].appendChild(img)
// div[0].removeChild(img)
// console.log(img)
// const display = document.getElementById("disp")
// const button = document.getElementById("btn")
// getData=()=>{
//     display.innerText = "welcome"
//     display.innerHTML = "<h1>welcome</h1>"
// }
// button.addEventListener("click",getData)

// const promise1 = new Promise((resolve,reject)=>{
//     let a = parseInt(Math.random()*1000);
//     console.log(a);
//     if(a>=100 && a<=200){
//         resolve("value of a is resolved");
//     }
//     else{
//         reject("a is rejected");
//     }
// });

// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resoureces have been closed")});


// const promise2 = new Promise((resolve,reject)=>{
//     resolve({name:"Amit",branch:"CSE"});
// });
// promise2.then((data)=>{console.log(data.name)})
// .catch(error=>{console.log(error)})


const response = fetch("https://dummyjson.com/products");
const div1 = document.createElement(div);
// div[0].appendChild(div1)
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        for(let i=0;i<10;i++){
            div1[0].append(res.products[0].title);
        }
    })
    div1.innerText = "data";
})





