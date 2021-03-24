// These are the variables I will need for the program
let age = 0

// This script will link our button to JavaScript so it can carry out a function.
document.getElementById('button1').addEventListener('click', rating)

// Now, I need to write the code for my function.
function rating () {
  age = document.getElementById
  age = parseInt(age)
  if (age >= 17) {
    document.getElementById('results').innerHTML = 'You can watch an R rated movie alone. You can also watch any age rating below R rated.'
  } else if (age >= 13) {
    document.getElementById('results').innerHTML = 'You can watch any PG-13 rated movie alone. You can also watch any age rating below PG-13 rated.'
  } else if (age >= 5) {
    document.getElementById('results').innerHTML = 'You can watch any G rated movie alone. You can also watch PG rated movies, but watching with a parent is advised.'
  } else {
    document.getElementById('results').innerHTML = 'You\'re too young to watch any movies!'
  }
}
