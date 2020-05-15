// Code your solutions in this file

function writeCards(arrayOfnames, event) {
  var newArray = []
  for (let i = 0; i < arrayOfnames.length; i++) {
    newArray.push('Thank you, ' + arrayOfnames[i] + ", for the wonderful " + event + " gift!");
  }

  return newArray;
}

function countDown(num) {
  while (num =< 0)
  console.log(num)
  num = num - 1
}
