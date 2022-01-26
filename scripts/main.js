//clase 2
var isImportant = false;
var isAsideVisible = true;

function toggleImportant(){
    console.log("Icon click")

    let icon=$(".iImportant");
    if(isImportant){
        icon.removeClass("fas").addClass("far");
        isImportant = false;
    }
    else{
        icon.removeClass("far").addClass("fas");
        isImportant =   true;
    }
    
}
function toggleDetails(){
    let aside =$("aside");

    if(isAsideVisible){
        aside.hide();
        isAsideVisible=false;
    }
    else{
        aside.show();
        isAsideVisible=true;
    }
}


function saveTask(){
    console.log("Saving task");
    //guardamos lo que se ingresa
    let title = $("#txtTitle").val();
    let dateTime = $("#txtDueDate").val();
    let location=$("#txtLocation").val();
    let description=$("#txtDescri").val();
    let participants=$("#txtParti").val();
    let color =$("#txtColor").val();
    
    let theTask = new Task(isImportant,title,description,location,participants,color,dateTime)
    console.log(theTask);

    displayTask(theTask);
    clearForm();
}
function clearForm() {
    $("#txtTitle").val("");
    $("#txtDueDate").val("");
    $("#txtLocation").val("");
    $("#txtDescri").val("");
    $("#txtParti").val("");
    $("#txtColor").val("");
}

function displayTask(task){
    let syntax= `
    <div class="task">
    <i class="far fa-star "></i>
        <div class="task-tittle">  
            <h3>${task.title}</h3>
            <p>Description: ${task.description}</p>
        </div>

        <div class="detalles">
            <label class="local">Location: ${task.location}</label>
            <label class="date">DateTime: ${task.dateTime}</label>
        </div>
    </div>`;

    $(".task-container").append(syntax);
}

function init(){
    console.log("Calendar")

    //hook events
    $("#btnSave").click(saveTask);

    $(".iImportant").click(toggleImportant);
    $("#btnToggleDet").click(toggleDetails);
}
window.onload=init;