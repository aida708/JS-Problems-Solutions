function generateEventId() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

function addEvent() {
  const eventDate = document.getElementById("eventDate").value;
  const eventDescription = document.getElementById("eventDescription").value;

  if (!eventDate || eventDescription === "") {
    alert("Please enter date and description");
    return;
  }

  const newEvent = {
    id: generateEventId(),
    date: new Date(eventDate),
    description: eventDescription,
  };

  const events = JSON.parse(localStorage.getItem("events")) || [];

  events.push(newEvent);
  //ruaj eventet ne local storage
  localStorage.setItem("events", JSON.stringify(events));
  document.getElementById("eventDate").value = "";
  document.getElementById("eventDescription").value = "";

  showAllEvents();
}

function showAllEvents() {
  const eventsList = document.getElementById("eventsList");
  eventsList.innerHTML = "";

  // if (!localStorage.getItem("events")) {
  //   return;
  // }

  const events = JSON.parse(localStorage.getItem("events")) || [];

  events.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${new Date(event.date).toDateString()}: ${
      event.description
    }`;

    //remove btn - ushtr 3
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.onclick = function () {
      removeEvent(event.id);
    };

    listItem.appendChild(removeBtn);
    eventsList.appendChild(listItem);
  });
}

//ushtr 2
function createNextSevenDaysButtons() {
  const filterBtn = document.querySelector(".btn-group");

  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const dayBtn = document.createElement("button");
    dayBtn.className = "btn btn-secondary";
    dayBtn.textContent = date.toDateString();

    dayBtn.onclick = function () {
      filterEventsByDate(date);
    };

    filterBtn.appendChild(dayBtn);
  }
}

function filterEventsByDate(selectedDate) {
  const eventsList = document.getElementById("eventsList");
  eventsList.innerHTML = "";

  const events = JSON.parse(localStorage.getItem("events")) || [];

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === selectedDate.toDateString();
  });

  filteredEvents.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.textContent = `${new Date(event.date).toDateString()}: ${
      event.description
    }`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
      removeEvent(event.id);
    };

    listItem.appendChild(removeBtn);
    eventsList.appendChild(listItem);
  });
}

function removeEvent(eventId) {
  let events = JSON.parse(localStorage.getItem("events")) || [];

  events = events.filter((event) => event.id !== eventId);

  localStorage.setItem("events", JSON.stringify(events));

  showAllEvents(); //REFRESH list
}

document.addEventListener("DOMContentLoaded", function () {
  createNextSevenDaysButtons();
  showAllEvents();
});
