function toDate(stringDate, stringTime)
{
    parsedDate = stringDate.split('-');
    parsedTime = stringTime.split(':');

    // this is a time according to current time offset
    return new Date(Number(parsedDate[0]), // year 
                    Number(parsedDate[1]) - 1, // month (they index them starting with 0)
                    Number(parsedDate[2]), // day
                    Number(parsedTime[0]), // hours
                    Number(parsedTime[1]) // minutes
    );
}


function fetchData() {
    let event_name = document.getElementById('event-name').value;
    let start_time_raw = document.getElementById('start-time').value;
    let end_time_raw = document.getElementById('end-time').value;
    let date_raw = document.getElementById('date').value;
    let description = document.getElementById('event-description').value;
    let latitude = 0;
    let longitude = 0;

    let start_time = toDate(date_raw, start_time_raw).toString();
    let end_time = toDate(date_raw, end_time_raw).toString();

    let data = {
        web_app_name: "create_event",
        event_name: event_name,
        start_time: start_time,
        end_time: end_time,
        description: description,
        lattitude: lattitude,
        longitude: longitude,
    }

    return data;
}
