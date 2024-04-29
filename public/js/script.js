$(document).ready(function() {
  $('.modal').modal();

  const socket = io();

  socket.on('topic created', (topic) => {
    console.log('New topic created:', topic);
  });

  // Listen for the 'number' event from the server
  socket.on('number', (msg) => {
    console.log('Random number:', msg);
  });

  $('#formSubmit').click(() => {
    submitForm();
  });
});

const postTopic = async (topicData) => {
  try {
    const response = await fetch('/api/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(topicData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting topic:', error);
    return null;
  }
};

const submitForm = () => {
  let formData = {};
  formData.title = $('#title').val();
  formData.subTitle = $('#subTitle').val();
  formData.path = $('#path').val();
  formData.description = $('#description').val();
  console.log(formData);
  postTopic(formData);
};
