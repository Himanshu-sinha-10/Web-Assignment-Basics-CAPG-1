function multiplicationTable(x){
    for(var i=1;i<=10;i++){
        let temp=x*i;
        console.log(`${x} * ${i} = ${temp}`);
    }
}
multiplicationTable(5);