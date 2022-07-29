
export const ObjToArr = (obj)=>{
    let result = []
    for (let i in obj){
        result.push({name:i,state:""})
        result.push({name:obj[i],state:""})
    }
    // return shuffle(result)
    return result.sort(()=>Math.random() -.5)
}