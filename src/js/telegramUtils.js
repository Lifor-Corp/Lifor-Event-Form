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
    let date_start_raw = document.getElementById('date-start').value;
    let date_end_raw;
    if (document.getElementById('date-end') === null) {
        date_end_raw = date_start_raw;
    }
    else {
        date_end_raw = document.getElementById('date-end').value;
    }
    let description = document.getElementById('event-description').value;
    let latlng = getLocation();
    let latitude = latlng.lat;
    let longitude = latlng.lng;

    let start_time = toDate(date_start_raw, start_time_raw).toString();
    let end_time = toDate(date_end_raw, end_time_raw).toString();

    let data = {
        web_app_name: "create_event",
        event_name: event_name,
        start_time: start_time,
        end_time: end_time,
        description: description,
        latitude: latitude,
        longitude: longitude,
    }

    return data;
}
