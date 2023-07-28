// creating alias for window.Telegram.WebApp for easier access
let tg = window.Telegram.WebApp;

function sendEventData() {
    // Формируем объект с данными
    let data = fetchData()

    // Отправляем данные в бот
    tg.sendData(JSON.stringify(data))
}

let mainButton = tg.MainButton;
// mainButton.onClick(sendEventData);
tg.onEvent('mainButtonClicked', sendEventData)
mainButton.show()
tg.ready()