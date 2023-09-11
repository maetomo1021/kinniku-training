// app.js

const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Chart = require('chart.js'); // Chart.jsを追加
const a = 0


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = new sqlite3.Database('gym.db');

db.run(`CREATE TABLE IF NOT EXISTS training_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    exercise TEXT,
    weight REAL,
    reps INTEGER
)`);

app.get('/', (req, res) => {
    db.all('SELECT * FROM training_records', (err, records) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }
        // グラフのデータを作成
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
        res.render('index', { records, exerciseData });
    });
});

app.post('/record', (req, res) => {
    const { exercise, weight, reps } = req.body;

    db.run('INSERT INTO training_records (exercise, weight, reps) VALUES (?, ?, ?)',
        [exercise, weight, reps],
        (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.redirect('/');
        });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
