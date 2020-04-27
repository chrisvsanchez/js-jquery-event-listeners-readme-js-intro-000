//define functions here
 function getIt(){
  $('p').on("click" , function (){
     alert("hey");
  })
  }
  
function frameIt(){
$('img').on("load", function(){
    $('img').addClass("tasty");
 })
  }
  
function pressIt(){
$('document').on("keypress", function(key){
  if (key.which == 71){
    alert("You pressed G key!");
  }
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
