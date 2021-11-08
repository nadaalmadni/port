let add = document.getElementById("increment");
let remove = document.getElementById("derement");
let reset = document.getElementById("reset");
let int = document.getElementById("number");
let integer = 0;

add.addEventListener("click", function(){
integer += 1;
int.innerHTML = integer;
})
remove.addEventListener("click", function(){
integer -=1;
if (int.innerHTML<=0){
    return null;
}

int.innerHTML = integer;
})
reset.addEventListener("click", function(){
    integer =0
    int.innerHTML = integer;
})

