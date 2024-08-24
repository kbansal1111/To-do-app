let todo_list=[];
show_items();


function addtodo(){
    let input_element=document.querySelector('#todoinput');
    let todo_item=input_element.value;
    let todo_date=document.querySelector('#tododate');
    let date_item=todo_date.value;
    todo_list.push({item:todo_item,duedate:date_item})
    input_element.value=''
    todo_date.value=''
    show_items();
}

function show_items(){
    let containeritems=document.querySelector('.todo_container');
    let newhtml='';
    for(i=0;i<todo_list.length;i++){
        let {item,duedate}=todo_list[i]
        newhtml+=`
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn_delete" onclick="todo_list.splice(${i},1);show_items();
        ">Delete</button>`;
        
    }
    containeritems.innerHTML=newhtml;
}