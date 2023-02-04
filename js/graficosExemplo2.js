const ctxy = document.getElementById('myChart2').getContext('2d');

const Charty = new Chart(ctxy, {
    type: 'bar',
    data: {
        labels: ["Todos os Agentes"],
        datasets: [
            {
                label: "POA - UPX",
                data: [20],
                borderWidth: 2,
                borderColor: 'rgba(4,93,154)',
                backgroundColor: 'rgba(54,161,233)'
            },
            {
                label: "VIX - TOP LINE",
                data: [8],
                borderWidth: 2,
                borderColor: 'rgba(180,1,1,0.85)',
                backgroundColor: 'rgba(253,77,77)'
            },
            {
                label: "BHZ - HABILLOG",
                data: [10],
                borderWidth: 2,
                borderColor: 'rgba(26,136,2,0.85)',
                backgroundColor: 'rgba(109,253,77)'
            },
            {
                label: "RIO - MONTEIRO",
                data: [18],
                borderWidth: 2,
                borderColor: 'rgba(162,149,2,0.85)',
                backgroundColor: 'rgba(253,238,77)'
            },
            {
                label: "CGR - AG EXPRESSO PETRALLAS",
                data: [7],
                borderWidth: 2,
                borderColor: 'rgba(5,164,122,0.85)',
                backgroundColor: 'rgba(77,253,206)'
            },
            {
                label: "CWB - RHR TRANSPORTES",
                data: [12],
                borderWidth: 2,
                borderColor: 'rgba(154,1,159,0.85)',
                backgroundColor: 'rgba(247,77,253)'
            },
            {
                label: "CGB - AGIL ENTREGAS RAPIDAS (THAMMY)",
                data: [10],
                borderWidth: 2,
                borderColor: 'rgb(128,0,0)',
                backgroundColor: 'rgb(189,3,3)'
            },
            {
                label: "PMW - ESTILO EXPRESS",
                data: [15],
                borderWidth: 2,
                borderColor: 'rgb(82,72,1)',
                backgroundColor: 'rgb(168,147,1)'
            },
            {
                label: "BSB - CIA DO TRANSPORTE",
                data: [20],
                borderWidth: 2,
                borderColor: 'rgba(14,61,1,0.85)',
                backgroundColor: 'rgba(25,114,0,0.85)'
            },
            {
                label: "VIA EXPRESSA RECIFE",
                data: [12],
                borderWidth: 2,
                borderColor: 'rgb(178,97,2)',
                backgroundColor: 'rgb(253,138,6)'
            },
            {
                label: 'FOR - VELOMAX BRASIL',
                data: [12],
                borderWidth: 2,
                borderColor: 'rgba(56,56,56,0.85)',
                backgroundColor: 'rgba(122,122,122,0.85)'
            },
            {
                label: "GYN - ARN",
                data: [18],
                borderWidth: 2,
                borderColor: 'rgba(100,2,115,0.85)',
                backgroundColor: 'rgba(162,0,187,0.85)'
            },
            {
                label: "FLN - SS2 LOG",
                data: [15],
                borderWidth: 2,
                borderColor: 'rgb(0,0,0)',
                backgroundColor: 'rgb(31,31,31)'
            },
            {
                label: 'RAO - GL LTDA',
                data: [12],
                borderWidth: 2,
                borderColor: 'rgba(56,56,56,0.85)',
                backgroundColor: 'rgba(255,255,255,0.85)'
            },
            {
                label: "RIO - ROGMAR EXPRESS",
                data: [18],
                borderWidth: 2,
                borderColor: 'rgba(76,107,1,0.85)',
                backgroundColor: 'rgba(182,255,0,0.85)'
            },
            {
                label: "SSA - LOGMEL EXPRESS",
                data: [15],
                borderWidth: 2,
                borderColor: 'rgb(0,24,124)',
                backgroundColor: 'rgb(0,72,252)'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: 'rgb(54,54,54)'
                }
            },
            title: {
                display: true,
                text: 'Gráfico das Coletas'
            },
            subtitle: {
                display: true,
                text: 'Tabela de gerenciamento das coletas em gráfico'
            }
        },
        animation: {
            duration: 5000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        legend: {
            display: true,
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Tabela de Produtividade',
            fontSize: 20
        },
        tooltips: {
            enabled: true,
            intersect: true,
            backgroundColor: 'rgba'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: true
                },
                position: 'bottom'
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: true
                }
            }]
        }
    }
});

$('#my-legend-con').html(chart.generateLegend());

console.log(document.getElementById('my-legend-con'));
