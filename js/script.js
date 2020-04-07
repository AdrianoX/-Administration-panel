/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

//datepicker


$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  // eslint-disable-next-line no-unused-vars
  }, function(start, end, label) {
    console.log('A new date selection was made: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


document.querySelector('.hamburger-btn').addEventListener('click', function() {
  document.querySelector('.sidenav').classList.toggle('active');
});
