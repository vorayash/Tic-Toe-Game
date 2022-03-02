
let buttons = document.getElementsByTagName("td");
let click = 1;

let flag=true;

for (button of buttons) {
  button.addEventListener('click', mark);
  function mark(e) {
    console.log(e.target.parentElement.id);
    if (click %2!= 0) {
      e.target.innerHTML += `O`;
      click++;
      e.target.removeEventListener("click", mark);

    }
    else if (click %2 ==0) {
      e.target.innerHTML = `X`;
      click++;
      e.target.removeEventListener("click", mark);
    }


    let a = document.getElementById("1").innerHTML;
    let b = document.getElementById("2").innerHTML;
    let c = document.getElementById("3").innerHTML;
    let d = document.getElementById("4").innerHTML;
    let E = document.getElementById("5").innerHTML;
    let f = document.getElementById("6").innerHTML;
    let g = document.getElementById("7").innerHTML;
    let h = document.getElementById("8").innerHTML;
    let i = document.getElementById("9").innerHTML;
    
    
    if (a == 'O') {
      if (b == 'O') {
        if (c == 'O') {
          
          result("Player A Won");
        }
      }
      else if (E == 'O') {
        if (i == 'O') {
          result("Player A Won");
        }
      }
      else if (d == 'O') {
        if (g == 'O') {
          result("Player A Won");
        }
      }
    }
    if (d == 'O') {
      if (E == 'O') {
        if (f == 'O') {
          result("Player A Won");
        }
      }
    }
    if (g == 'O') {
      if (E == 'O') {
        if (c == 'O') {
          result("Player A Won");
        }
      }
      else if (h == 'O') {
        if (i == 'O') {
          result("Player A Won");
        }
      }
    }
    if (b == 'O') {
      if (E == 'O' && h == 'O') {
        result("Player A Won");
      }
    }
    if (c == 'O' && f == 'O' && i == 'O') {
      result("Player A Won");
    }

    if (a == 'X') {
      if (b == 'X') {
        if (c == 'X') {
          result("Player B Won");
        }
      }
    if (E == 'X') {
        if (i == 'X') {
          result("Player B Won");
        }
      }
      else if (d == 'X') {
        if (g == 'X') {
          result("Player B Won");
        }
      }
    }
    if (d == 'X') {
      if (E == 'X') {
        if (f == 'X') {
          result("Player B Won");
        }
      }
    }
    if (g == 'X') {
      if (E == 'X') {
        if (c == 'X') {
          result("Player B Won");
        }
      }
      else if (h == 'X') {
        if (i == 'X') {
          result("Player B Won");
        }
      }
    }
    if (b == 'X') {
      if (E == 'X' && h == 'X') {
        result("Player B Won");
      }
    }
    if (c == 'X' && f == 'X' && i == 'X') {
      result("Player B Won");
    }
    if(click==10 && flag==true)
    {
      setTimeout(() => {
        alert("Tie");
       document.location.reload();
      }, 0);
    }


  }
}

function result(string){
  flag=false;
setTimeout(() => {
  alert(string);
 document.location.reload();
}, 0);


}