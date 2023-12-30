var id1=document.querySelector('#id1')
var id2=document.querySelector('#id2')
var id3=document.querySelector('#id3')
var id4=document.querySelector('#id4')
var id5=document.querySelector('#id5')
var id6=document.querySelector('#id6')
var id7=document.querySelector('#id7')
var id8=document.querySelector('#id8')
var id9=document.querySelector('#id9')
var button=document.querySelector('button')
var boxes=document.querySelectorAll('td')
function assign (number,id){
    if (number%2==0){
        id.textContent='X'
    }
    else{
        id.textContent='O'
    }
    console.log(id)
}
var i=0

id1.addEventListener('click',function (){
        assign(i,id1)
        i=i+1
})
id2.addEventListener('click',function (){
        assign(i,id2)
        i=i+1
})
id3.addEventListener('click',function (){
        assign(i,id3)
        i=i+1
})
id4.addEventListener('click',function (){
        assign(i,id4)
        i=i+1
})
id5.addEventListener('click',function (){
        assign(i,id5)
        i=i+1
})
id6.addEventListener('click',function (){
        assign(i,id6)
        i=i+1
})
id7.addEventListener('click',function (){
        assign(i,id7)
        i=i+1
})
id8.addEventListener('click',function (){
        assign(i,id8)
        i=i+1
})
id9.addEventListener('click',function (){
        assign(i,id9)
        i=i+1
})
button.addEventListener('click',function (){
    id1.textContent=''
    id2.textContent=''
    id3.textContent=''
    id4.textContent=''
    id5.textContent=''
    id6.textContent=''
    id7.textContent=''
    id8.textContent=''
    id9.textContent=''
})