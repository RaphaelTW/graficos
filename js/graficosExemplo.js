const ctx4 = document.getElementById('myChart1').getContext('2d');

const chartG = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ["status 1", "status 2", "status 3", "status 4"],
        datasets: [
            {
                label: "Grafico ex",
                data: [5, 8, 10, 14],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(92,255,86)'
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(92,255,86)'
                ],
                hoverOffset: 4,
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                fontSize: 80,
                fontStyle: "bold",
                text: "Gráficos de Status",
                color: 'rgb(0,0,0)'
            },
            labels: {
                fontStyle: "bold",
                color: 'rgb(0,0,0)'
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            responsive: true,
            tooltip: {
                enabled: true,
                intersect: true,
                xAlign: true,
            },
            scales: {
                x:{
                    stacked: true
                },
                y: {
                    beginAtZero: true
                }
            },

        },
        scales: {
            xAxes: [{
                ticks: {
                    gridLines: {
                        display: true,
                        drawBorder: true
                    },
                    position: 'bottom'
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: true
                }
            }]
        },
    },
    animation: {
        duration: 5000,
        easing: 'easeOutBounce'
    },
    plugins: [ChartDataLabels],
});
