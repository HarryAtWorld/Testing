import  * as code from "./code"

// import {factorial} from "./code"
// import {fibonacci} from "./code"



test('test 1: factorial(5)',()=>{
    let result:number = code.factorial(5)

    expect(result).toEqual(120)
})

test('test 2: fibonacci(5)',()=>{
    let result:number = code.fibonacci(5)

    expect(result).toEqual(5)
})

test('test 3: FizzBuzz(5)',()=>{
    let result:Array<string> = code.FizzBuzz(15)

    expect(result).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'Fizz Buzz'])
})


code.F.f3.if4()