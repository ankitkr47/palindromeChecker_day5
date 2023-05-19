const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click",palindrome);

function palindrome(){
    const word = document.querySelector(".input-text").value;

    let len = word.length;
    let flag = true;

    for(let i=0;i<=len/2;i++){
        if(word[i]!==word[len-1-i]){
            result.innerHTML = word +" is not palindrome";
            flag = false;
        }
    }
    if(flag===true){
        result.innerHTML = word + " is palindrome";
    }

}
