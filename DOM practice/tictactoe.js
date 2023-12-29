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
for (i=0;i<9;i+=1){
    if (i%2==0){}
}
id1.addEventListener('click',function(){
    id1.textContent='X'
})
id2.addEventListener('click',function(){
    id2.textContent='X'
})
id3.addEventListener('click',function(){
    id3.textContent='X'
})
id4.addEventListener('click',function(){
    id4.textContent='X'
})
id5.addEventListener('click',function(){
    id5.textContent='X'
})
id6.addEventListener('click',function(){
    id6.textContent='X'
})
id7.addEventListener('click',function(){
    id7.textContent='X'
})
id8.addEventListener('click',function(){
    id8.textContent='X'
})
id9.addEventListener('click',function(){
    id9.textContent='X'
})
id1.addEventListener('dblclick',function(){
    id1.textContent='O'
})
id2.addEventListener('dblclick',function(){
    id2.textContent='O'
})
id3.addEventListener('dblclick',function(){
    id3.textContent='O'
})
id4.addEventListener('dblclick',function(){
    id4.textContent='O'
})
id5.addEventListener('dblclick',function(){
    id5.textContent='O'
})
id6.addEventListener('dblclick',function(){
    id6.textContent='O'
})
id7.addEventListener('dblclick',function(){
    id7.textContent='O'
})
id8.addEventListener('dblclick',function(){
    id8.textContent='O'
})
id9.addEventListener('dblclick',function(){
    id9.textContent='O'
})
button.addEventListener('click',function(){
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
