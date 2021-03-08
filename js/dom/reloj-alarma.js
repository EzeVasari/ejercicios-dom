export default function relojAlarma(clock, clockBtn, alarmBtn, alarmAudio) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(clockBtn)) {
      d.querySelector(clock).classList.toggle("visible");

      let $relojBtn = d.querySelector(clockBtn);
      let clockTempo;

      if ($relojBtn.textContent == "Iniciar reloj") {
        $relojBtn.textContent = "Detener reloj";
      } else {
        clearInterval(clockTempo);
        $relojBtn.textContent = "Iniciar reloj";
      }

      clockTempo = setInterval(() => {
        d.querySelector(clock).textContent = new Date().toLocaleTimeString();
      }, 0);
    }

    if (e.target.matches(alarmBtn)) {
      if (d.querySelector(alarmAudio).paused) {
        d.querySelector(alarmAudio).play();
      } else {
        d.querySelector(alarmAudio).pause();
      }

      let $alarmBtn = d.querySelector(alarmBtn);

      if ($alarmBtn.textContent == "Iniciar alarma") {
        $alarmBtn.textContent = "Detener alarma";
      } else {
        $alarmBtn.textContent = "Iniciar alarma";
      }
    }
  });
}
