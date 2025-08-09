function suggestionoutfit(){
               let temp=document.getElementById("tempinput").value;
               let suggestion="";
               if(temp===""){
                suggestion="Please enter a temperature!"
               }
               else if(temp<10){
                suggestion="☃️It's cold Dude!Wear a thick jacket.";
               }
               else if(temp<20){
                suggestion="🆒It's cool! Wear a light sweater.";
               }
               else if(temp < 30){
                suggestion="😎Nice weather yaar! wear casual clothes.";
               }
               else{
                suggestion="🥵It's hot Bro! Wear shorts and drink water."
               }
               document.getElementById("result").innerText=suggestion;

            }