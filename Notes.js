let list=JSON.parse(localStorage.getItem("myNotes")) || [];

const noteFun = () => {
    let inputNote = document.querySelector('#input-box');
   
    if(inputNote.value=== ""){
        alert("please enter note");
        return;
    };

    let record = {text:inputNote.value,date:new Date()};
    list.push(record);
    localStorage.setItem("myNotes",JSON.stringify(list));
    renderNotes();
    inputNote.value= "";


};

const renderNotes = () => {
    let result = document.querySelector('#notes-container');
       result.innerHTML="";

    list.forEach((record,index) => {
        let notecard = document.createElement('div');
        notecard.classList.add('note-card');
        notecard.textContent=record.text;


        let dateGiven = document.createElement('p');
        dateGiven.innerHTML=new Date().toLocaleDateString();
        dateGiven.style.marginLeft="380px";
        dateGiven.style.marginTop="0px"


        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML=` <img src="icons8-delete-64.png" alt="delete" style="width:25px; height:25px;"> `;
        deleteBtn.style.border="none";
        deleteBtn.style.marginTop="70px";
        deleteBtn.style.marginLeft="419px";
        deleteBtn.style.marginRight="10px";

        deleteBtn.addEventListener("click", ()=> {
        list.splice(index,1);
        localStorage.setItem("myNotes",JSON.stringify(list));
        renderNotes();
    });
        notecard.appendChild(dateGiven);
        notecard.appendChild(deleteBtn);
        result.appendChild(notecard);
       
        
       });
};

document.addEventListener("DOMContentLoaded",() => {
    renderNotes();
});

document.getElementById("input-box").addEventListener("keypress",(e) => {
    if(e.key === "Enter") noteFun();
});
