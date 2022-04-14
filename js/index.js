import * as chart from 'chart.js';

const Chart = require('chart.js');

const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Número de seguidores no Twitter',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
