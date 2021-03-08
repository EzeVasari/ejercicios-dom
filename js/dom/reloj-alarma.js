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

    const $alarm = d.querySelector(alarmAudio);

    if (e.target.matches(alarmBtn)) {
      if ($alarm.paused) {
        $alarm.play();
      } else {
        $alarm.pause();
        $alarm.currentTime = 0;
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
