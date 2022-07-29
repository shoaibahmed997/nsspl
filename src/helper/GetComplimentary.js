export const GetComplimentary= (obj,item1,item2)=>{
    if(obj[item1]===item2) return true
    if (obj[item2]=== item1) return true
    return false
}