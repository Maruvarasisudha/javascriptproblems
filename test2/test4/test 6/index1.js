let sudentlist=[]
let arrayvalue=[]
$(document).ready(function(){
    $("#demo").click(function () {

let name=$("#input1").val();
let age =$("#input2").val();
let lastname=$("#input5").val();
let email =$("#input4").val();
let phonenumber=$("#input3").val();



if (name) {
    console.log({"name":name});
}if (age) {
    console.log({"age":age});
}if (lastname) {
    console.log({"lastname":lastname});
}if (email) {
    console.log({"email":email});
}if (phonenumber) {
    console.log({"phonenumber":phonenumber});
}

let result={"name":name,"age":age,"lastname":lastname,"email":email,"phonenumber":phonenumber};

if (name&&age&&email&&phonenumber&&lastname) {
    sudentlist.push(result)
    localStorage.setItem("student", JSON.stringify(sudentlist))
    bulidTable()
}else {
    console.log("");

}
location.reload(true);
});
});
   
function bulidTable(){
console.log(sudentlist)
sudentlist = JSON.parse(localStorage.getItem("student"));
console.log(sudentlist)
arrayvalue.push(sudentlist)
console.log(arrayvalue)
jQuery.each(sudentlist,function (key, value) {
        jQuery("#tabbody").append('<tr><td>' + value.name + '</td><td>' + value.lastname +'</td><td>'+ value.age + '</td><td>' + value.phonenumber + '</td><td>' + value.email +  '</td></tr>');
        });
  
    }
    document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
});

