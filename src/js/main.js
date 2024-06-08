fetch(`/.netlify/functions/fetch-data`)
  .then(res => { return res.json() })
  .then(data => {
    displayInfo(data)
  })


function displayInfo(data) {
  console.log(data)
  document.getElementById('photoTitle').innerText = data.title
}