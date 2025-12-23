  let inputh = document.getElementById("input-h");
  let inputw = document.getElementById("input-w");
  let outh = document.getElementById("outh");
  let outw = document.getElementById("outw");
  let result = document.getElementById("result");
  let weight = 0;
  let height = 0;
  inputh.addEventListener("mousedown", (event) => {
      outheight(event);
      inputh.addEventListener("mousemove", outheight);


  });

  inputw.addEventListener("mousedown", (event) => {
      outweight(event);
      inputw.addEventListener("mousemove", outweight);
  });

  inputh.addEventListener('mouseup', () => {
      inputh.removeEventListener('mousemove', outheight);
  })

  inputw.addEventListener("mouseup", () => {
      inputw.removeEventListener("mousemove", outweight);
  })

  function outheight(event) {
      let h = event.target.value;
      height = h;
      outh.innerText = `${height}cm`;
      rrr();
  }

  function outweight(evet) {
      let w = evet.target.value;
      weight = w;
      outw.innerHTML = `${weight}kg`;
      rrr();
  }

  function rrr() {
      let bmi = parseFloat(weight / ((height / 100) * (height / 100))).toFixed(2);
      result.innerHTML = `${bmi}`;
  }