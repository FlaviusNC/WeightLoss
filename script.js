let myChart;
const dataPoints = [];

function addDataPoint() {
    const x = parseFloat(document.getElementById('input1').value);
    const y = parseFloat(document.getElementById('input2').value);
    
    if (isNaN(x) || isNaN(y)) {
        alert('Please enter valid numbers');
        return;
    }
    
    dataPoints.push({x, y});
    updateChart();
}

function updateChart() {
    if (myChart) {
        myChart.destroy();
    }
    
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Data Points',
                data: dataPoints,
                backgroundColor: 'rgb(75, 192, 192)'
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    type: 'linear'
                }
            }
        }
    });
}

// Initialize an empty chart
updateChart();
