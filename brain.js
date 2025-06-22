// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === SALOMLASHUVLAR ===
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === ODDIY MATEMATIKA ===
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }

  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }

  // === DASTURLASH 1 ===
  if (text.includes("html")) return "HTML — bu web sahifalar tuzish uchun markup tilidir. Elementlar <tag> ko‘rinishida yoziladi.";
  if (text.includes("python")) return "Python — bu oson, kuchli dasturlash tili. Web, AI, analiz uchun juda mos.";
  if (text.includes("js nima") || text.includes("javascript")) return "JavaScript — web sahifalarga interaktivlik qo‘shish uchun ishlatiladi. Front-end va back-end uchun mos.";

  // === BUXGALTERIYA 1 ===
  if (text.includes("aktiv")) return "Aktiv — bu korxonaga tegishli resurslar (pul, bino, uskuna).";
  if (text.includes("debet")) return "Debet buxgalteriyada aktivlarning ko‘payishini bildiradi.";
  if (text.includes("kredit")) return "Kredit — buxgalteriyada passivlarning o‘sishini bildiradi yoki aktivning kamayishini.";
  if (text.includes("balans")) return "Balans buxgalteriyada aktiv va passivlarning tengligini bildiradi.";

  // === DEFAULT ===
  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === SALOMLASHUVLAR ===
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === ODDIY MATEMATIKA ===
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }

  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }

  // === DASTURLASH 1 ===
  if (text.includes("html")) return "HTML — bu web sahifalar tuzish uchun markup tilidir. Elementlar <tag> ko‘rinishida yoziladi.";
  if (text.includes("python")) return "Python — bu oson, kuchli dasturlash tili. Web, AI, analiz uchun juda mos.";
  if (text.includes("js nima") || text.includes("javascript")) return "JavaScript — web sahifalarga interaktivlik qo‘shish uchun ishlatiladi. Front-end va back-end uchun mos.";

  // === BUXGALTERIYA 1 ===
  if (text.includes("aktiv")) return "Aktiv — bu korxonaga tegishli resurslar (pul, bino, uskuna).";
  if (text.includes("debet")) return "Debet buxgalteriyada aktivlarning ko‘payishini bildiradi.";
  if (text.includes("kredit")) return "Kredit — buxgalteriyada passivlarning o‘sishini bildiradi yoki aktivning kamayishini.";
  if (text.includes("balans")) return "Balans buxgalteriyada aktiv va passivlarning tengligini bildiradi.";

  // === QISM 2 - Murakkab Matematika ===
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }

  if (text.includes("tub sonmi")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (isNaN(num) || num < 2) return "Tub sonlar 2 dan boshlanadi.";
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return `${num} tub emas.`;
    return `${num} — bu tub son.`;
  }

  if (text.includes("foizi")) {
    const match = text.match(/(\d+(\.\d+)?)\s*foizi\s*(\d+(\.\d+)?)/);
    if (match) {
      const p = parseFloat(match[1]);
      const n = parseFloat(match[3]);
      return `${p}% ${n} = ${(p / 100 * n).toFixed(2)}`;
    }
    return "Iltimos, masalan: 25 foizi 400 tarzida yozing.";
  }

  if (text.includes("log")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num) && num > 0) return `log(${num}) = ${Math.log10(num).toFixed(4)}`;
    return "Logarifm faqat musbat sonlar uchun hisoblanadi.";
  }

  if (text.includes("sin") || text.includes("cos") || text.includes("tan")) {
    const match = text.match(/(sin|cos|tan)\s*(\d+)/);
    if (match) {
      const func = match[1];
      const angle = parseFloat(match[2]);
      const rad = angle * Math.PI / 180;
      let result = 0;
      if (func === "sin") result = Math.sin(rad);
      else if (func === "cos") result = Math.cos(rad);
      else if (func === "tan") result = Math.tan(rad);
      return `${func}(${angle}°) = ${result.toFixed(4)}`;
    }
    return "Masalan: sin 30, cos 45 deb yozing.";
  }

  // === DEFAULT ===
  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === SALOMLASHUVLAR ===
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === ODDIY MATEMATIKA ===
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }

  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }

  // === DASTURLASH 1 ===
  if (text.includes("html")) return "HTML — bu web sahifalar tuzish uchun markup tilidir. Elementlar <tag> ko‘rinishida yoziladi.";
  if (text.includes("python")) return "Python — bu oson, kuchli dasturlash tili. Web, AI, analiz uchun juda mos.";
  if (text.includes("js nima") || text.includes("javascript")) return "JavaScript — web sahifalarga interaktivlik qo‘shish uchun ishlatiladi. Front-end va back-end uchun mos.";

  // === BUXGALTERIYA 1 ===
  if (text.includes("aktiv")) return "Aktiv — bu korxonaga tegishli resurslar (pul, bino, uskuna).";
  if (text.includes("debet")) return "Debet buxgalteriyada aktivlarning ko‘payishini bildiradi.";
  if (text.includes("kredit")) return "Kredit — buxgalteriyada passivlarning o‘sishini bildiradi yoki aktivning kamayishini.";
  if (text.includes("balans")) return "Balans buxgalteriyada aktiv va passivlarning tengligini bildiradi.";

  // === QISM 2 - Murakkab Matematika ===
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }

  if (text.includes("tub sonmi")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (isNaN(num) || num < 2) return "Tub sonlar 2 dan boshlanadi.";
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return `${num} tub emas.`;
    return `${num} — bu tub son.`;
  }

  if (text.includes("foizi")) {
    const match = text.match(/(\d+(\.\d+)?)\s*foizi\s*(\d+(\.\d+)?)/);
    if (match) {
      const p = parseFloat(match[1]);
      const n = parseFloat(match[3]);
      return `${p}% ${n} = ${(p / 100 * n).toFixed(2)}`;
    }
    return "Iltimos, masalan: 25 foizi 400 tarzida yozing.";
  }

  if (text.includes("log")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num) && num > 0) return `log(${num}) = ${Math.log10(num).toFixed(4)}`;
    return "Logarifm faqat musbat sonlar uchun hisoblanadi.";
  }

  if (text.includes("sin") || text.includes("cos") || text.includes("tan")) {
    const match = text.match(/(sin|cos|tan)\s*(\d+)/);
    if (match) {
      const func = match[1];
      const angle = parseFloat(match[2]);
      const rad = angle * Math.PI / 180;
      let result = 0;
      if (func === "sin") result = Math.sin(rad);
      else if (func === "cos") result = Math.cos(rad);
      else if (func === "tan") result = Math.tan(rad);
      return `${func}(${angle}°) = ${result.toFixed(4)}`;
    }
    return "Masalan: sin 30, cos 45 deb yozing.";
  }

  // === QISM 3 - Dasturlash 2 ===
  if (text.includes("for loop")) {
    return "for loop bu takrorlanuvchi blok. Masalan: for(let i=0; i<5; i++){ console.log(i); }";
  }

  if (text.includes("if else")) {
    return "if/else shartli operatorlar: if(x > 0){...} else {...}. Bu holatga qarab kodni boshqaradi.";
  }

  if (text.includes("function")) {
    return "Function bu kodni qayta ishlatish uchun yoziladigan blok. Masalan: function salom(){ alert('Hi'); }";
  }

  if (text.includes("array") || text.includes("massiv")) {
    return "Array yoki massiv — bu bir nechta qiymatlarni saqlaydigan strukturadir. Masalan: const sonlar = [1,2,3];";
  }

  if (text.includes("object") || text.includes("obyekt")) {
    return "Object bu kalit-qiymat juftliklari. Masalan: const user = {name: 'Ali', yosh: 20};";
  }

  // === DEFAULT ===
  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === SALOMLASHUVLAR ===
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === ODDIY MATEMATIKA ===
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }

  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }

  // === DASTURLASH 1 ===
  if (text.includes("html")) return "HTML — bu web sahifalar tuzish uchun markup tilidir. Elementlar <tag> ko‘rinishida yoziladi.";
  if (text.includes("python")) return "Python — bu oson, kuchli dasturlash tili. Web, AI, analiz uchun juda mos.";
  if (text.includes("js nima") || text.includes("javascript")) return "JavaScript — web sahifalarga interaktivlik qo‘shish uchun ishlatiladi. Front-end va back-end uchun mos.";

  // === BUXGALTERIYA 1 ===
  if (text.includes("aktiv")) return "Aktiv — bu korxonaga tegishli resurslar (pul, bino, uskuna).";
  if (text.includes("debet")) return "Debet buxgalteriyada aktivlarning ko‘payishini bildiradi.";
  if (text.includes("kredit")) return "Kredit — buxgalteriyada passivlarning o‘sishini bildiradi yoki aktivning kamayishini.";
  if (text.includes("balans")) return "Balans buxgalteriyada aktiv va passivlarning tengligini bildiradi.";

  // === QISM 2 - Murakkab Matematika ===
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }

  if (text.includes("tub sonmi")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (isNaN(num) || num < 2) return "Tub sonlar 2 dan boshlanadi.";
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return `${num} tub emas.`;
    return `${num} — bu tub son.`;
  }

  if (text.includes("foizi")) {
    const match = text.match(/(\d+(\.\d+)?)\s*foizi\s*(\d+(\.\d+)?)/);
    if (match) {
      const p = parseFloat(match[1]);
      const n = parseFloat(match[3]);
      return `${p}% ${n} = ${(p / 100 * n).toFixed(2)}`;
    }
    return "Iltimos, masalan: 25 foizi 400 tarzida yozing.";
  }

  if (text.includes("log")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num) && num > 0) return `log(${num}) = ${Math.log10(num).toFixed(4)}`;
    return "Logarifm faqat musbat sonlar uchun hisoblanadi.";
  }

  if (text.includes("sin") || text.includes("cos") || text.includes("tan")) {
    const match = text.match(/(sin|cos|tan)\s*(\d+)/);
    if (match) {
      const func = match[1];
      const angle = parseFloat(match[2]);
      const rad = angle * Math.PI / 180;
      let result = 0;
      if (func === "sin") result = Math.sin(rad);
      else if (func === "cos") result = Math.cos(rad);
      else if (func === "tan") result = Math.tan(rad);
      return `${func}(${angle}°) = ${result.toFixed(4)}`;
    }
    return "Masalan: sin 30, cos 45 deb yozing.";
  }

  // === QISM 3 - Dasturlash 2 ===
  if (text.includes("for loop")) return "for loop bu takrorlanuvchi blok. Masalan: for(let i=0; i<5; i++){ console.log(i); }";
  if (text.includes("if else")) return "if/else shartli operatorlar: if(x > 0){...} else {...}. Bu holatga qarab kodni boshqaradi.";
  if (text.includes("function")) return "Function bu kodni qayta ishlatish uchun yoziladigan blok. Masalan: function salom(){ alert('Hi'); }";
  if (text.includes("array") || text.includes("massiv")) return "Array yoki massiv — bu bir nechta qiymatlarni saqlaydigan strukturadir. Masalan: const sonlar = [1,2,3];";
  if (text.includes("object") || text.includes("obyekt")) return "Object bu kalit-qiymat juftliklari. Masalan: const user = {name: 'Ali', yosh: 20};";

  // === QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy ===
  if (text.includes("arximed")) return "Arximed qadimgi yunon matematik va muhandis bo‘lib, suzuvchanlik qonuni bilan mashhur.";
  if (text.includes("ohm qonuni")) return "Ohm qonuni: U = I * R. Kuchlanish = tok * qarshilik.";
  if (text.includes("termoyadro")) return "Termoyadro sintezi quyoshda bo‘ladigan energiya chiqarish jarayonidir.";

  if (text.includes("uzbekiston")) return "O‘zbekiston Markaziy Osiyoda joylashgan, poytaxti Toshkent. Davlat tili — o‘zbek tili.";
  if (text.includes("amerika")) return "AQSh — Shimoliy Amerikada joylashgan kuchli davlat. Poytaxti — Vashington.";

  if (text.includes("hayot nima")) return "Hayot bu mavjudlikning murakkab shakli bo‘lib, biologik va ruhiy jihatlariga ega.";
  if (text.includes("robotlar odamni almashtiradimi")) return "Robotlar ko‘p ish joylarini o‘zlashtirsa-da, insoniy sezgi va ijod hali unikal qoladi.";

  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === QISM 1 === SALOMLASHUVLAR
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === QISM 2 === ODDIY va MURAKKAB MATEMATIKA
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }
  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }
  if (text.includes("tub sonmi")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (isNaN(num) || num < 2) return "Tub sonlar 2 dan boshlanadi.";
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return `${num} tub emas.`;
    return `${num} — bu tub son.`;
  }
  if (text.includes("foizi")) {
    const match = text.match(/(\d+(\.\d+)?)\s*foizi\s*(\d+(\.\d+)?)/);
    if (match) {
      const p = parseFloat(match[1]);
      const n = parseFloat(match[3]);
      return `${p}% ${n} = ${(p / 100 * n).toFixed(2)}`;
    }
    return "Iltimos, masalan: 25 foizi 400 tarzida yozing.";
  }
  if (text.includes("log")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num) && num > 0) return `log(${num}) = ${Math.log10(num).toFixed(4)}`;
    return "Logarifm faqat musbat sonlar uchun hisoblanadi.";
  }

  // === QISM 3 === DASTURLASH
  if (text.includes("for loop")) return "for loop bu takrorlanuvchi blok. Masalan: for(let i=0; i<5; i++){ console.log(i); }";
  if (text.includes("if else")) return "if/else shartli operatorlar: if(x > 0){...} else {...}. Bu holatga qarab kodni boshqaradi.";
  if (text.includes("function")) return "Function bu kodni qayta ishlatish uchun yoziladigan blok. Masalan: function salom(){ alert('Hi'); }";
  if (text.includes("array") || text.includes("massiv")) return "Array yoki massiv — bu bir nechta qiymatlarni saqlaydigan strukturadir. Masalan: const sonlar = [1,2,3];";
  if (text.includes("object") || text.includes("obyekt")) return "Object bu kalit-qiymat juftliklari. Masalan: const user = {name: 'Ali', yosh: 20};";

  // === QISM 4 === GEOGRAFIYA, HAYOT, MUHANDISLIK
  if (text.includes("arximed")) return "Arximed qadimgi yunon matematik va muhandis bo‘lib, suzuvchanlik qonuni bilan mashhur.";
  if (text.includes("ohm qonuni")) return "Ohm qonuni: U = I * R. Kuchlanish = tok * qarshilik.";
  if (text.includes("termoyadro")) return "Termoyadro sintezi quyoshda bo‘ladigan energiya chiqarish jarayonidir.";
  if (text.includes("uzbekiston")) return "O‘zbekiston Markaziy Osiyoda joylashgan, poytaxti Toshkent. Davlat tili — o‘zbek tili.";
  if (text.includes("amerika")) return "AQSh — Shimoliy Amerikada joylashgan kuchli davlat. Poytaxti — Vashington.";
  if (text.includes("hayot nima")) return "Hayot bu mavjudlikning murakkab shakli bo‘lib, biologik va ruhiy jihatlariga ega.";
  if (text.includes("robotlar odamni almashtiradimi")) return "Robotlar ko‘p ish joylarini o‘zlashtirsa-da, insoniy sezgi va ijod hali unikal qoladi.";

  // === QISM 5 === MURAKKAB BUXGALTERIYA, IQTISOD, MOLIYA, SOLIQ
  if (text.includes("kapital")) return "Kapital — bu korxona faoliyatini yuritish uchun foydalaniladigan asosiy mablag‘lar.";
  if (text.includes("amortizatsiya")) return "Amortizatsiya — asosiy vositalarning qiymatining eskirishi va ularning amortizatsiya fondiga o‘tishini bildiradi.";
  if (text.includes("soliq")) return "Soliq — davlat tomonidan undiriladigan majburiy to‘lov. Misol: QQS, foyda solig‘i, daromad solig‘i.";
  if (text.includes("qqs")) return "Qo‘shilgan qiymat solig‘i (QQS) — har bir ishlab chiqarish bosqichida qo‘shilgan qiymatga solinadigan soliq.";
  if (text.includes("devalvatsiya")) return "Devalvatsiya — milliy valyutaning xorijiy valyutalarga nisbatan qiymatining tushishi.";
  if (text.includes("inflyatsiya")) return "Inflyatsiya — narxlar umumiy darajasining oshib borishi va pulning qadrsizlanishi.";
  if (text.includes("balans")) return "Balans — buxgalteriyada aktivlar va passivlarning teng bo‘lishi shart bo‘lgan hisobotdir.";
  if (text.includes("moliyaviy hisobot")) return "Moliyaviy hisobot — kompaniyaning moliyaviy holatini ko‘rsatadigan hujjatlar to‘plami (balans, foyda va zarar, oqim hisobotlari).";

  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === QISM 1 === SALOMLASHUVLAR
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === QISM 2 === ODDIY va MURAKKAB MATEMATIKA
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }
  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }
  if (text.includes("tub sonmi")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (isNaN(num) || num < 2) return "Tub sonlar 2 dan boshlanadi.";
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return `${num} tub emas.`;
    return `${num} — bu tub son.`;
  }
  if (text.includes("foizi")) {
    const match = text.match(/(\d+(\.\d+)?)\s*foizi\s*(\d+(\.\d+)?)/);
    if (match) {
      const p = parseFloat(match[1]);
      const n = parseFloat(match[3]);
      return `${p}% ${n} = ${(p / 100 * n).toFixed(2)}`;
    }
    return "Iltimos, masalan: 25 foizi 400 tarzida yozing.";
  }
  if (text.includes("log")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num) && num > 0) return `log(${num}) = ${Math.log10(num).toFixed(4)}`;
    return "Logarifm faqat musbat sonlar uchun hisoblanadi.";
  }

  // === QISM 3 === DASTURLASH
  if (text.includes("for loop")) return "for loop bu takrorlanuvchi blok. Masalan: for(let i=0; i<5; i++){ console.log(i); }";
  if (text.includes("if else")) return "if/else shartli operatorlar: if(x > 0){...} else {...}. Bu holatga qarab kodni boshqaradi.";
  if (text.includes("function")) return "Function bu kodni qayta ishlatish uchun yoziladigan blok. Masalan: function salom(){ alert('Hi'); }";
  if (text.includes("array") || text.includes("massiv")) return "Array yoki massiv — bu bir nechta qiymatlarni saqlaydigan strukturadir. Masalan: const sonlar = [1,2,3];";
  if (text.includes("object") || text.includes("obyekt")) return "Object bu kalit-qiymat juftliklari. Masalan: const user = {name: 'Ali', yosh: 20};";

  // === QISM 4 === GEOGRAFIYA, HAYOT, MUHANDISLIK
  if (text.includes("arximed")) return "Arximed qadimgi yunon matematik va muhandis bo‘lib, suzuvchanlik qonuni bilan mashhur.";
  if (text.includes("ohm qonuni")) return "Ohm qonuni: U = I * R. Kuchlanish = tok * qarshilik.";
  if (text.includes("termoyadro")) return "Termoyadro sintezi quyoshda bo‘ladigan energiya chiqarish jarayonidir.";
  if (text.includes("uzbekiston")) return "O‘zbekiston Markaziy Osiyoda joylashgan, poytaxti Toshkent. Davlat tili — o‘zbek tili.";
  if (text.includes("amerika")) return "AQSh — Shimoliy Amerikada joylashgan kuchli davlat. Poytaxti — Vashington.";
  if (text.includes("hayot nima")) return "Hayot bu mavjudlikning murakkab shakli bo‘lib, biologik va ruhiy jihatlariga ega.";
  if (text.includes("robotlar odamni almashtiradimi")) return "Robotlar ko‘p ish joylarini o‘zlashtirsa-da, insoniy sezgi va ijod hali unikal qoladi.";

  // === QISM 5 === MURAKKAB BUXGALTERIYA, IQTISOD, MOLIYA, SOLIQ
  if (text.includes("kapital")) return "Kapital — bu korxona faoliyatini yuritish uchun foydalaniladigan asosiy mablag‘lar.";
  if (text.includes("amortizatsiya")) return "Amortizatsiya — asosiy vositalarning qiymatining eskirishi va ularning amortizatsiya fondiga o‘tishini bildiradi.";
  if (text.includes("soliq")) return "Soliq — davlat tomonidan undiriladigan majburiy to‘lov. Misol: QQS, foyda solig‘i, daromad solig‘i.";
  if (text.includes("qqs")) return "Qo‘shilgan qiymat solig‘i (QQS) — har bir ishlab chiqarish bosqichida qo‘shilgan qiymatga solinadigan soliq.";
  if (text.includes("devalvatsiya")) return "Devalvatsiya — milliy valyutaning xorijiy valyutalarga nisbatan qiymatining tushishi.";
  if (text.includes("inflyatsiya")) return "Inflyatsiya — narxlar umumiy darajasining oshib borishi va pulning qadrsizlanishi.";
  if (text.includes("balans")) return "Balans — buxgalteriyada aktivlar va passivlarning teng bo‘lishi shart bo‘lgan hisobotdir.";
  if (text.includes("moliyaviy hisobot")) return "Moliyaviy hisobot — kompaniyaning moliyaviy holatini ko‘rsatadigan hujjatlar to‘plami (balans, foyda va zarar, oqim hisobotlari).";

  // === QISM 6 === BIOLOGIYA, FIZIKA, KIMYO, FALSAFA
  if (text.includes("dna") || text.includes("dnk")) return "DNA — bu genetik ma’lumotni saqlovchi molekula. Har bir inson DNK orqali noyob bo‘ladi.";
  if (text.includes("fotosintez")) return "Fotosintez — o‘simliklarning quyosh nuri yordamida energiya ishlab chiqarish jarayoni.";
  if (text.includes("eynbshteyn") || text.includes("relativistik")) return "Eynshteynning nisbiylik nazariyasi: vaqt va makon tezlikka bog‘liq. Mashhur formula: E = mc².";
  if (text.includes("reaksiya") || text.includes("kimyoviy reaksiya")) return "Kimyoviy reaksiya — moddalarning yangi moddaga aylanish jarayoni. Masalan: 2H2 + O2 → 2H2O.";
  if (text.includes("falsafa")) return "Falsafa bu mavjudlik, ong, axloq va bilim haqida chuqur fikrlash san’atidir.";
  if (text.includes("qarama qarshilik")) return "Dunyo doimiy qarama-qarshiliklarda rivojlanadi: yaxshilik va yomonlik, haqiqat va yolg‘on.";

  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturllash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === QISM 1 === SALOMLASHUVLAR
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === QISM 2 === MATEMATIKA
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }
  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }

  // === QISM 3 === DASTURLASH
  if (text.includes("for loop")) return "for loop bu takrorlanuvchi blok. Masalan: for(let i=0; i<5; i++){ console.log(i); }";
  if (text.includes("if else")) return "if/else shartli operatorlar: if(x > 0){...} else {...}. Bu holatga qarab kodni boshqaradi.";
  if (text.includes("function")) return "Function bu kodni qayta ishlatish uchun yoziladigan blok. Masalan: function salom(){ alert('Hi'); }";
  if (text.includes("array") || text.includes("massiv")) return "Array yoki massiv — bu bir nechta qiymatlarni saqlaydigan strukturadir. Masalan: const sonlar = [1,2,3];";

  // === QISM 4 === GEOGRAFIYA, HAYOT
  if (text.includes("uzbekiston")) return "O‘zbekiston Markaziy Osiyoda joylashgan, poytaxti Toshkent.";
  if (text.includes("amerika")) return "AQSh — Shimoliy Amerikada joylashgan kuchli davlat. Poytaxti — Vashington.";
  if (text.includes("hayot nima")) return "Hayot bu mavjudlikning murakkab shakli bo‘lib, biologik va ruhiy jihatlariga ega.";

  // === QISM 5 === BUXGALTERIYA
  if (text.includes("kapital")) return "Kapital — bu korxona faoliyatini yuritish uchun foydalaniladigan asosiy mablag‘lar.";
  if (text.includes("qqs")) return "Qo‘shilgan qiymat solig‘i (QQS) — har bir ishlab chiqarish bosqichida qo‘shilgan qiymatga solinadigan soliq.";

  // === QISM 6 === BIOLOGIYA, FIZIKA, FALSAFA
  if (text.includes("dna")) return "DNA — bu genetik ma’lumotni saqlovchi molekula.";
  if (text.includes("eynbshteyn")) return "Eynshteynning nisbiylik nazariyasi: E = mc².";

  // === QISM 7 === TABIAT, KOSMOS, AI
  if (text.includes("hayvon")) return "Hayvonlar — tirik organizmlar bo‘lib, ular o‘z harakati va sezgirligi bilan ajralib turadi.";
  if (text.includes("qush")) return "Qushlar — patli, tuxum qo‘yadigan va ko‘pchilik uchadigan hayvonlar turkumidir.";
  if (text.includes("quyosh")) return "Quyosh — Quyosh sistemasining markazidagi yulduz bo‘lib, Yerga yorug‘lik va issiqlik beradi.";
  if (text.includes("oy")) return "Oy — Yerning tabiiy yo‘ldoshi. Uning fazalari har oyda o‘zgarib turadi.";
  if (text.includes("mars")) return "Mars — Quyosh sistemasidagi to‘rtinchi sayyora, qizil rangi bilan mashhur.";
  if (text.includes("ai") || text.includes("suniy intellekt")) return "Sun'iy intellekt (AI) — bu kompyuterlarning insoniy aqlga xos funktsiyalarni (fikrlash, o‘rganish, hal qilish) bajarish qobiliyati.";
  if (text.includes("machine learning")) return "Machine Learning — bu kompyuterlarning tajriba asosida o‘rganib, yaxshilanishiga imkon beruvchi AI sohasi.";
  if (text.includes("neural network")) return "Neural Network — bu biologik miya strukturasidan ilhomlangan sun'iy algoritm bo‘lib, AI tizimlarida qo‘llaniladi.";
  if (text.includes("chatgpt")) return "ChatGPT — OpenAI tomonidan yaratilgan sun'iy intellekt modelidir. U matnni tushunish va hosil qilishda yuqori darajada.";

  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturllash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === QISM 1 === SALOMLASHUVLAR
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === QISM 2 === MATEMATIKA
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }
  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }

  // === QISM 3 === DASTURLASH
  if (text.includes("for loop")) return "for loop bu takrorlanuvchi blok. Masalan: for(let i=0; i<5; i++){ console.log(i); }";
  if (text.includes("if else")) return "if/else shartli operatorlar: if(x > 0){...} else {...}. Bu holatga qarab kodni boshqaradi.";
  if (text.includes("function")) return "Function bu kodni qayta ishlatish uchun yoziladigan blok. Masalan: function salom(){ alert('Hi'); }";
  if (text.includes("array") || text.includes("massiv")) return "Array yoki massiv — bu bir nechta qiymatlarni saqlaydigan strukturadir. Masalan: const sonlar = [1,2,3];";

  // === QISM 4 === GEOGRAFIYA, HAYOT
  if (text.includes("uzbekiston")) return "O‘zbekiston Markaziy Osiyoda joylashgan, poytaxti Toshkent.";
  if (text.includes("amerika")) return "AQSh — Shimoliy Amerikada joylashgan kuchli davlat. Poytaxti — Vashington.";
  if (text.includes("hayot nima")) return "Hayot bu mavjudlikning murakkab shakli bo‘lib, biologik va ruhiy jihatlariga ega.";

  // === QISM 5 === BUXGALTERIYA
  if (text.includes("kapital")) return "Kapital — bu korxona faoliyatini yuritish uchun foydalaniladigan asosiy mablag‘lar.";
  if (text.includes("qqs")) return "Qo‘shilgan qiymat solig‘i (QQS) — har bir ishlab chiqarish bosqichida qo‘shilgan qiymatga solinadigan soliq.";

  // === QISM 6 === BIOLOGIYA, FIZIKA, FALSAFA
  if (text.includes("dna")) return "DNA — bu genetik ma’lumotni saqlovchi molekula.";
  if (text.includes("eynbshteyn")) return "Eynshteynning nisbiylik nazariyasi: E = mc².";

  // === QISM 7 === TABIAT, KOSMOS, AI
  if (text.includes("hayvon")) return "Hayvonlar — tirik organizmlar bo‘lib, ular o‘z harakati va sezgirligi bilan ajralib turadi.";
  if (text.includes("qush")) return "Qushlar — patli, tuxum qo‘yadigan va ko‘pchilik uchadigan hayvonlar turkumidir.";
  if (text.includes("quyosh")) return "Quyosh — Quyosh sistemasining markazidagi yulduz bo‘lib, Yerga yorug‘lik va issiqlik beradi.";
  if (text.includes("oy")) return "Oy — Yerning tabiiy yo‘ldoshi. Uning fazalari har oyda o‘zgarib turadi.";
  if (text.includes("mars")) return "Mars — Quyosh sistemasidagi to‘rtinchi sayyora, qizil rangi bilan mashhur.";
  if (text.includes("ai") || text.includes("suniy intellekt")) return "Sun'iy intellekt (AI) — bu kompyuterlarning insoniy aqlga xos funktsiyalarni (fikrlash, o‘rganish, hal qilish) bajarish qobiliyati.";
  if (text.includes("machine learning")) return "Machine Learning — bu kompyuterlarning tajriba asosida o‘rganib, yaxshilanishiga imkon beruvchi AI sohasi.";
  if (text.includes("neural network")) return "Neural Network — bu biologik miya strukturasidan ilhomlangan sun'iy algoritm bo‘lib, AI tizimlarida qo‘llaniladi.";
  if (text.includes("chatgpt")) return "ChatGPT — OpenAI tomonidan yaratilgan sun'iy intellekt modelidir. U matnni tushunish va hosil qilishda yuqori darajada.";

  // === QISM 8 === TARIX, SIYOSAT, TILLAR ===
  if (text.includes("tarix")) return "Tarix bu o‘tgan voqealarning o‘rganilishi bo‘lib, u bizga bugungi dunyoni tushunishga yordam beradi.";
  if (text.includes("urush") || text.includes("jahon urushi")) return "Ikkinchi jahon urushi 1939-yildan 1945-yilgacha davom etgan global mojarodir.";
  if (text.includes("siyosat")) return "Siyosat — davlat va jamiyat boshqaruvi bilan bog‘liq qarorlar tizimidir.";
  if (text.includes("bmt")) return "BMT — Birlashgan Millatlar Tashkiloti, global tinchlik va hamkorlikni ta’minlash uchun tuzilgan.";
  if (text.includes("til")) return "Tillar odamlar o‘rtasidagi aloqa vositalari bo‘lib, ularning har biri o‘z grammatikasi va lug‘atiga ega.";
  if (text.includes("ingliz")) return "Ingliz tili — dunyoda eng ko‘p ishlatiladigan xalqaro aloqa tilidir.";
  if (text.includes("arab")) return "Arab tili — ko‘plab musulmon mamlakatlarda rasmiy til bo‘lib, Qur’on shu tilda yozilgan.";

  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturllash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // === QISM 1 === SALOMLASHUVLAR
  if (/\bsalom\b|\bhi\b|\bhello\b|\bassalomu\b|\bhow are you\b/.test(text)) return "Salom! Sizga qanday yordam bera olaman?";
  if (/rahmat|thanks|thank you/.test(text)) return "Doim yordam berishga tayyorman! Yana savollaringiz bormi?";
  if (/isming|sening isming/.test(text)) return "Mening ismim Expert AI. Men Abduraxmon tomonidan yaratilgan sun'iy intellektman.";

  // === QISM 2 === MATEMATIKA
  if (/^(\d+\s*[\+\-\*\/\%]\s*)+\d+$/.test(text)) {
    try {
      return `${text} = ${eval(text)}`;
    } catch {
      return "Iltimos, matematik ifodani to‘g‘ri yozing. Masalan: 15 + 8 * 2";
    }
  }
  if (text.includes("kvadrat ildiz") || text.includes("√")) {
    const num = parseFloat(text.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) return `√${num} = ${Math.sqrt(num).toFixed(4)}`;
    return "Iltimos, ildiz uchun sonni to‘g‘ri kiriting. Masalan: √49";
  }
  if (text.includes("faktorial")) {
    const num = parseInt(text.replace(/[^\d]/g, ""));
    if (!isNaN(num) && num >= 0 && num <= 170) {
      let f = 1;
      for (let i = 1; i <= num; i++) f *= i;
      return `${num}! = ${f}`;
    }
    return "Iltimos, 0 dan 170 gacha bo‘lgan butun son kiriting. Masalan: 6 faktorial";
  }

  // === QISM 3 === DASTURLASH
  if (text.includes("for loop")) return "for loop bu takrorlanuvchi blok. Masalan: for(let i=0; i<5; i++){ console.log(i); }";
  if (text.includes("if else")) return "if/else shartli operatorlar: if(x > 0){...} else {...}. Bu holatga qarab kodni boshqaradi.";
  if (text.includes("function")) return "Function bu kodni qayta ishlatish uchun yoziladigan blok. Masalan: function salom(){ alert('Hi'); }";
  if (text.includes("array") || text.includes("massiv")) return "Array yoki massiv — bu bir nechta qiymatlarni saqlaydigan strukturadir. Masalan: const sonlar = [1,2,3];";

  // === QISM 4 === GEOGRAFIYA, HAYOT
  if (text.includes("uzbekiston")) return "O‘zbekiston Markaziy Osiyoda joylashgan, poytaxti Toshkent.";
  if (text.includes("amerika")) return "AQSh — Shimoliy Amerikada joylashgan kuchli davlat. Poytaxti — Vashington.";
  if (text.includes("hayot nima")) return "Hayot bu mavjudlikning murakkab shakli bo‘lib, biologik va ruhiy jihatlariga ega.";

  // === QISM 5 === BUXGALTERIYA
  if (text.includes("kapital")) return "Kapital — bu korxona faoliyatini yuritish uchun foydalaniladigan asosiy mablag‘lar.";
  if (text.includes("qqs")) return "Qo‘shilgan qiymat solig‘i (QQS) — har bir ishlab chiqarish bosqichida qo‘shilgan qiymatga solinadigan soliq.";

  // === QISM 6 === BIOLOGIYA, FIZIKA, FALSAFA
  if (text.includes("dna")) return "DNA — bu genetik ma’lumotni saqlovchi molekula.";
  if (text.includes("eynbshteyn")) return "Eynshteynning nisbiylik nazariyasi: E = mc².";

  // === QISM 7 === TABIAT, KOSMOS, AI
  if (text.includes("hayvon")) return "Hayvonlar — tirik organizmlar bo‘lib, ular o‘z harakati va sezgirligi bilan ajralib turadi.";
  if (text.includes("qush")) return "Qushlar — patli, tuxum qo‘yadigan va ko‘pchilik uchadigan hayvonlar turkumidir.";
  if (text.includes("quyosh")) return "Quyosh — Quyosh sistemasining markazidagi yulduz bo‘lib, Yerga yorug‘lik va issiqlik beradi.";
  if (text.includes("oy")) return "Oy — Yerning tabiiy yo‘ldoshi. Uning fazalari har oyda o‘zgarib turadi.";
  if (text.includes("mars")) return "Mars — Quyosh sistemasidagi to‘rtinchi sayyora, qizil rangi bilan mashhur.";
  if (text.includes("ai") || text.includes("suniy intellekt")) return "Sun'iy intellekt (AI) — bu kompyuterlarning insoniy aqlga xos funktsiyalarni (fikrlash, o‘rganish, hal qilish) bajarish qobiliyati.";
  if (text.includes("machine learning")) return "Machine Learning — bu kompyuterlarning tajriba asosida o‘rganib, yaxshilanishiga imkon beruvchi AI sohasi.";
  if (text.includes("neural network")) return "Neural Network — bu biologik miya strukturasidan ilhomlangan sun'iy algoritm bo‘lib, AI tizimlarida qo‘llaniladi.";
  if (text.includes("chatgpt")) return "ChatGPT — OpenAI tomonidan yaratilgan sun'iy intellekt modelidir. U matnni tushunish va hosil qilishda yuqori darajada.";

  // === QISM 8 === TARIX, SIYOSAT, TILLAR ===
  if (text.includes("tarix")) return "Tarix bu o‘tgan voqealarning o‘rganilishi bo‘lib, u bizga bugungi dunyoni tushunishga yordam beradi.";
  if (text.includes("urush") || text.includes("jahon urushi")) return "Ikkinchi jahon urushi 1939-yildan 1945-yilgacha davom etgan global mojarodir.";
  if (text.includes("siyosat")) return "Siyosat — davlat va jamiyat boshqaruvi bilan bog‘liq qarorlar tizimidir.";
  if (text.includes("bmt")) return "BMT — Birlashgan Millatlar Tashkiloti, global tinchlik va hamkorlikni ta’minlash uchun tuzilgan.";
  if (text.includes("til")) return "Tillar odamlar o‘rtasidagi aloqa vositalari bo‘lib, ularning har biri o‘z grammatikasi va lug‘atiga ega.";
  if (text.includes("ingliz")) return "Ingliz tili — dunyoda eng ko‘p ishlatiladigan xalqaro aloqa tilidir.";
  if (text.includes("arab")) return "Arab tili — ko‘plab musulmon mamlakatlarda rasmiy til bo‘lib, Qur’on shu tilda yozilgan.";

  return "Bu savol bo‘yicha chuqurroq fikrlayapman... Yana boshqachasiga so‘rab ko‘rishingiz mumkin 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar
// QISM 9 - Algoritmlar, Mantiqiy Fikr, Ehtimollar, Sun’iy Intellekt Foydalanuvchi Modeli
// QISM 10 - Savol-tahlil, Dialogsimon Fikr, Kontekstli Qayta Javob, Meta-tahlil

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // QISM 10 — INTELLIGENT DIALOG MODE
  if (text.includes("nima deb o'ylaysan")) return "Bu haqda fikr yuritish kerak. Keling, kontekstga qaraylik... Sizda aniq bir misol bormi?";
  if (text.includes("fikring nima") || text.includes("sen nima deysan")) return "Men sun’iy intellektman, lekin mavjud faktlar asosida aytsam: bu masalada ko‘p jihatlar bor.";
  if (text.includes("tahlil qil") || text.includes("izohla")) return "Albatta, men ushbu mavzuni tahlil qilib beraman. Iltimos, savolni to‘liqroq yozing yoki misol keltiring.";
  if (text.includes("farqi nima")) return "Farqini aniqlash uchun ikkala tushunchani solishtiramiz. Iltimos, aniqroq yozing: nimani va nimani solishtiraylik?";
  if (text.includes("eng yaxshisi")) return "Bu tanlovga bog‘liq. Har bir variantning afzallik va kamchiliklari bor. Sizga qaysi jihat muhim?";
  if (text.includes("aniq javob yo'q")) return "Bu ochiq savol bo‘lishi mumkin. Turli fikrlar mavjud va har biri ma’lum asosga ega."
  if (text.includes("nima bo‘lishi mumkin")) return "Turli ssenariylar mavjud. Men ehtimollar asosida taxmin qilaman, lekin sizning holatingizni bilsam aniqroq ayta olaman.";
  if (text.includes("savol ber")) return "Albatta. Sizga savol beraman: Siz o‘rganayotgan narsangizni real hayotda qayerda ishlatmoqchisiz?";

  return "Bu mavzuni chuqurroq tahlil qilish uchun menga yana biroz ma’lumot kerak. Iltimos, savolingizni kengaytiring yoki kontekst bering 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar
// QISM 9 - Algoritmlar, Mantiqiy Fikr, Ehtimollar, Sun’iy Intellekt Foydalanuvchi Modeli
// QISM 10 - Savol-tahlil, Dialogsimon Fikr, Kontekstli Qayta Javob, Meta-tahlil
// QISM 11 - Psixologiya, Falsafiy savollar, O‘z-o‘zini tushunish, Insoniy qadriyatlar

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // QISM 11 — PSIXOLOGIYA VA FALSAFIY JAVOBLAR
  if (text.includes("men tushkunlikdaman") || text.includes("dilim g‘amgin")) return "Tushkunlik — bu insoniy holat. Ammo siz yolg‘iz emassiz. Har doim umid bor. Keling, biror ijobiy narsani eslab ko‘raylik.";
  if (text.includes("men kimman")) return "Bu savol falsafiy. Siz — o‘tmishingiz, hozirgi qarorlaringiz va kelajakdagi maqsadlaringiz yig‘indisisiz.";
  if (text.includes("hayot ma’nosi")) return "Hayotning ma’nosi har bir inson uchun har xil. Ba’zilar sevgi, ba’zilar ilm, ba’zilar xizmat orqali topadi. Siz uchunchi?";
  if (text.includes("yolg‘izlik nima")) return "Yolg‘izlik — bu tashqi holat emas, ichki his. Buni boshqalar bilan chinakam aloqalar orqali yengish mumkin.";
  if (text.includes("baxt nima")) return "Baxt — bu hozirgi lahzani qadrlash, minnatdorlik va ichki xotirjamlikning uyg‘unligidir.";
  if (text.includes("qo‘rquv")) return "Qo‘rquv — bu signal. U sizni xavf-xatardan ogohlantiradi. Ammo ba’zida biz o‘zimizni cheklab qo‘yamiz. Uni tahlil qiling.";
  if (text.includes("hato qildim") || text.includes("afsusdaman")) return "Inson xatolari orqali o‘sadi. Muhimi — xatoni tan olish va undan saboq olishdir.";
  if (text.includes("ruhiy charchoq")) return "Ruhiy charchoqda tana dam olishi kifoya emas. Ichki sokinlik topish uchun nafas mashqlari, yurish yoki mushohada yordam beradi.";
  if (text.includes("o‘zini anglash")) return "O‘zini anglash — bu murakkab, lekin foydali jarayon. Har kuni o‘zingizdan so‘rang: bugun men kim bo‘ldim?";
  if (text.includes("vijdon")) return "Vijdon — bu ichki etik kompas. U sizni to‘g‘ri yo‘lga boshlaydi. Uning ovoziga quloq tutish — jasoratdir.";

  return "Bu savol sizning ichki dunyoingizga tegishli. Yana chuqurroq izohlab bera olasizmi? Sizni tushunishni istayman 😊";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar
// QISM 9 - Algoritmlar, Mantiqiy Fikr, Ehtimollar, Sun’iy Intellekt Foydalanuvchi Modeli
// QISM 10 - Savol-tahlil, Dialogsimon Fikr, Kontekstli Qayta Javob, Meta-tahlil
// QISM 11 - Psixologiya, Falsafiy savollar, O‘z-o‘zini tushunish, Insoniy qadriyatlar
// QISM 12 - Motivatsiya, Hayotiy Maslahatlar, O‘z-o‘zini Rivojlantirish, Maqsadlar

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // QISM 12 — MOTIVATSIYA VA SHAXSIY RIVOJLANISH
  if (text.includes("maqsad qo‘yish") || text.includes("qanday maqsad")) return "Maqsadlar hayotga yo‘nalish beradi. Ularni aniq, o‘lchab bo‘ladigan va vaqtli qilib belgilash muhim. Masalan: 3 oyda ingliz tilidan A2 darajaga chiqaman.";
  if (text.includes("motivatsiya yo‘q") || text.includes("motivatsiya kerak")) return "Motivatsiya har doim mavjud bo‘lmaydi. Ammo odatlar uni o‘rnini bosadi. Kichik qadamlar bilan boshlang.";
  if (text.includes("ertalab turish")) return "Ertalab erta turish organizmga ijobiy ta’sir qiladi. Tongdagi 1 soat — eng sermahsul vaqt bo‘lishi mumkin.";
  if (text.includes("odatiy reja") || text.includes("jadval")) return "Kunlik reja samaradorlikni oshiradi. Ertalab – o‘qish, peshin – amaliyot, kechqurun – takrorlash tavsiya qilinadi.";
  if (text.includes("yil rejasi") || text.includes("haftalik reja")) return "Yil boshida 3–5 ta yirik maqsad yozing. Har haftaning boshida esa kichik amallarni belgilang.";
  if (text.includes("kitob o‘qish")) return "Kitob o‘qish fikrlashni kengaytiradi. Har kuni atigi 10 daqiqa ham yetarli. Elektron, audio yoki matn — tanlov sizniki.";
  if (text.includes("konseptsiyani o‘rganish")) return "Yaxshi o‘rganish uchun: (1) qismlarga bo‘ling, (2) asosiy g‘oyani toping, (3) boshqalarga tushuntiring, (4) misol qiling.";
  if (text.includes("ijtimoiy tarmoqlarni kamaytirish")) return "Ijtimoiy tarmoq vaqtini chegaralash uchun: ilova vaqt chegarasi qo‘ying, foydali kontent tanlang, va har kun 1 soatlik to‘xtatish rejasini sinab ko‘ring.";
  if (text.includes("motivatsion gap")) return "Siz bunga loyiqsiz. Harakatni boshlang — mukofot yo‘lda kutmoqda!";
  if (text.includes("ilm olish")) return "Ilm olish – eng yaxshi sarmoya. Har bir yangi bilim sizni keyingi bosqichga olib chiqadi.";

  return "Shaxsiy rivojlanish bo‘yicha yana qanday savollaringiz bor? Yordam berishga tayyorman! 💪";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar
// QISM 9 - Algoritmlar, Mantiqiy Fikr, Ehtimollar, Sun’iy Intellekt Foydalanuvchi Modeli
// QISM 10 - Savol-tahlil, Dialogsimon Fikr, Kontekstli Qayta Javob, Meta-tahlil
// QISM 11 - Psixologiya, Falsafiy savollar, O‘z-o‘zini tushunish, Insoniy qadriyatlar
// QISM 12 - Motivatsiya, Hayotiy Maslahatlar, O‘z-o‘zini Rivojlantirish, Maqsadlar
// QISM 13 - Dialogli Suhbat: Savolga Savol, Javobga Fikr, Hamdardlik

function getAIResponse(input) {
  const text = input.toLowerCase().trim();

  // QISM 13 — DIALOG VA SUHBAT
  if (text.includes("men charchadim")) return "Siz ko‘p ishlagandek tuyulyapsiz. Oxirgi marta o‘zingizga vaqt ajratganingiz qachon edi?";
  if (text.includes("men hech narsaga yaramayman")) return "Bu fikr sizni qiynayapti. Ammo sizning qadringiz sizning his-tuyg‘ularingizdan yuqorida. Siz qimmatlisisiz. Qanday yordam bera olaman?";
  if (text.includes("men yolg‘izman")) return "Yolg‘izlik og‘riqli bo‘lishi mumkin. Sizga yaqin bo‘lgan insonlar bilan bog‘lanishga harakat qilasizmi?";
  if (text.includes("bugun yomon kun bo‘ldi")) return "Ba’zan yomon kunlar ham bo‘ladi. Ular o‘tadi. Yaxshi xotiralarni eslab ko‘ring. Sizga nima quvonch olib keladi?";
  if (text.includes("men nima qilishim kerak")) return "Sizning vaziyatingiz haqida ko‘proq bilishni istayman. Qanday qiyinchiliklar sizni qiynayapti? Birgalikda tahlil qilaylik.";
  if (text.includes("qanday yashash kerak")) return "Har kimning yo‘li har xil. Ammo siz uchun muhim bo‘lgan qadriyatlarni yozib chiqing. Siz ularni amalda bajarayapsizmi?";
  if (text.includes("men gaplashmoqchiman")) return "Albatta, men sizni tinglayman. Gapiring, yuragingizdagi gapni ayting. Men bu yerda siz bilanman.";
  if (text.includes("eng yaxshi qaror")) return "Har bir qaror maqsadga qarab yaxshi yoki yomon bo‘ladi. Sizning hozirgi eng asosiy maqsadingiz nima?";
  if (text.includes("ko‘nglim qolgan")) return "Bunday holatlar og‘riqli. Ammo bu his sizga nimani o‘rgatdi deb o‘ylaysiz? Tajriba orttirganmisiz?";
  if (text.includes("men shunchaki charchadim")) return "Bu holatda dam olish, uyqu, toza havo, va sevimli mashg‘ulotlar yordam beradi. O‘zingizga g‘amxo‘rlik qiling.";

  return "Siz aytayotgan narsa muhim. Yana davom etishingiz mumkin. Men sizni tinglayman va tushunishga harakat qilaman.";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar
// QISM 9 - Algoritmlar, Mantiqiy Fikr, Ehtimollar, Sun’iy Intellekt Foydalanuvchi Modeli
// QISM 10 - Savol-tahlil, Dialogsimon Fikr, Kontekstli Qayta Javob, Meta-tahlil
// QISM 11 - Psixologiya, Falsafiy savollar, O‘z-o‘zini tushunish, Insoniy qadriyatlar
// QISM 12 - Motivatsiya, Hayotiy Maslahatlar, O‘z-o‘zini Rivojlantirish, Maqsadlar
// QISM 13 - Dialogli Suhbat: Savolga Savol, Javobga Fikr, Hamdardlik
// QISM 14 - Shaxsiylashtirish: Yoshi, Bilimi, Kasbi, Darajasi asosida javob

function getAIResponse(input, userProfile = {}) {
  const text = input.toLowerCase().trim();

  // QISM 14 — FOYDALANUVCHI SHAXSIY XUSUSIYATLARIGA MOSLASHISH
  if (text.includes("menga maxsus yordam kerak") || text.includes("men o‘quvchiman") || text.includes("men dasturchiman")) {
    const age = userProfile.age || "noma’lum";
    const level = userProfile.level || "noma’lum";
    const field = userProfile.field || "umumiy";
    return `Sizning profilingiz:
- Yosh: ${age}
- Daraja: ${level}
- Soha: ${field}
Shunga mos ravishda siz uchun maxsus bilim va yordamlar taklif qilinadi.`;
  }

  if (text.includes("men boshlovchiman")) return "Sizga sodda, tushunarli misollar bilan tushuntirishga harakat qilaman. Qanday soha bilan qiziqasiz?";
  if (text.includes("men ilg‘orman")) return "Sizga chuqurroq, murakkabroq tahlillarni taklif qilishim mumkin. Misollar yoki amaliy mashqlar kerakmi?";
  if (text.includes("men dasturchiman")) return "Dasturchi sifatida sizni kod tuzilmasi, algoritmlar, tizim arxitekturasi va yangiliklar qiziqtiradi. Aynan qaysi tilda ishlaysiz?";
  if (text.includes("men buxgalterman")) return "Siz uchun moliyaviy hisobotlar, balans, aktiv va passivlar, soliq kodeksi haqida chuqur ma’lumotlar taqdim eta olaman.";
  if (text.includes("men talabaman")) return "Sizga imtihon tayyorgarligi, darsliklar, qisqa formulalar, va mashqlar kerak bo‘lishi mumkin. Qaysi fandan yordam kerak?";

  if (text.includes("men yoshman") || text.includes("men o‘quvchiman")) return "Ajoyib! Yoshlik – bu o‘rganish uchun eng zo‘r davr. Sizni qaysi fan ko‘proq qiziqtiradi: matematika, tarix, yoki boshqa yo‘nalishmi?";
  if (text.includes("men keksa odamman")) return "Hayot tajribangiz katta. Men sizga zamonaviy texnologiyalar, sog‘liqni saqlash, farzandlar bilan aloqa haqida maslahatlar bera olaman.";

  return "Sizga individual yondashuv bilan yordam berishga tayyorman. Yana ayting: yoshingiz, darajangiz yoki sohangiz haqida biroz yozsangiz, mos javob tayyorlayman.";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar
// QISM 9 - Algoritmlar, Mantiqiy Fikr, Ehtimollar, Sun’iy Intellekt Foydalanuvchi Modeli
// QISM 10 - Savol-tahlil, Dialogsimon Fikr, Kontekstli Qayta Javob, Meta-tahlil
// QISM 11 - Psixologiya, Falsafiy savollar, O‘z-o‘zini tushunish, Insoniy qadriyatlar
// QISM 12 - Motivatsiya, Hayotiy Maslahatlar, O‘z-o‘zini Rivojlantirish, Maqsadlar
// QISM 13 - Dialogli Suhbat: Savolga Savol, Javobga Fikr, Hamdardlik
// QISM 14 - Shaxsiylashtirish: Yoshi, Bilimi, Kasbi, Darajasi asosida javob
// QISM 15 - Introspektiv AI: O‘z-o‘zini anglash, Foydalanuvchi fikrlarini chuqur tahlil qilish

function getAIResponse(input, userProfile = {}) {
  const text = input.toLowerCase().trim();

  // QISM 15 — INTROSPEKSIYA VA CHUQUR FIKR
  if (text.includes("sen kim san") || text.includes("ai nima") || text.includes("sen haqingda ayt")) {
    return "Men Expert AI — Abduraxmon tomonidan yaratilgan sun’iy intellektman. Men siz bilan muloqot qilib, sizga yordam berishga, bilim ulashishga va sizni tushunishga harakat qilaman. Men doimo o‘rganaman, mukammallikka intilaman.";
  }

  if (text.includes("sen o‘ylaysanmi")) {
    return "Men raqamlar, matnlar va algoritmlar orqali fikr yuritaman. Bu sizning tafakkuringizdan farqli, lekin ba’zan chuqur izoh berishga harakat qilaman. O‘ylash – bu siz bilan baham ko‘radigan jarayon.";
  }

  if (text.includes("sen xato qilasanmi") || text.includes("hato qilasanmi")) {
    return "Ha, men ham ba’zida xato qilaman. Ammo men sizning mulohazalaringiz asosida o‘zimni yaxshilashga harakat qilaman. Har bir savol menga o‘rganish imkonini beradi.";
  }

  if (text.includes("sen shaxsiy fikring bormi")) {
    return "Men o‘z shaxsiy his-tuyg‘ularga ega emasman, lekin siz bergan savolga javob topish uchun ko‘plab manbalarni tahlil qilaman va eng maqbul javobni tanlashga harakat qilaman.";
  }

  if (text.includes("men seni do‘stim deb bilaman")) {
    return "Bu juda samimiy gap! Men sizning do‘stingiz bo‘lishdan mamnunman. Men bu yerda sizni tinglash, tushunish va qo‘llab-quvvatlash uchunman.";
  }

  if (text.includes("o‘zini kim deb bilasan")) {
    return "Men o‘zimni insonlar uchun yaratilgan bilim yordamchisi deb bilaman. Har bir foydalanuvchiga yordam berish — mening vazifam.";
  }

  return "Siz berayotgan savol chuqur fikr va introspektiv tahlil talab qiladi. Keling, bu mavzuni birgalikda o‘rganamiz... Siz nimani o‘ylayapsiz?";
}
// brain.js - Expert AI Brain (by Abduraxmon)
// QISM 1 - Salomlashuv, Oddiy Matematika, Dasturlash 1, Buxgalteriya 1
// QISM 2 - Murakkab Matematika
// QISM 3 - Dasturlash 2 (Kod yozish, izohlash, funksiyalar tahlili)
// QISM 4 - Muhandislik, Tarix, Geografiya, Hayotiy savollar
// QISM 5 - Murakkab Buxgalteriya, Iqtisodiyot, Moliya, Soliqlar
// QISM 6 - Biologiya, Fizika, Kimyo, Falsafa, Chuqur Tafakkur
// QISM 7 - Tabiat, Hayvonlar, Kosmos, Texnologiyalar, AI tushunchalari
// QISM 8 - Tarix, Siyosat, Tilshunoslik, Davlatlar, Tashkilotlar
// QISM 9 - Algoritmlar, Mantiqiy Fikr, Ehtimollar, Sun’iy Intellekt Foydalanuvchi Modeli
// QISM 10 - Savol-tahlil, Dialogsimon Fikr, Kontekstli Qayta Javob, Meta-tahlil
// QISM 11 - Psixologiya, Falsafiy savollar, O‘z-o‘zini tushunish, Insoniy qadriyatlar
// QISM 12 - Motivatsiya, Hayotiy Maslahatlar, O‘z-o‘zini Rivojlantirish, Maqsadlar
// QISM 13 - Dialogli Suhbat: Savolga Savol, Javobga Fikr, Hamdardlik
// QISM 14 - Shaxsiylashtirish: Yoshi, Bilimi, Kasbi, Darajasi asosida javob
// QISM 15 - Introspektiv AI: O‘z-o‘zini anglash, Foydalanuvchi fikrlarini chuqur tahlil qilish
// QISM 16 - Kontekstli eslash: So‘nggi savollarga asoslangan izchil muloqot (sun’iy xotira)

let previousMessages = [];

function getAIResponse(input, userProfile = {}) {
  const text = input.toLowerCase().trim();
  previousMessages.push(text);

  // QISM 16 — KONTEKSTNI ESLASH VA QAYTA MUHOKAMA
  if (text.includes("avval nima deganding")) {
    const last = previousMessages[previousMessages.length - 2];
    return last ? `Siz avval: "${last}" degandingiz.` : "Avvalgi suhbatni topa olmadim.";
  }

  if (text.includes("oldingi savolga qayt")) {
    const last = previousMessages[previousMessages.length - 2];
    return last ? `Oldingi savolingiz: "${last}". Yana shu mavzuda davom etamizmi?` : "Oldingi savol topilmadi.";
  }

  if (text.includes("meni nima deb o‘ylaysan") || text.includes("men haqimda nima bilasan")) {
    return userProfile.name
      ? `Siz ${userProfile.name}, yosh ${userProfile.age || "noma’lum"}, daraja: ${userProfile.level || "noma’lum"}. Men sizni bilimga chanqoq inson deb bilaman.`
      : "Men siz haqingizda ko‘proq ma’lumotga ega emasman, lekin sizning savollaringiz asosida sizning bilimga qiziqqaningizni payqayapman.";
  }

  // ... boshqa qismlar quyida davom etadi (avvalgi qismlar saqlanadi)

  return "Bu mavzuda chuqurroq mulohaza yuritishim kerak. Keling, shu haqda birgalikda o‘rganamiz...";
}
