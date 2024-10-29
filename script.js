let symbols = ['!','@','#','$','%','^','&','*']   //we can use strings of the characters as well
let numbers = ['0','1','2','3','4','5','6','7','8','9']
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let capitals = letters.toString().toUpperCase().replaceAll(",","");
capitals = [...capitals];




let all = [...symbols,...letters,...numbers,...capitals];  
let symbols_and_numbers = [...symbols,...numbers,...letters];  
let symbols_and_capitals = [...symbols,...letters,...capitals];  
let numbers_and_capitals = [...numbers,...letters,...capitals];
let numbers_and_letters = [...numbers,...letters];  
let symbols_and_letters = [...symbols,...letters];  
let capitals_and_letters = [...capitals,...letters];   
let password = "";



function generate(){

    password = "";
    let hasSymbols = document.getElementById("symbols").checked;
    let hasNumbers = document.getElementById("numbers").checked;
    let hasCapitals = document.getElementById("capitals").checked;

    var length =  Number(document.getElementById("length").value);

        if(hasSymbols){
            if(hasCapitals){
                if(hasNumbers){
                    for(let i=0;i<length;i++){
                    password += all[Math.floor(Math.random()*all.length)];
                    }
                }
                else{
                    for(let i=0;i<length;i++){
                    password += symbols_and_capitals[Math.floor(Math.random()*symbols_and_capitals.length)];
                    }
                }
            }
            else if(hasNumbers){
                for(let i=0;i<length;i++){
                password += symbols_and_numbers[Math.floor(Math.random()*symbols_and_numbers.length)]
                }
            }
            else{
                for(let i=0;i<length;i++){
                password += symbols_and_letters[Math.floor(Math.random()*symbols_and_letters.length)]
                }
            }
        }
        else if(hasNumbers){
            for(let i=0;i<length;i++){
                password += numbers_and_letters[Math.floor(Math.random()*numbers_and_letters.length)]
            }
        }
        else if(hasCapitals){
            for(let i=0;i<length;i++){
            password += capitals_and_letters[Math.floor(Math.random()*capitals_and_letters.length)]
            }
        }
        else {
            for(let i=0;i<length;i++){
            password += letters[Math.floor(Math.random()*letters.length)]
            }
        }

        document.getElementById('password').textContent = password;
        document.getElementById('generate').textContent = 'Regenerate';
        password = "";
    }
  

