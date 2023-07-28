function fetchData() {
    let event_name = document.getElementById('event-name').value;
    let start_time = document.getElementById('start-time').value;
    let end_time = document.getElementById('end-time').value;

    let data = {
        web_app_name: "create_event",
        event_name: event_name,
        start_time: start_time,
        end_time: end_time
    }

    return data;
}
