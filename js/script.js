// Čia bus rašomas Javascript/jQuery kodas.

/* Standartinė jQuery funkcija */
/* DOM - Document Object Model */
var newTaskCount = 0;
$(document).ready(function() {
    // Palaukia, kol visas HTML/CSS kodas bus užkrautas iš serverio naršyklėje.
    // alert("Document is ready!");
    // document.getElementById("inputText").value

    /* Click - Event Listener PVZ. */
    /* $("#add_task").click(function(event) {
        // Kodas aprašytas čia, bus vykdomas, kai paspaudžiamas mygtukas

        // Ji sustabdo puslapį nuo persikrovimo pateikus formą
        event.preventDefault();
        
        // Gauname elementa kuris naudojamas uzduoties pavadinimui
        let taskInput = $("#task_name");
        
        // Gauname input laukelio reiksme ir issaugome ja kaip kintamaji
        let taskName = taskInput.val();

        // Isvalome input laukelio reiksme (value)
        taskInput.val("");

        console.log(taskName);
    }); */

    /* Submit - Event Listener */
    $("#task_form").submit(function(event) {
        event.preventDefault();

        // Gauname elementa kuris naudojamas uzduoties pavadinimui
        let taskInput = $("#task_name");
        
        // Gauname input laukelio reiksme ir issaugome ja kaip kintamaji
        let taskName = taskInput.val();

        // Isvalome input laukelio reiksme (value)
        taskInput.val("");

        addTask(taskName);
        
    });

    // Nauja funkcija atvaizduoti naujai pridetai uzduociai.
    function addTask(taskName) {
        console.log(taskName);
        let taskList = $("#task_list");

        let dynamicTaskID = `checkbox_${newTaskCount}`;

        // taskList.append('Labas');
        /* Funkcija prepend, prideda papildomus html elementus i elemento pradzia */
        taskList.prepend(`
        <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="${dynamicTaskID}">
            <label class="form-check-label" for="${dynamicTaskID}">${taskName}</label>  
        </li>`);

        newTaskCount++; // newTaskCount = newTaskCount + 1;
    }
});