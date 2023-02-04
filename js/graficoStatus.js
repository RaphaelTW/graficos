const ctx2 = document.getElementById('chart').getContext('2d');

const image = new Image();
image.src = 'https://www.viaexpressa.com/wp-content/uploads/2019/05/logo_white.png';

const plugin = {
    id: 'customCanvasBackgroundImage',
    beforeDraw: (chart) => {
        if (image.complete) {
            const ctx = chart.ctx;
            const {top, left, width, height} = chart.chartArea;
            const x = left + width / 4 - image.width / 2;
            const y = top + height / 1 - image.height / 2;
            ctx.drawImage(image, x, y);
        } else {
            image.onload = () => chart.draw();
        }
    }
};

const chart = new Chart(ctx2, {
    plugins: [],
    type: 'bar',
    data: {
        labels: ["Status das coletas"],
        datasets: [
            {
                label: "Solicitada",
                data: [20],
                borderWidth: 2,
                borderColor: 'rgba(4,93,154)',
                backgroundColor: 'rgba(54,161,233)'
            },
            {
                label: "Aceita",
                data: [8],
                borderWidth: 2,
                borderColor: 'rgba(180,1,1,0.85)',
                backgroundColor: 'rgba(253,77,77)'
            },
            {
                label: "Coletada",
                data: [10],
                borderWidth: 2,
                borderColor: 'rgba(26,136,2,0.85)',
                backgroundColor: 'rgba(109,253,77)'
            },
            {
                label: "Documentada",
                data: [18],
                borderWidth: 2,
                borderColor: 'rgba(162,149,2,0.85)',
                backgroundColor: 'rgba(253,238,77)'
            },
            {
                label: "Pendente",
                data: [7],
                borderWidth: 2,
                borderColor: 'rgba(5,164,122,0.85)',
                backgroundColor: 'rgba(77,253,206)'
            },
            {
                label: "Pendente-Enviada Agente",
                data: [12],
                borderWidth: 2,
                borderColor: 'rgba(154,1,159,0.85)',
                backgroundColor: 'rgba(247,77,253)'
            },
            {
                label: "Emitida",
                data: [10],
                borderWidth: 2,
                borderColor: 'rgb(128,0,0)',
                backgroundColor: 'rgb(189,3,3)'
            },
            {
                label: "Emitida-Pendente GNRE",
                data: [15],
                borderWidth: 2,
                borderColor: 'rgb(82,72,1)',
                backgroundColor: 'rgb(168,147,1)'
            },
            {
                label: "Emitida-GNRE anexada",
                data: [20],
                borderWidth: 2,
                borderColor: 'rgba(14,61,1,0.85)',
                backgroundColor: 'rgba(25,114,0,0.85)'
            },
            {
                label: "Autorizada",
                data: [12],
                borderWidth: 2,
                borderColor: 'rgb(178,97,2)',
                backgroundColor: 'rgb(253,138,6)'
            },
            {
                label: 'Embarcada',
                data: [12],
                borderWidth: 2,
                borderColor: 'rgba(56,56,56,0.85)',
                backgroundColor: 'rgba(122,122,122,0.85)'
            },
            {
                label: "Consolidada",
                data: [18],
                borderWidth: 2,
                borderColor: 'rgba(100,2,115,0.85)',
                backgroundColor: 'rgba(162,0,187,0.85)'
            },
            {
                label: "Frustrada",
                data: [15],
                borderWidth: 2,
                borderColor: 'rgb(0,0,0)',
                backgroundColor: 'rgb(31,31,31)'
            },

        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                fontSize: 80,
                fontStyle: "bold",
                text: "Gráficos de Status"
            },
            labels: {
                fontStyle: "bold"
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
            }
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
        }
            [ChartDataLabels],
    }
});
