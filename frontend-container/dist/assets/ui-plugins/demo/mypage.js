function myFunction() {
  alert("Button clicked!!");
}

function getUser() {
  fetch(window.localStorage.getItem('serverUrl') + '/user/current', {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.localStorage.getItem('jwt_token')
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (user) {
    passUser(user);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

function passUser(user) {
  document.getElementById('user_id').value = user.id;
  document.getElementById('username').value = user.username;
  document.getElementById('user_email').value = user.email;
}


