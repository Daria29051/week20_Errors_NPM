// график 1
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

// график2
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

// график 3
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