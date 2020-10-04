function Hesapla() {
  var GecmisKredi = document.BenimFormum.GecmisKredi.value;
  if (isNaN(GecmisKredi) || GecmisKredi == '') {
    GecmisKredi = 0;
  }

  var GecmisOrtalama = document.BenimFormum.GecmisOrtalama.value;
  if (isNaN(GecmisOrtalama) || GecmisOrtalama === '') {
    GecmisOrtalama = 0;
  }

  var kredi1 = document.BenimFormum.kredi1.value;
  var kredi2 = document.BenimFormum.kredi2.value;
  var kredi3 = document.BenimFormum.kredi3.value;
  var kredi4 = document.BenimFormum.kredi4.value;
  var kredi5 = document.BenimFormum.kredi5.value;
  var kredi6 = document.BenimFormum.kredi6.value;
  var kredi7 = document.BenimFormum.kredi7.value;
  var kredi8 = document.BenimFormum.kredi8.value;
  var kredi9 = document.BenimFormum.kredi9.value;
  var kredi10 = document.BenimFormum.kredi10.value;

  var harf1 = document.BenimFormum.harf1.value;
  var harf2 = document.BenimFormum.harf2.value;
  var harf3 = document.BenimFormum.harf3.value;
  var harf4 = document.BenimFormum.harf4.value;
  var harf5 = document.BenimFormum.harf5.value;
  var harf6 = document.BenimFormum.harf6.value;
  var harf7 = document.BenimFormum.harf7.value;
  var harf8 = document.BenimFormum.harf8.value;
  var harf9 = document.BenimFormum.harf9.value;
  var harf10 = document.BenimFormum.harf10.value;

  var ToplamKredi =
    parseFloat(GecmisKredi) +
    parseFloat(kredi1) +
    parseFloat(kredi2) +
    parseFloat(kredi3) +
    parseFloat(kredi4) +
    parseFloat(kredi5) +
    parseFloat(kredi6) +
    parseFloat(kredi7) +
    parseFloat(kredi8) +
    parseFloat(kredi9) +
    parseFloat(kredi10);

  var ToplamNot =
    parseFloat(GecmisKredi) * parseFloat(GecmisOrtalama) +
    parseFloat(kredi1) * parseFloat(harf1) +
    parseFloat(kredi2) * parseFloat(harf2) +
    parseFloat(kredi3) * parseFloat(harf3) +
    parseFloat(kredi4) * parseFloat(harf4) +
    parseFloat(kredi5) * parseFloat(harf5) +
    parseFloat(kredi6) * parseFloat(harf6) +
    parseFloat(kredi7) * parseFloat(harf7) +
    parseFloat(kredi8) * parseFloat(harf8) +
    parseFloat(kredi9) * parseFloat(harf9) +
    parseFloat(kredi10) * parseFloat(harf10);

  var SonOrtalama
  if (ToplamKredi === 0 && ToplamNot === 0) {
    SonOrtalama = 0;
  } else {
    SonOrtalama = ToplamNot / ToplamKredi;
  }

  var DonemKredi = ToplamKredi - GecmisKredi;
  var DonemNot = ToplamNot - parseFloat(GecmisKredi) * parseFloat(GecmisOrtalama);

  var DonemOrtalama;

  if (DonemKredi === 0 && DonemNot === 0) {
    DonemOrtalama = 0;
  } else {
    DonemOrtalama = DonemNot / DonemKredi;
  }


  document.getElementById('SonucParagrafi').innerHTML = "Dönem Ortalaması: " + DonemOrtalama.toPrecision(3) + '<br>Genel Ortalama: ' + SonOrtalama.toPrecision(3);

  window.scrollBy(0, 100);
}