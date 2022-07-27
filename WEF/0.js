


// let a = { size:100, check: ()=>{ return "aaa"} }

// console.log(a.check)

// function ac(x){
//     let num = x

//     return Object.freeze({
//         add:(y)=>{
//             x = x+y
//             return x},

//         reduce:(y)=>{
//             x = x-y        
//             return x}

//     })
// }

// function ac(x){
//     let num = x

//     function add(y){
//         x = x+y
//         return x
//     }

//     function reduce(y){
//         x = x-y
//         return x
//     }

//     return {add}
// }

// let e = ac(500)
// e.add(600)

// let p = ac(20)
// p.add(70)


// console.log(e.add(600))
// console.log(p.add(60))
// console.log(typeof(ac))
// console.log(typeof(e))


// list = [10,20,30,40,50,60,70]

// i = 1

// // for ( i ; i <= 6; i++) {
// //     console.log(i)
// // }

// // for (let i of list){
// //     console.log(i)
// // }

// console.log(i)

// function a(){
//     let number = 10

//     function insideA(x){
//          number = number + x

//         return number

//     }

//     function checkCurrent(){
//         return number
//     }

//     return { 
//         number,
//         insideA,
//         checkCurrent
//     }
// }

// m = a()

// m.insideA(30)
// m.insideA(30)
// m.insideA = function h(num) {   // can directly change the inside function, unless 'freeze' used when return. can't directly change the value here
//         return 5000 +num
//   }

// console.log(m.number, m.insideA(30), m.checkCurrent())

// function createListNode(value) {
//     return {
//         value,
//         next: null,
//     };
// }

// function createSinglyLinkedList() {

//     let head = null;

//     return Object.freeze({
//         addNewNode: (value) => {
//             const newNode = createListNode(value);
//             if (head === null) {
//                 head = newNode;
//                 return;
//             }

//             let current = head;
//             while (current.next !== null) {
//                 current = current.next;
//             }

//             // current now is the last node of the list !!
//             current.next = newNode;
//         },
//         displayAllNodeValues: () => {
//             if (head === null) {
//                 console.log("the list is empty!!!");
//                 return;
//             }

//             let current = head;
//             do {
//                 console.log(current.value);
//                 current = current.next;
//             } while (current !== null);
//         },
//         displayMiddleNodeValue: () => {


//             let listLength = 1

//             if (head === null) {
//                 listLength = 0

//                 return;
//             }


//             let current = head;
//             do {
//                 listLength++;
//                 current = current.next;
//             } while (current.next !== null)

//             console.log('list length: ' + listLength)

//             let midIndex = Math.ceil(listLength/2)
//             console.log('list Mid Index: ' + midIndex)

//             let midValue;
//             for (let i = 0; i<= midIndex; i++){
//                 midValue = head.next
//             }

//             console.log('list Mid Value: ' + midValue.value)






//         },
//     });
// }

// list = createSinglyLinkedList()

// list.addNewNode(2)
// list.addNewNode(3)
// list.addNewNode(5)
// list.addNewNode(6)
// list.addNewNode(10)

// list.displayAllNodeValues()
// list.displayMiddleNodeValue()


// console.log(Math.round(16/10)*10 )

// a = 1
// b = 2
// c = 3
// d = 4
// e = 5
// f = 6

// for (let i = 0; i<6; i++){

//     listA = [a, b, c, d, e, f] = [b,a,d,c,f,e]

//     console.log(listA)

// }
//=========================================================================================


// list = [[8,8]]

// function add(x,y) {
//     if (list.some((i) => i.join() === [x,y].join())){
//         // console.log('X')
//     }else{
//         list.push([x, y]);
//         //  console.log(list.some((i) => i.join() === [x,y].join()))
//         //  console.log( [x,y].join())
//     }

// }

// function addSurround(x,y) {    
//     add(x,y);
//     add(x,y - 1);
//     add(x,y + 1);
//     add(x - 1,y);
//     add(x - 1,y - 1);
//     add(x - 1,y + 1);
//     add(x + 1,y);
//     add(x + 1,y - 1);
//     add(x + 1,y + 1);
// }

// function remove(x, y) {
//     list = list.filter((i) => i.join() !== [x, y].join())
// }

// addSurround(1,3);
// addSurround(1,3);
// addSurround(1,4);



// console.log(list , ' List Length: ', list.length)
// remove(1, 4);
// console.log(list , ' removed List Length: ', list.length)

//==============================



// let i = 1
// while (i < 5) {

//     async function p() {
//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() => resolve(`${i} done!`), 1000)
//         });

//         console.log(await promise)
//     }
//     p()


//     i++
// }

// for(let i =1 ; i<5; i++){
//     async function p() {
//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() => resolve(`${i} done!`), 1000)
//         });

//         console.log(await promise)
//     }
//     p()
// }

// let i = 0

// async function re() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${i} done!`), 1000)
//     });
//     console.log(await promise)


//     if (i < 5) {
//         re()
//     }
//     i++
// }

// re()

// console.log('last line')

//=========================================================================================

// function f1() {
//     console.log('this is Function 1')
// }

// function f2() {
//     console.log('this is Function 2')
// }

// function f5() {
//     console.log('this is Function 5')
// }

// function f4() {
//     console.log('this is Function 4')
// }

// async function syncf3() {
//     console.log('this is syncf3 1st print')

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     // let result = await promise; // 等待，直到 promise resolve (*)

//     // console.log('this is syncf3 2st print , with result:', result)
//     console.log('this is syncf3 2st print , with result:', await promise)

//     console.log('this is syncf3 3rd print')


// }


// f1()
// f2();
// syncf3();
// f4();
// f5();


// let i = 0

// async function po() {

//     return promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(false), 1000)
//     });
// }




// async function print() {
//     let p = po()

//     console.log( await p)

//     if( await p){
//         console.log('ok')
//     }

//     i++

//     if(i<5){
//         print()
//     }
// }



// print()

// console.log('last line')


var value = 1;

var foo = {
    value: 5,
    bar: function () {
        return this.value;
    }
}

// //範例1
// console.log(foo.bar());
// //範例2
// console.log((foo.bar)());
// //範例3
// console.log((foo.bar = foo.bar)());
// //範例4
// console.log((false || foo.bar)());
// //範例5
// console.log((foo.bar, foo.bar)());



// function fo(inputFunction){
//     let value= 5

//     return inputFunction()

// }

// function ba(){
//     return this.value
// }

// let ba2 = ()=>{
//     return this.value
// }


// // console.log(fo(ba2))


// function hello(){
//     console.log(this)
//   }

//   hello()


//==================================================================================================================


let a = 'global a'

// function f1() {
//     let a = 1



//     f2()
// }

// let f22 = ()=>{ console.log(this.a)}





let f11 = {
    a: 11,
    f22: printObjectInside
}

let f1111 = {
    a: 1111,
    f22: printObjectInside

}


function printObjectInside() {
    console.log('this is print inside Function:', this.a)
}

let f111 = {
    a: 111,
    f22: function () {
        let k = () => {
            console.log('f11144444.22', this.a)
        }
        k()
    }
}


let f33 = {
    a: 33,
    f22: f11.f22

}

function f4() {
    let a = "f4's a"
    f11.f22()


}


f11.f22()
f1111.f22()
f111.f22()
f33.f22()
f4()
console.log('break--------------------------------------------------------------------------')

const obj = {
    x: 1,
    hello: function () {
        // 這邊印出來的 this 是什麼，test 的 this 就是什麼
        // 就是我說的：
        // 在宣告它的地方的 this 是什麼，test 的 this 就是什麼
        console.log('111111', this.x)
        const test = () => {
            console.log('22222222222222', this.x)
        }
        test()
    }
}

obj.hello() // 1
//   const hello = obj.hello
//   hello() // undefined