
let names=["setha","raman","karthika","maruvasi","karthika","setha","elon","elon","veera","mani","karthika" ];




function myfunction(names) {
    var unique = [];
    names.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

console.log(myfunction(names));

let arr=["setha","raman","karthika","maruvasi","karthika","setha","elon","elon","veera","mani","karthika" ];
function removeDuplicates(data){

return data.filter((value,index)=>data.indexOf(value)=== index);



}

console.log(removeDuplicates(arr));





