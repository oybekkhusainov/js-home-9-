function massiv(arr){
    return arr.filter((item,index) => arr.indexOf(item)==index)
}

let removeDups = [1,2,4,6,7,3,2,1];
let tak = massiv(removeDups)
let num  = tak.sort()
document.write(num)