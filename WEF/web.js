// const clickbox = document.querySelectorAll('.gameArea div')
// console.log(clickbox[1])

const  clickbox = Array.prototype.slice.call(document.querySelectorAll('.gameArea div'))
let round = 0
let boxnumber = 0

const roundDisplay = document.querySelector('.d3')

function checkWin(){
    if(round !== 0){
    if (checklist[0] === checklist[1] && checklist[0] ===checklist[2]){
        return true
    }else if(checklist[0] === checklist[3] && checklist[0] ===checklist[6]){
        return true
    }else if(checklist[0] === checklist[4] && checklist[0] ===checklist[8]){
        return true
    }else if(checklist[1] === checklist[4] && checklist[1] ===checklist[7]){
        return true
    }else if(checklist[2] === checklist[4] && checklist[2] ===checklist[6]){
        return true
    }else if(checklist[2] === checklist[5] && checklist[2] ===checklist[8]){
        return true
    }else if(checklist[3] === checklist[4] && checklist[3] ===checklist[5]){
        return true
    }else if(checklist[6] === checklist[7] && checklist[6] ===checklist[8]){
        return true
    }}
}

checklist = [null,null,null,null,null,null,null,null,null]

console.log('check type:', Array.isArray(clickbox))

// for (let i = 0 ; i < clickbox.length; i++){
//     clickbox[i].id = i;
//     clickbox[i].addEventListener("click",()=>{
//         // console.log("check i",i)
//         if(round % 2 == 0){
//             clickbox[i].innerHTML = '<img class="gameimage" content = "o" src="./image/circle.svg">'
//             checklist[i] = 'o'
//             console.log(checklist)
//             roundDisplay.innerText = 'X Turn'
//             if(checkWin()){
//                 window.alert("O win")
//             }
//         } 
//         else{
//             clickbox[i].innerHTML = `<img class="gameimage" content = "x" src="./image/x-lg.svg">`
//             checklist[i] = 'x'
//             console.log(checklist)
//             roundDisplay.innerText = 'O Turn'
//             if(checkWin()){
//                 window.alert("X win")
//             }
//         }      
        
//         round++
//     })

// }


for (let i of clickbox){
    console.log('add listener:', boxnumber)
    let currentNumber = 0

    // console.log('check number hi:', currentNumber)
    i.addEventListener("click", () => {
        // console.log(i)
        if (round%2 === 0){
            indexOfI = clickbox.indexOf(i)
            i.innerHTML = '<img class="gameimage" content = "o" src="./image/circle.svg">'
            // currentNumber = boxnumber
            // console.log('check current number ', boxnumber)
            checklist[clickbox.indexOf(i)] = 'o'
            console.log(checklist)
        } else {
            i.id = boxnumber
            i.innerHTML = `<img class="gameimage" content = "x" src="./image/x-lg.svg">`

            checklist[clickbox.indexOf(i)] = 'x'
            console.log(checklist)
        }
        round++
           
        
    })
    i.classList.add(`box${boxnumber+1}`)
    boxnumber++
}


// document.querySelector('.gameArea').onclick = function(event){ 
//     // The event object contains the information about the event
//     console.log("Test is clicked!");
// }

