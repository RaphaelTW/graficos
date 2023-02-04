// setup
const data = {
    labels: ["Todos os Agentes"],

    datasets: [
        {
            label: "POA - UPX",
            data: [20],
            borderWidth: 2,
            borderColor: 'rgba(4,93,154)',
            backgroundColor: 'rgba(54,161,233,0.8)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "VIX - TOP LINE",
            data: [8],
            borderWidth: 2,
            borderColor: 'rgba(180,1,1,0.85)',
            backgroundColor: 'rgba(253,77,77)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "BHZ - HABILLOG",
            data: [18],
            borderWidth: 2,
            borderColor: 'rgba(26,136,2,0.85)',
            backgroundColor: 'rgba(109,253,77)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "RIO - MONTEIRO",
            data: [7],
            borderWidth: 2,
            borderColor: 'rgba(162,149,2,0.85)',
            backgroundColor: 'rgba(253,238,77)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "CGR - AG EXPRESSO PETRALLAS",
            data: [11],
            borderWidth: 2,
            borderColor: 'rgba(5,164,122,0.85)',
            backgroundColor: 'rgba(77,253,206)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "CWB - RHR TRANSPORTES",
            data: [12],
            borderWidth: 2,
            borderColor: 'rgba(154,1,159,0.85)',
            backgroundColor: 'rgba(247,77,253)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "CGB - AGIL ENTREGAS RAPIDAS (THAMMY)",
            data: [9],
            borderWidth: 2,
            borderColor: 'rgb(128,0,0)',
            backgroundColor: 'rgb(189,3,3)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "PMW - ESTILO EXPRESS",
            data: [15],
            borderWidth: 2,
            borderColor: 'rgb(82,72,1)',
            backgroundColor: 'rgb(168,147,1)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "BSB - CIA DO TRANSPORTE",
            data: [18],
            borderWidth: 2,
            borderColor: 'rgba(14,61,1,0.85)',
            backgroundColor: 'rgba(25,114,0,0.85)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "VIA EXPRESSA RECIFE",
            data: [16],
            borderWidth: 2,
            borderColor: 'rgb(178,97,2)',
            backgroundColor: 'rgb(253,138,6)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "FOR - VELOMAX BRASIL",
            data: [14],
            borderWidth: 2,
            borderColor: 'rgba(56,56,56,0.85)',
            backgroundColor: 'rgba(122,122,122,0.85)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "GYN - ARN",
            data: [18],
            borderWidth: 2,
            borderColor: 'rgba(100,2,115,0.85)',
            backgroundColor: 'rgba(162,0,187,0.85)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "FLN - SS2 LOG",
            data: [19],
            borderWidth: 2,
            borderColor: 'rgb(0,0,0)',
            backgroundColor: 'rgba(0,0,0,0.65)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "RAO - GL LTDA",
            data: [12],
            borderWidth: 2,
            borderColor: 'rgba(56,56,56,0.85)',
            backgroundColor: 'rgba(255,255,255,0.85)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "RIO - ROGMAR EXPRESS",
            data: [18],
            borderWidth: 2,
            borderColor: 'rgba(76,107,1,0.85)',
            backgroundColor: 'rgba(182,255,0,0.85)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        },

        {
            label: "SSA - LOGMEL EXPRESS",
            data: [15],
            borderWidth: 2,
            borderColor: 'rgb(0,24,124)',
            backgroundColor: 'rgb(0,72,252)',
            datalabels: {
                color: 'black', font: {
                    weight: 'bold'
                }
            }
        }

    ]

}


;

// config
const config = {
    type: 'bar', data, options: {
        plugins: {
            title: {
                display: true,
                fontSize: 80,
                fontStyle: "bold",
                text: "Gráfico das Coletas em Geral"
            },
            subtitle: {
                display: true,
                text: 'Tabela de gerenciamento das coletas em gráfico'
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
};

// render init block
const myChart = new Chart(document.getElementById('myChart'), config);