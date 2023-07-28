// creating alias for window.Telegram.WebApp for easier access
let tg = window.Telegram.WebApp;

function sendEventData() {
    // Формируем объект с данными
    let data = fetchData();

    // Отправляем данные в бот
    tg.sendData(JSON.stringify(data));
}

tg.mainButton.onClick(sendEventData);
tg.mainButton.show();
tg.ready();