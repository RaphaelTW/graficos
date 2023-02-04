let ctx = document.getElementsByClassName('line-chart');

let chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
            {
                label: "POA - UPX",
                data: [20, 10, 15, 18, 20, 25, 26, 18, 20, 19, 15, 15, 26],
                borderWidth: 6,
                borderColor: 'rgba(77, 166, 253, 0.85)',
                backgroundColor: 'rgba(77, 166, 253)'
            },
            {
                label: "VIX - TOP LINE",
                data: [8, 5, 20, 1, 10, 7, 0, 11, 6, 6, 7, 2, 5],
                borderWidth: 6,
                borderColor: 'rgba(253,77,77,0.85)',
                backgroundColor: 'rgba(253,77,77)'
            },
            {
                label: "BHZ - HABILLOG",
                data: [1, 5, 21, 8, 13, 13, 24, 8, 5, 5, 8, 1, 4],
                borderWidth: 6,
                borderColor: 'rgba(109,253,77,0.85)',
                backgroundColor: 'rgba(109,253,77)'
            },
            {
                label: "RIO - MONTEIRO",
                data: [4, 9, 19, 15, 10, 7, 15, 18, 20, 22, 24, 22, 18],
                borderWidth: 6,
                borderColor: 'rgba(253,238,77,0.85)',
                backgroundColor: 'rgba(253,238,77)'
            },
            {
                label: "CGR - AG EXPRESSO PETRALLAS",
                data: [7, 5, 20, 1, 10, 7, 0, 11, 6, 6, 7, 2, 5],
                borderWidth: 6,
                borderColor: 'rgba(77,253,206,0.85)',
                backgroundColor: 'rgba(77,253,206)'
            },
            {
                label: "CWB - RHR TRANSPORTES",
                data: [10, 15, 22, 20, 26, 18, 20, 5, 18, 20, 22, 22, 24],
                borderWidth: 6,
                borderColor: 'rgba(247,77,253,0.85)',
                backgroundColor: 'rgba(247,77,253)'
            },
            {
                label: "CGB - AGIL ENTREGAS RAPIDAS (THAMMY)",
                data: [10, 12, 8, 8, 5, 4, 4, 11, 6, 8, 7, 9, 10],
                borderWidth: 6,
                borderColor: 'rgb(234,7,7)',
                backgroundColor: 'rgb(234,7,7)'
            },
            {
                label: "PMW - ESTILO EXPRESS",
                data: [15, 8, 25, 20, 11, 14, 10, 10, 19, 18, 19, 14, 18],
                borderWidth: 6,
                borderColor: 'rgb(168,147,1)',
                backgroundColor: 'rgb(168,147,1)'
            },
            {
                label: "BSB - CIA DO TRANSPORTED",
                data: [20, 26, 20, 21, 22, 8, 15, 10, 8, 15, 18, 20, 20],
                borderWidth: 6,
                borderColor: 'rgba(25,114,0,0.85)',
                backgroundColor: 'rgba(25,114,0,0.85)'
            },
            {
                label: "VIA EXPRESSA RECIFE",
                data: [12, 12, 4, 5, 2, 8, 2, 1, 8, 10, 12, 20, 7],
                borderWidth: 6,
                borderColor: 'rgb(253,138,6)',
                backgroundColor: 'rgb(253,138,6)'
            },
            {
                label: 'FOR - VELOMAX BRASIL',
                data: [12, 6, 5, 2, 11, 8, 9, 12, 15, 17, 15, 13, 20],
                borderWidth: 6,
                borderColor: 'rgba(122,122,122,0.85)',
                backgroundColor: 'rgba(122,122,122,0.85)'
            },
            {
                label: "GYN - ARN",
                data: [18, 20, 22, 15, 12, 10, 8, 11, 14, 22, 17, 15, 10],
                borderWidth: 6,
                borderColor: 'rgba(162,0,187,0.85)',
                backgroundColor: 'rgba(162,0,187,0.85)'
            },
            {
                label: "FLN - SS2 LOG",
                data: [18, 18, 24, 22, 20, 22, 19, 20, 18, 17, 16, 15, 10],
                borderWidth: 6,
                borderColor: 'rgb(0,0,0)',
                backgroundColor: 'rgb(0,0,0)'
            },
            {
                label: "RAO - GL LTDA",
                data: [17, 15, 20, 14, 7, 8, 7, 6, 5, 5, 5, 0, 8],
                borderWidth: 6,
                borderColor: 'rgb(166,44,64)',
                backgroundColor: 'rgb(166,44,64)'
            },
            {
                label: "RIO - ROGMAR EXPRESS",
                data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                borderWidth: 6,
                borderColor: 'rgba(174,201,0,0.85)',
                backgroundColor: 'rgba(174,201,0,0.85)'
            },
            {
                label: "SSA - LOGMEL EXPRESS",
                data: [5, 11, 12, 15, 14, 15, 18, 17, 18, 20, 22, 17, 12],
                borderWidth: 6,
                borderColor: 'rgb(1,48,236)',
                backgroundColor: 'rgb(1,48,236)'
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                fontSize: 80,
                fontStyle: "bold",
                text: "Tabela de Gráficos das Coletas"
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
                mode: 'label',
                callbacks: {
                    label: function(tooltipItem, data) {
                        let indice = tooltipItem.index;
                        return data.datasets[0]
                            .data[indice] + " person visited " + data.labels[indice] + ' times ';
                    }
                }
            },
        },
        animation: {
            duration: 5000,
            easing: 'easeOutBounce'
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
    plugins: [ChartDataLabels],
});

$('#my-legend-con').html(myChart.generateLegend());

console.log(document.getElementById('my-legend-con'));

const addData = () => {
    let sizeData = chart.data.datasets[0].data.length
    chart.data.datasets[0].data[sizeData] = Math.random() * 100
    chart.data.labels[sizeData] = 'New Data ${sizeData + 1}'
    chart.update()
}

const removeData = () => {
    chart.data.datasets[0].data.pop()
    chart.data.labels.pop()
    chart.update()
}

$('#my-legend-con').html(myChart.generateLegend());

console.log(document.getElementById('my-legend-con'));
