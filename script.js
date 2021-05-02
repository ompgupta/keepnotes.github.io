const AddBtn =document.getElementById('add');

//update local storage data
const updateLSdata =() =>{
    const TextareaData = document.querySelectorAll('Textarea');
    const notes =[];
    // console.log(TextareaData);
    TextareaData.forEach((note) =>{
    return notes.push(note.value);
    })
    // console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}

const AddnewNote= (text = '') =>{
 const note =document.createElement('div');
 note.classList.add('notes');

 const htmlData = `<div class="oprations">
 <button class="edit btn2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
 </button>
 <button class="del btn2"><i class="fa fa-trash" aria-hidden="true"></i>
 </button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ?"hidden" : " "}" id="" cols="30" rows="100"></textarea>`;
note.insertAdjacentHTML('afterbegin', htmlData);
document.body.appendChild(note);

//   getting the reference...
const Editbtn =note.querySelector('.edit');
const Delbtn =note.querySelector('.del');
const Main_div =note.querySelector('.main');
const Textarea =note.querySelector('textarea');

//deleting the note........
Delbtn.addEventListener('click', ()=>{
note.remove();
updateLSdata();
})

Textarea.value = text;
Main_div.innerHTML = text;
//toggle using edit button
Editbtn.addEventListener('click', ()=>{
    Textarea.classList.toggle('hidden');
    Main_div.classList.toggle('hidden');
})

Textarea.addEventListener('change', (Event)=>{
    const value = Event.target.value;
    // console.log(value);
    Main_div.innerHTML = value;
    updateLSdata();
})


}
AddBtn.addEventListener('click',() => AddnewNote())
//getting data back from local storage
const Getdata = JSON.parse(localStorage.getItem('notes'));
if(Getdata){ Getdata.forEach((getData) => AddnewNote(getData))}

