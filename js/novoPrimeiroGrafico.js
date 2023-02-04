const ctxy = document.getElementById('myChart2').getContext('2d');

const Charty = new Chart(ctxy, {
    type: 'bar',
    data: {
        labels: ["Todos os Agentes"],
        datasets: [
            {
                label: "POA - UPX",
                data: [" . $row_agente['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(4,93,154)',
                backgroundColor: 'rgba(54,161,233)'
            },
            {
                label: "VIX - TOP LINE",
                data: [" . $row_agente2['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(180,1,1,0.85)',
                backgroundColor: 'rgba(253,77,77)'
            },
            {
                label: "BHZ - HABILLOG",
                data: [" . $row_agente3['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(26,136,2,0.85)',
                backgroundColor: 'rgba(109,253,77)'
            },
            {
                label: "RIO - MONTEIRO",
                data: [" . $row_agente4['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(162,149,2,0.85)',
                backgroundColor: 'rgba(253,238,77)'
            },
            {
                label: "CGR - AG EXPRESSO PETRALLAS",
                data: [" . $row_agente5['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(5,164,122,0.85)',
                backgroundColor: 'rgba(77,253,206)'
            },
            {
                label: "CWB - RHR TRANSPORTES",
                data: [" . $row_agente6['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(154,1,159,0.85)',
                backgroundColor: 'rgba(247,77,253)'
            },
            {
                label: "CGB - AGIL ENTREGAS RAPIDAS (THAMMY)",
                data: [" . $row_agente7['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgb(128,0,0)',
                backgroundColor: 'rgb(189,3,3)'
            },
            {
                label: "PMW - ESTILO EXPRESS",
                data: [" . $row_agente8['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgb(82,72,1)',
                backgroundColor: 'rgb(168,147,1)'
            },
            {
                label: "BSB - CIA DO TRANSPORTE",
                data: [" . $row_agente9['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(14,61,1,0.85)',
                backgroundColor: 'rgba(25,114,0,0.85)'
            },
            {
                label: "VIA EXPRESSA RECIFE",
                data: [" . $row_agente10['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgb(178,97,2)',
                backgroundColor: 'rgb(253,138,6)'
            },
            {
                label: 'FOR - VELOMAX BRASIL',
                data: [" . $row_agente11['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(56,56,56,0.85)',
                backgroundColor: 'rgba(122,122,122,0.85)'
            },
            {
                label: "GYN - ARN",
                data: [" . $row_agente12['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(100,2,115,0.85)',
                backgroundColor: 'rgba(162,0,187,0.85)'
            },
            {
                label: "FLN - SS2 LOG",
                data: [" . $row_agente13['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgb(0,0,0)',
                backgroundColor: 'rgb(31,31,31)'
            },
            {
                label: 'RAO - GL LTDA',
                data: [" . $row_agente14['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(56,56,56,0.85)',
                backgroundColor: 'rgba(255,255,255,0.85)'
            },
            {
                label: "RIO - ROGMAR EXPRESS",
                data: [" . $row_agente15['qnt_coletas'] . "],
                borderWidth: 2,
                borderColor: 'rgba(76,107,1,0.85)',
                backgroundColor: 'rgba(182,255,0,0.85)'
            },
            {
                label: "SSA - LOGMEL EXPRESS",
                data: [" . $row_agente16['qnt_coletas'] . "],
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
