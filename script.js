let myChart = null;

function generateGraph() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    if (isNaN(input1) || isNaN(input2)) {
        alert('Please enter valid numbers');
        return;
    }

    const data = calculateData(input1, input2);

    if (myChart) {
        myChart.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, index) => index),
            datasets: [{
                label: 'Calculated Data',
                data: data,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function calculateData(input1, input2) {
    // Example calculation: Generate 10 points based on the inputs
    return Array.from({length: 10}, (_, i) => input1 * Math.sin(i * input2));
}