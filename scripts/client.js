$(document).ready(onReady);

let workers = [];
let salarySum = 0;

function onReady(){
  $("#submitButton").on('click', addWorker);
  $("#tableOut").on('click','.deleteButton', deleteWorker);
}

function addWorker(){
  let newWorker = {};

  newWorker.firstName = $('#firstNameIn').val();
  newWorker.lastName = $('#lastNameIn').val();
  newWorker.id = $('#idIn').val();
  newWorker.jobTitle = $('#jobTitleIn').val();
  newWorker.salary = $('#salaryIn').val();

  workers.push(newWorker);

  displayWorkers(workers);

  $("#firstNameIn").val('');
  $("#lastNameIn").val('');
  $("#idIn").val('');
  $("#jobTitleIn").val('');
  $("#salaryIn").val('');
}

function displayWorkers(){
  let el = $("#tableOut");
  el.empty();
  let salaryTotal = $("#salaryTotal");
  salaryTotal.empty();
  salarySum = 0;

  for (i=0; i<workers.length; i++){
    el.append(`<tr>
    <th>${workers[i].firstName}</th>
    <th>${workers[i].lastName}</th>
    <th>${workers[i].id}</th>
    <th>${workers[i].jobTitle}</th>
    <th>${workers[i].salary}</th>
    <th><button class="deleteButton" data-index="${i}">Delete!</button></th>
    </tr>`);

    salarySum += parseInt((workers[i].salary).replace(/\$|,/g, ''));
  }
  let monthlyCosts = (salarySum/12).toFixed(2);
  salaryTotal.append(`Salary Total: ${monthlyCosts}`);
  if(monthlyCosts > 20000){
    salaryTotal.css("background-color","red");
  } else {
    salaryTotal.css("background-color","white");
  }
}
function deleteWorker(){
  workers.splice( $( this ).data( 'index' ), 1);
  displayWorkers(workers);
}
