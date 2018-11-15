import './test.css'

let fun  = ()=>{
    let a = {
        name:'king',
    }

    let newObj = Object.assign(a,{
        name:'Wang',
        age:23
    })
    console.log(newObj)
    return 1111111
}


fun()