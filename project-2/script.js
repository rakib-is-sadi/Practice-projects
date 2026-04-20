let add = document.getElementById("add");

let friendStatus = document.querySelector("h5");

let check = 0;

add.addEventListener("click", () =>{

  if(check == 0) {

      friendStatus.textContent = "Friends";
      friendStatus.style.color = "green";
      add.textContent = "Remove Friend";
      add.style.backgroundColor = "red";
      check = 1;
  }
  else {
    friendStatus.textContent = "Stranger";
    friendStatus.style.color = "red"
    add.textContent = "Add Friend";
    add.style.backgroundColor = "cadetblue";
    check = 0;
  }

})