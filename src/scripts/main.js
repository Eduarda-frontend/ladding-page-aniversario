AOS.init();

const anoAtual = new Date().getFullYear();
const dataDoAniverario = new Date(`apr 23, ${anoAtual} 21:53:00`);
const timeStampAniversario = dataDoAniverario.getTime();

const contaTempo = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minEmMs = 1000 * 60;

  const distanciaAteAniversario = timeStampAniversario - timeStampAtual;
  const diasAniversario = Math.floor(distanciaAteAniversario / diasEmMs);
  const horasAniversario = Math.floor(
    (distanciaAteAniversario % diasEmMs) / horasEmMs
  );
  const minutosAniversario = Math.floor(
    (distanciaAteAniversario % horasEmMs) / minEmMs
  );

  const segundosAniversario = Math.floor(
    (distanciaAteAniversario % minEmMs) / 1000
  );

  console.log(segundosAniversario);
  document.getElementById(
    "tempoRestante"
  ).innerHTML = `Faltam ${diasAniversario} dias ${horasAniversario} horas ${minutosAniversario} minutos e ${segundosAniversario} segundos.`;

  if (distanciaAteAniversario < 0) {
    clearInterval(contaTempo);
    document.getElementById(
      "tempoRestante"
    ).innerHTML = `O evento acabou!!`;
  } 
}, 1000);
