 let count = 0;
    let btn = document.getElementById("countBtn");
    let disp = document.getElementById("display");
    btn.addEventListener('click', function () {
      count++;
      disp.innerHTML = count;
    });