//event handler
$('#shipping').change(displayCustomerInfo);
$('#paymentBtn').on('click', function(event){
  event.preventDefault()
  $('#payment').tab('show')
})
$('#confirmationBtn').on('click', function(event){
  event.preventDefault()
  $('#confirmation').tab('show')
})
$('#shipping').on('click', function (event) {
  event.preventDefault()
  $('#shipping').tab('show')
})

$('#payment').on('click', function (event) {
  event.preventDefault()
  $('#payment').tab('show')
})

$('#confirmation').on('click', function (event) {
  event.preventDefault()
  $('#confirmation').tab('show')
})

//function

function displayCustomerInfo(){
  var userFirstName = $('#firstName').val();
  var userLastName = $("#lastName").val();

  //displaying the user's name together
  $('#customerNameOutput').text(`${userFirstName} ${userLastName}`);

  //getting the users address, city,state, and zip
  var userAddressOne = $('#address').val();
  var userState = $('#state').val();
  var userZip = $('#zip').val();

  //display address all together
  $('#addressOutput').text(`${userAddressOne} ${userState} ${userZip}`);


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()}
