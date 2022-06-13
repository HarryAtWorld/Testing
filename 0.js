


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

a = 1
b = 2
c = 3
d = 4
e = 5
f = 6

for (let i = 0; i<6; i++){

    listA = [a, b, c, d, e, f] = [b,a,d,c,f,e]

    console.log(listA)

}
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
