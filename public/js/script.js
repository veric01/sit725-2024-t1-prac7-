document.addEventListener('DOMContentLoaded', function() {
  // Initialize modal
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  // Initialize form
  var form = document.getElementById('submit-form');

  // Define submitForm function
  const submitForm = () => {
    let formData = {};
    formData.first_name = document.getElementById('first_name').value;
    formData.last_name = document.getElementById('last_name').value;
    formData.password = document.getElementById('password').value;
    formData.email = document.getElementById('email').value;
    console.log("Form Data Submitted: ", formData);
  };

  // Add submit event listener to the form if found
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      submitForm(); // Call submitForm function
    });
  } else {
    console.error("Form element with ID 'submit-form' not found.");
  }

  // Function to be executed when document is ready
  function onDocumentReady() {
    $('.materialboxed').materialbox(); // Initialize materialboxed elements
    $('#formSubmit').click(submitForm); // Bind click event to submitForm function
    // Call addCards function if it exists
    if (typeof addCards === 'function') {
      addCards(cardList);
    }
    $('.modal').modal(); // Initialize modal
  }

  // Execute when document is ready
  $(document).ready(onDocumentReady);
});
