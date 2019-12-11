$(function () {
  $(document).on('click', '#privateTest', buttonClick)
  $(document).on('click', '#signInBtn', signInClick)
  const $form = $('#signup-form');
  const $message = $('#message');

  $form.submit(function (event) {
    event.preventDefault();

    $message.html('');

    const data2 = $form.serialize();

    $.ajax({
      url: 'http://localhost:3000/account/create',
      type: 'POST',
      data: data2,
      withCredentials: true,


    }).then(() => {
      $message.html('<span class="has-text-success">Success! You are now signed up</span>');
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not signed up in. Check your email and password and your internet connection.</span>');
    });
  });
});
export async function signInClick() {
  alert("Clicked!")
  let username = document.getElementById('nameSignIn').value
  let password = document.getElementById('passSignIn').value

  const data2 = $form.serialize();

  $.ajax({
    url: 'http://localhost:3000/account/login',
    type: 'POST',
    data: data2,
    withCredentials: true,


  }).then(() => {
    $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
  }).catch(() => {
    $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
  });
}
export async function buttonClick() {
  alert("Hello")

  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/private"
  });
  async function createAuthor({Name = ''}) {
    return await pubRoot.post('/test', {
      data: {Name},
      withCredentials: true
    })
  }
    (async () => {
    await createAuthor({
      Name: "Bob",

    });
    })();
  
}

const $form = $('#signin-form');
const $message = $('#message1');

$form.submit(function (event) {
  event.preventDefault();

  $message.html('');

  const data2 = $form.serialize();
  console.log(data2);

});


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $.ajax({
    url: 'http://localhost:3000/account/create',
    type: 'POST',
    data:
    {
      "name": profile.getName(),
      "pass": "1234"
    },
    withCredentials: true,
  });
  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;

  console.log("ID Token: " + id_token);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://http://localhost:3000/account/create');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function () {
    console.log('Signed in as: ' + xhr.responseText);
  };
  // Useful data for your client-side scripts:
  var profile1 = googleUser.getBasicProfile();
  //document.getElementById("demo").innerHTML ='Full Name: ' + profile.getName();
  // The ID token you need to pass to your backend:
  var id_token1 = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token1);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://http://localhost:3000/account/login');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    console.log('Signed in as: ' + xhr.responseText);
  };

}

function onSignUp(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  //document.getElementById("demo").innerHTML ='Full Name: ' + profile.getName();
  $.ajax({
    url: 'http://localhost:3000/account/create',
    type: 'POST',
    data:
    {
      "name": profile.getName(),
      "pass": "1234"
    },
    withCredentials: true,
  });

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://http://localhost:3000/account/create');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    console.log('Signed in as: ' + xhr.responseText);
  };
  // xhr.send('idtoken=' + id_token);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}