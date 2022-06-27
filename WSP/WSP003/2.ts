
function f1() {
    console.log('this is Function 1')
}

function f2() {
    console.log('this is Function 2')
}

function f5() {
    console.log('this is Function 5')
}

function f4() {
    console.log('this is Function 4')
}

async function syncf3() {
    console.log('this is syncf3 1st print')

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    // let result = await promise; // 等待，直到 promise resolve (*)

    // console.log('this is syncf3 2st print , with result:', result)
    console.log('this is syncf3 2st print , with result:', await promise)

    console.log('this is syncf3 3rd print')


}


f1()
f2();
syncf3();
f4();
f5();

