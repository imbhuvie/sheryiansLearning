// async JS
//callback fncs execut when async code  provide output.
// for async code used
// fetch,XMLHttpRequest,axios,promises,setTimeout,setInterval :to print output we used callback function.
// -----------------------------------------
// setTimeout:--
// console.log(`hello `)
// setTimeout(()=>{console.log(`world!2`)},1000)
// setTimeout(()=>{console.log(`world!3`)},2000)
// setTimeout(()=>{console.log(`world!4`)},3000)
// setTimeout(()=>{console.log(`world!5`)},0)
// setTimeout(()=>{console.log(`It is last setTimeout()`);},2000)


// ----------------------------------------------
//promises:--
// let ans = new Promise((res,rej)=>{
//     if(true){
//         return res();
//     }
//     else{
//         return rej()
//     }
// })

// ans.then(()=>{
//     console.log(`the task done`);
// }).catch(()=>{
//     console.log(`the task not done`);
// })

// -----------------------------------

// let ans1 = new Promise((res,rej)=>{
//     return res(`"task 1 done"`)
// })

// let ans2 = ans1.then((data)=>{
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res(`"task 2 done"`)
//     })
// })

// let ans3 = ans2.then((data)=>{
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res(`"task 3 done"`)
//     })
// })
// ans3.then((data)=>{
//     console.log(data);
// })
//-------------------
// let win = new Promise((res,rej)=>{
//     let number = Math.floor(Math.random()*10)
//     console.log(number);
//     if(number>5){

//         return res()
//     }
//     else{
//         return rej()
//     }
// })
// win.then((score)=>{
//     console.log(`your score  & you WIN`);
// }).catch((score)=>{
//     console.log(`your score  & you LOOSE`);

// })

// ----------------------------------------
// async,await :--
// simple method :
function withoutAsyncWait(){
    fetch(`https://randomuser.me/api/`)
    .then((raw)=>{
        return raw.json()
    })
    .then((data)=>{
        console.log(`without using async and await :-------`);
        console.log(data.results[0].name.title +" "+ data.results[0].name.first +" "+ data.results[0].name.last)
    })
}
withoutAsyncWait();

// using async, await
async function usingAsyncAwait(){
     let raw = await fetch(`https://randomuser.me/api/`)

     let data = await raw.json()
     
     console.log(`using async and await :-------`);
        console.log(data.results[0].name.title +" "+ data.results[0].name.first +" "+ data.results[0].name.last)

}
usingAsyncAwait();

