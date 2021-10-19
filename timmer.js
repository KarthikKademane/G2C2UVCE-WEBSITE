(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Oct 20, 2021 09:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      var a, b, c, d;
      a = Math.floor(distance / day);
      b = Math.floor((distance % day) / hour);
      c = Math.floor((distance % hour) / minute);
      d = Math.floor((distance % minute) / second);

      if (a < 10 && a >= 0) document.getElementById("days").innerText = "0" + a;
      else document.getElementById("days").innerText = a;

      if (b < 10 && b >= 0)
        document.getElementById("hours").innerText = "0" + b;
      else document.getElementById("hours").innerText = b;

      if (c < 10 && c >= 0)
        document.getElementById("minutes").innerText = "0" + c;
      else document.getElementById("minutes").innerText = c;

      if (d < 10 && d >= 0)
        document.getElementById("seconds").innerText = "0" + d;
      else document.getElementById("seconds").innerText = d;

      /*  document.getElementById("days").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second); */

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
