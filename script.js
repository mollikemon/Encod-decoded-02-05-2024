let tom=document.getElementById('tex-bar');
let jery=document.getElementById('text-bar');
///....................................................///
function cercel(){
    let tom=document.getElementById("tex-bar").value;
    document.getElementById("text-bar").value=btoa(tom);
}
function carkaj(){
    let jery=document.getElementById("text-bar").value;
    document.getElementById("tex-bar").value=atob(jery); 
}

///..........................................///
function copy(){
     if(tom.value!==""){
        navigator.clipboard.writeText(tom.value);
     }
}
function cut(){
    if(jery.value!==""){
        navigator.clipboard.writeText(jery.value);
    }
}
///..................................................///

function texremove(){
    tom.value="";
}
function ollremove(){
    jery.value="";
}
///.................................................///
// ..................................................//



let inputBox =document.getElementById('input-box');
let listContainer =document.getElementById('list-container');

function addTask(){
    if(inputBox.value ===''){
        alert("you must write something!")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML ="\u00d7";
        
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // console.log(e.target.parentElement.classList.value)
        if(e.target.parentElement.classList.value===""){
            e.target.parentElement.remove();
        }

        // e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();





