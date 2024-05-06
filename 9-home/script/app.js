let num = [6, 0, 1, 8, 7, 9, 6, 5];
function result() {

    let sum = 0;

    for (let i = 0; i < num.length; i++) {

      sum += num[i];
    }
    return sum;
  }
  document.write(result(num));