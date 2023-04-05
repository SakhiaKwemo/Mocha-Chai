const MultTable = (num, depth) => {
    let array = []
    for(let i = 0; i<=depth; i++){
        array.push(num*i)
    }

    return array
}

const avg = (array) => {
    let total =0 
    array.forEach((e)=>{
        total += e
    })    
    if(array.length === 0) {
        return undefined
    }
    return total/array.length
}

// console.log(MultTable(3,10))

module.exports= {MultTable, avg}