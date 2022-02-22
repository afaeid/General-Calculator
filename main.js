let outputScreen=document.getElementById("output-screen");

function clr() {
   outputScreen.value= ''
}
function display(num) {
  outputScreen.value+= num;
}


function calculate() {
   if(outputScreen.value!=0){
     try {
     outputScreen.value=eval(outputScreen.value)
   } catch (err) {
     alert('invalid number')
   }
   }
}

function del() {
    outputScreen.value=outputScreen.value.slice(0,-1);
}

function login() {
  let passWord = document.getElementById("password");
  if (passWord.value == "aser%%¥¥|") {
    document.getElementById("login").style.display = "none";
    document.getElementById("container").style.display = "flex";
  } else {
    alert("Your password is incorrect! Please try again");
    passWord.value = '';
  }
}
