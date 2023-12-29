var head1=document.querySelector('#one')
var head2=document.querySelector('#two')
var head3=document.querySelector('#three')
console.log(head3)
head1.addEventListener("mouseout",function(){
    head1.textContent='Hover Over me!';
    head1.style.color='blue';
})
head1.addEventListener("mouseover",function(){
    head1.textContent='Mouse Over me!';
    head1.style.color='green';
})
head2.addEventListener("click",function(){
    head2.textContent='I got Clicked';
    head2.style.color='red';
})
head3.addEventListener("dblclick",function(){
    head3.textContent='I got Clicked twice';
    head3.style.color='brown';
})  