var button = document.getElementsByClassName('myButton')[0];

function generateGraph() {
    var value = document.getElementsByClassName('myNumber')[0].value;
    var myData = value.split(' ');
 
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: [ 'red', 'blue', 'pink', 'green' ],
                borderColor: 'rgb(255, 99, 132)',
                data: myData,
            }]
        },
    
        // Configuration options go here
        options: {}
    });    
}