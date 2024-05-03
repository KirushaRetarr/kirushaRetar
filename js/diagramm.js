document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('cryptoChart').getContext('2d');
    var cryptoChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Bitcoin', 'Ethereum', 'TetherUSDT', 'Solana', 'Avalanche', 'Other'],
            datasets: [{
                label: 'Процентная доля токенов на рынке',
                data: [40, 20, 10, 15, 10, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Процентная доля токенов на рынке'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percent = Math.round((currentValue / total) * 100);
                        return data.labels[tooltipItem.index] + ': ' + percent + '%';
                    }
                }
            }
        }
    });
});
