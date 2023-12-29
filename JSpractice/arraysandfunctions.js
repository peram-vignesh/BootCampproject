function listadd(array1,element){
    array1.push(element)
}
function listpop(array1){
    array1.pop()
}
function listdelete(array1,element){
    delete array1[element]
}
function listoperation(array1,element,array2){
    for(var i=0;i<array2.length;i=i+1){
        if (array2[i]==1){
            listadd(array1,element[i])
        }
        else if(array2[i]==0){
            listdelete(array1,element[i])
        }
        else{
            listpop(array1)
        }
    }
}
const list2=[1,4,4,2,4]
console.log(list2)
listoperation(list2,[1,3,4,,24,2],[1,1,0,13,23,43,2])
console.log(list2)