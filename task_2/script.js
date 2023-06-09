// график 1  (chart.js)
const chart1 = document.querySelector('.container1__chart');

    new Chart(chart1,{
    type: 'pie' ,
    data: {
        labels:['3','4','5'] ,
        datasets: [{
            label: 'Entry exam average mark, 2018-2022 ' , 
            data:[0.2, 0.5, 0.3], 
            backgroundColor: ['crimson', 'orange', 'green'] , 
            borderColor: 'black' , 
            borderWidth: 2, 
        }] ,
    } ,
    options: {} 
});

// график2 (chart.js)
const chart2= document.querySelector('.container2__chart');

    new Chart(chart2,{
    type: 'bar' ,
    data: {
        labels:[2018,2019,2020,2021,2022] ,
        datasets: [{
            label: 'Science' , 
            data:[560, 687, 424, 853, 798], 
            backgroundColor: ['white'] , 
            borderColor: 'crimson' , 
            backgroundColor: 'crimson' ,
            borderWidth: 2, 
        },
        {
            label: 'Languages' , 
            data:[460, 287, 414, 453, 298], 
            backgroundColor: ['white'] , 
            borderColor: 'orange' , 
            backgroundColor: 'orange' ,
            borderWidth: 2, 
        },
        {
            label: 'Art' , 
            data:[260, 787, 214, 253, 398], 
            backgroundColor: ['white'] , 
            borderColor: 'green' , 
            backgroundColor: 'green' ,
            borderWidth: 2, 
        }] ,
    } ,
    options: {}
});

// график 3 (chart.js)
const chart3 = document.querySelector('.container3__chart');

    new Chart(chart3,{
    type: 'line' ,
    data: {
        labels:[2018,2019,2020,2021,2022] ,
        datasets: [{
            label: 'Students Number' , 
            data:[560, 687, 424, 853, 798], 
            backgroundColor: ['white'] , 
            borderColor: 'crimson' , 
            borderWidth: 2, 
        }] ,
    } ,
    options: {}
});


// график4 (chartist)

const chart4 = document.querySelector('.container4__chart');
let data = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    series: [
      [40, 55, 45, 40, 55],
      [60, 45, 55, 60, 45],

    ]
  };

  let options = {
    width: 600,
    height: 250,
    seriesBarDistance: 40,
    
  };
  
  new Chartist.Bar(chart4, data, options);



//   график5 (zingchart)
let myConfig = {
    type: 'line',
    legend: {
      draggable: true,
    },
    scaleX: {
      label: { text: 'Year' },
      labels: [ '2018', '2019', '2020', '2021', '2022' ]
    },
    scaleY: {
      values: "400:1600:200" ,
      label: { text: 'Salary, $' },
    },
   
    series: [
      {
        // plot 1 values, linear data
        values: [1200, 1320, 1380, 1280, 1500],
        text: 'Science',
      },
      {
        // plot 2 values, linear data
        values: [980, 1020, 1150, 1280, 1420],
        text: 'Languages'
      },
      {
        // plot 2 values, linear data
        values: [1100, 1120, 980, 1253, 1459],
        text: 'Art'
      }
    ]
  };
  

  zingchart.render({
    width:600,
    height:300,
    id: 'myChart',
    data: myConfig,
  });