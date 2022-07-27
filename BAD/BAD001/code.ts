export function factorial(num: number): number {
    if (num == 0 || num == 1) {
        return 1;
    }
    return factorial(num - 1) * num
}

export function fibonacci(num: number): number {
    if (num == 1 || num == 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}


export function FizzBuzz(input: number) {

    let result: Array<string> = []

    for (let i = 1; i <= input; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                result.push('Fizz Buzz')
            } else {
                result.push('Fizz')
            }
        } else if (i % 5 == 0) {
            result.push('Buzz')
        } else {
            result.push(`${i}`)
        }
    }
    return result
}


export let F = {

    f1: function sf1() {
        console.log('sf1')
    },


    f2: function sf2() {
        console.log('sf2')
    },


    f3: {
        if3: function sf3() {
            console.log('sf3')
        },
        if4: function sf4(){
            console.log('sf4')
        }
    }    

}


