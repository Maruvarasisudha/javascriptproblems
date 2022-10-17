

    function myfunction() {
        let n = parseInt(document.getElementById("demo").value);
    
        let num =1; count = 0;
        while(count<n){
            num = num +1;
        for(var i=2; i<=num; i++) {
            if(num % i == 0) {
                break;
                
            }
        }
        if(i == num){
            count = count+1;
           
            
        }
    }
    console.log(num);
    
    }

