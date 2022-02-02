let departureDate = document.getElementById('departure-date');
departureDate.addEventListener('focusout', handleDepartureValidation);

let arrivalDate = document.getElementById('arrival-date');
arrivalDate.addEventListener('focusout', handleArrivalValidation);

function handleDepartureValidation() {
    let arrival = document.getElementById('arrival-date').value;
    if (arrival == "") {
        alert("Fill arrival date first.");
        document.getElementById('arrival-date').value = "";
        document.getElementById('departure-date').value = "";
        return;

    }
    let after = document.getElementById('departure-date').value;
    let before = document.getElementById('arrival-date').value;

    if (!dateValidator(before, after)) {
        alert("Departure date should be older than arrival date.");

        document.getElementById('departure-date').value = "";
        document.getElementById('arrival-date').value = "";


    }
}

function handleArrivalValidation() {
    let departure = document.getElementById('departure-date').value;
    if (!(departure == "")) {
        let arrival = document.getElementById('arrival-date').value;
        if (!(dateValidator(arrival, departure))) {
            alert("Arrival date should be newer than departure date.");
            document.getElementById('departure-date').value = "";
            document.getElementById('arrival-date').value = "";
        }
    }
}



function dateValidator(before, after) {

    let beforeDate = new Date(before);
    let afterDate = new Date(after);

    return afterDate >= beforeDate;
  
}