//define functions here
 function getIt(){
  $('p').on("click" , function (){
     alert("hey");
  })
  }
  
function frameIt(){
$('img').on('load', function (){
    
 })
  }
function pressIt(){
$('').on('keydown', function(){
})
}

function submitIt(){
$('form').on('submit',function(){
  if($('inpit:first').val()=== 'correct'){
    alert('Your form is going to be submitted now.');
    return;
  }
  alert('you entered the wrong value');
  return;
})
}

$(document).ready(function(){

// call functions here

});
