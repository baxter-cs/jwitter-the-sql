function getUsernameFromForm() {
    return $('#username').val();
}

function getPasswordFromForm() {
    return $('#password').val();
}

function login(username, password) {
    var data = {
        username: username,
        password: password
      };
  $.ajax({
    method: 'POST',
    url: '/auth/login',
    data: JSON.stringify(data),
    dataType: "json",
    contentType: "application/json",
    success: function(data) {
      if (data['success']) {
        Materialize.toast("Logged In", 2000, 'rounded light-green accent-4');
      } else {
        Materialize.toast("Login Failed :(", 2000, 'rounded red accent-4');
      }
    }

  });
}

$(document).ready(function(){
    $('#login').click(function() {
        login(getUsernameFromForm(), getPasswordFromForm())
    });
    $('#signup').click(function() {
        alert("You tried to signup with username: " + getUsernameFromForm() + " password: " + getPasswordFromForm());
    });
});