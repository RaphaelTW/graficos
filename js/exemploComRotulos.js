// setup
const data = {
    labels: ["Tabela de Vendas"],

    datasets: [
        {
            label: "Op - 01",
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
            label: "Op - 02",
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
            label: "Op - 03",
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
            label: "Op - 04",
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
            label: "Op - 05",
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
            label: "Op - 06",
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
            label: "Op - 07",
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
            label: "Op - 08",
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
            label: "Op - 09",
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
            label: "Op - 10",
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
            label: "Op - 11",
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
            label: "Op - 12",
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
            label: "Op - 13",
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
            label: "Op - 14",
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
            label: "Op - 15",
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
            label: "Op - 16",
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
                text: "Gráfico das Vendas em Geral"
            },
            subtitle: {
                display: true,
                text: 'Tabela de gerenciamento das vendas'
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