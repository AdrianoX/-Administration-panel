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

document.querySelector('.nav_main_menu').addEventListener('click', function() {
  document.querySelector('.sidenav').classList.remove('active');
});

var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-unused-vars
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});