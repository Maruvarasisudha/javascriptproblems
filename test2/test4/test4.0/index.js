
let div= 0
let div1=0
function myfunction(){
for(i=200;i<300;i++){
if(i%4==0&&i%6==0&&i%8==0){
div=div+i

}

}
for(j=400;j<800;j++){
    if(j%25==0&&j%45==0){
    div1=div1+j
    
    }
     
    }
    
    console.log(div+div1)}