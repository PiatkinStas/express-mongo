const express = require('express');
const app = express();
const { connectDB, checkConnection } = require('./db');
const FormData = require('./models/FormData');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключение к базе данных
connectDB();

// Проверка состояния подключения после определенного времени
setTimeout(checkConnection, 3000); // Проверка через 3 секунды после запуска

app.post('/firstform', async (req, res) => {
  const { value } = req.body;

  try {
    const newData = new FormData({ value });
    await newData.save();
    console.log('Данные от клиента сохранены:', newData);
    res.send('Данные успешно получены и сохранены');
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    res.status(500).send('Ошибка сервера');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту http://localhost:${port}`);
});
