function guess(){
    return new Promise((resolve, reject) => {
      const userInp = document.getElementById('userNum').value; 
      const myRandom = Math.floor(Math.random() * 6 + 1);
      if (isNaN(userInp) || userInp == "" || userInp > 6 || userInp < 0) {
        reject(alert("Wrong Input Type"));
        location.reload();

      }
  
      if (userInp == myRandom) { 
        resolve(document.getElementById('result').innerHTML ="Dice " + myRandom +" You got 2 Points");
      } else if (
        userInp == myRandom - 1 ||
        userInp == myRandom + 1
      ) {
        resolve(document.getElementById('result').innerHTML = "Dice " + myRandom +" You got 1 Points");
      } else {
        resolve(document.getElementById('result').innerHTML = "Dice " + myRandom +" You got 0 Points");
      }

      if(window.confirm("do you want to continue")){
        resolve(true);
      }else{
          alert("game End");
          resolve(location.reload());
      }
    });
  };
  
