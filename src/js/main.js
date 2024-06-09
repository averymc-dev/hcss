fetch(`/.netlify/functions/fetch-data`)
  .then(res => { return res.json() })
  .then(data => {
    displayInfo(data)
  })

let date = document.getElementById('date')
let title = document.getElementById('photoTitle')
let img = document.getElementById('img')
let expl = document.getElementById('expl')

function displayInfo(data) {
  date.innerText = formatDate(data.date)
  title.innerText = data.title
  img.src = data.url
  expl.innerText = data.explanation
}

function formatDate(date) {
  date = date.split('-')
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let [year, month, day] = [ ...date ]
  return `${months[month - 1]} ${day}, ${year}`
}