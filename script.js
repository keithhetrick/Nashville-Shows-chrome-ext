async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6493502f81msh89c6a45f1ee6b19p193445jsn26344efcf8c4",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Nashville&minDate=2022-10-15&maxDate=2022-10-21&page=1",
    options
  );
  const record = await res.json();
  console.log(record);

  document.getElementById("concerts").innerHTML = record.data
    .map(
      (item) => `
      <p>
        <li>${item.name}</li>
        <em>${item.location.name} - ${item.startDate}</em>
      </p>
      `
    )
    .join("");
}
fetchData();
