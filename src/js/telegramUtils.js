function fetchData() {
    let event_name = document.getElementById('event-name')
    let start_time = document.getElementById('start-time')
    let end_time = document.getElementById('end-time')

    let data = {
        eventName: event_name,
        startTime: start_time,
        endTime: end_time
    }

    return data
}