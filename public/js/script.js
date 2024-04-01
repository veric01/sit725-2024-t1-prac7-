document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var form = document.getElementById('submit-form');

  const submitForm = () => {
    let formData = {};
    formData.first_name = document.getElementById('first_name').value;
    formData.last_name = document.getElementById('last_name').value;
    formData.password = document.getElementById('password').value;
    formData.email = document.getElementById('email').value;
    console.log("Form Data Submitted: ", formData);
  };

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      submitForm(); 
    });
  } else {
    console.error("Form element with ID 'submit-form' not found.");
  }

 
  function onDocumentReady() {
    $('.materialboxed').materialbox(); 
    $('#formSubmit').click(submitForm); 
    if (typeof addCards === 'function') {
      addCards(cardList);
    }
    $('.modal').modal(); 
  }

  
  $(document).ready(onDocumentReady);
});
