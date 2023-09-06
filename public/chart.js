// public/chart.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // データの取得
    const records = <%= JSON.stringify(records) %>;

    // 種目ごとの重さと回数のデータを準備
    const exerciseData = {};
    records.forEach(record => {
        const { exercise, weight, reps } = record;
        if (!exerciseData[exercise]) {
            exerciseData[exercise] = {
                weights: [],
                reps: [],
            };
        }
        exerciseData[exercise].weights.push(weight);
        exerciseData[exercise].reps.push(reps);
    });

    // グラフのデータ
    const data = {
        labels: Object.keys(exerciseData),
        datasets: Object.keys(exerciseData).map(exercise => ({
            label: exercise,
            data: exerciseData[exercise].weights,
            borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
            borderWidth: 2,
            fill: false,
        })),
    };

    const config = {
        type: 'line',
        data: data,
    };

    const myChart = new Chart(ctx, config);
});
