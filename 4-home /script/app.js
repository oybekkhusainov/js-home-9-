let  n =[1,2,3,4,5,6];

    for(let i = 0; i< n.length-1; i++){
        if(1 < n.indexOf(6)){
            let num = n.sort((a,b) => b-a);
            let arr = num.concat(n.sort());
    
            console.log(arr)
            }

    }
    