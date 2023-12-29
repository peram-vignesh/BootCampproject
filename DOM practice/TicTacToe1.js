var id1=$('#id1')
var id2=$('#id2')
var id3=$('#id3')
var id4=$('#id4')
var id5=$('#id5')
var id6=$('#id6')
var id7=$('#id7')
var id8=$('#id8')
var id9=$('#id9')
var button=$('button')
function assign (number,id){
    if (number%2==0){
        id.text('X')
    }
    else{
        id.text('O')
    }
}
var i=0

id1.click(function (){
        assign(i,'id1')
        i=i+1
})
id2.click(function (){
        assign(i,'id2')
        i=i+1
})
id3.click(function (){
        assign(i,'id3')
        i=i+1
})
id4.click(function (){
        assign(i,'id4')
        i=i+1
})
id5.click(function (){
        assign(i,'id5')
        i=i+1
})
id6.click(function (){
        assign(i,'id6')
        i=i+1
})
id7.click(function (){
        assign(i,'id7')
        i=i+1
})
id8.click(function (){
        assign(i,'id8')
        i=i+1
})
id9.click(function (){
        assign(i,'id9')
        i=i+1
})
   