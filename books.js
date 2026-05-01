
var filterButtons = document.querySelectorAll('.filter-btn');
var shelves = document.querySelectorAll('.shelf');

filterButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {

    filterButtons.forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    var chosen = btn.getAttribute('data-filter');

    shelves.forEach(function(shelf) {
      if (chosen === 'all') {
        shelf.classList.remove('hidden');
      } else {
        if (shelf.getAttribute('data-shelf') === chosen) {
          shelf.classList.remove('hidden');
        } else {
          shelf.classList.add('hidden');
        }
      }
    });

  });
});



var sendBtn = document.getElementById('send-btn');
var feedback = document.getElementById('form-feedback');

sendBtn.addEventListener('click', function() {

  var name    = document.getElementById('name').value.trim();
  var email   = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name === '') {
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Please enter your name.';
    return;   }

  if (email === '') {
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Please enter your email.';
    return;
  }

   if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Incorrect email format.';
    return;
  }

  if (message === '') {
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Please write a message.';
    return;
  }

   feedback.style.color = '#4a7c5e';
  feedback.textContent = 'Thanks, ' + name + ' Your message has been noted.';

   document.getElementById('name').value    = '';
  document.getElementById('email').value   = '';
  document.getElementById('message').value = '';

});
