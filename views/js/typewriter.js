const textArray = [
  `Aşkım
Bebeğim
Canım
Bitanem
Ömrüm
Balım
Kuzum
Güzelim
Tatlım
Yavrum
Hayatım
Can Yoldaşım
Gözbebeğim
Sevgilim
Bebişim
Prensesim
Meleğim
Kraliçem
Aşk
Herşeyim
Yarim
Yıldızım
Güneşim
Ayım
Gecem
Gündüzüm
Sonsuzum
Kaderim
Biricik Sevgilim...
`,
`Söze yine nerden nasıl başlasam bilemiyorum aşkım. Her seferinde güzel gözlerinden, elma yanaklarından, boncuk gözlerinden, inci tanesi dişlerinden, ipek gibi kaşlarından kirpiklerinden, tatlış mı tatlış dudağından.... Hangisinden başlasam bilemiyorum hepsi çok güzel. Hepsi aklımı başımdan alıyor. Bugün çok farklı bir yerden girmeye karar verdim. Sana olan sevgimden bahsetmeye karar verdim. Bu özel güne de bu güzel konu yakışırdı.. 460 Gün diyeyim. Tamı tamına 460 gün sevgilim. Dile Kolay 460 gün bebeğim... 460 gün önce girdin kalbime. Dağınık düzensiz kalbimi yavaş yavaş toplamaya başladın. Üşenmedin... Hemde hiç. Her canım sıkıldığında uğraşamam demedin. Her an yanımda oldun. Elimi bırakmadın. Beni toparlayana dek sıkılmadan başımda bekledin. Geceleri uyumadın. Beni merak ettin. Ben yorulsam bile elimden tuttun. Hasta olsam derdime derman olmak istedin. Ama ben bilmiyordum ki 460 gün önce hayatıma girecek bi kızın bana hastaneye gitmeme gerek kalmadan bi öpücük ile iyi olabileceğimi... 460 gün önce aile oldun bana. Benim bi ailem olmadığını ben 460 gün önce anladım. Herşeyim olacağını, herkesim olacağını, bi anda tüm hayatımı adayacağım bi insan olacağını, bu kadar çok seveceğim ve sevileceğim bi ilişki yaşayacağımı, bu kadar çok mutlu olacağımı bilmiyordum. İyi güzel bir sürü anımız var. Uzak kaldığımız günler oldu. Dip dipe olduğumuz günlerde.. Ama en güzel yanı neydi biliyor musun. Ne olursa olsun pes etmedik bebeğim. Şahsen bu saatten sonra da pes edeceğimizi düşünmüyorum güzel kızım benim. Bugün 14 Şubat... Sevgililer günü ve bu güne ilk kez hayatımda bana ailen olan, herşeyim olan bi kızla giriyorum. Ve şuan ne kadar mutlu olduğumu anlatamam sana bebeğim. Bu günü özel yapan şey 14 Şubat olması değil. Bugün de bile seninle beraber olmam önemli olan. Bugünde beraber olmamız önemli olan. Çok şükür varlığına güzel kızım. Bin şükür beraberiz... Bugün uzun uzun yazmak istedim yine ama farklı bi dille... Bu siteye aşkımızı kalıcı bi şekilde dökmeye karar verdim seneye tekrar burda yeni yeni şeyler görebilirsin... Tek olması gereken sabretmek... Bugün gece 12 ye dek bu site açık kalacak sevgilim... Dilediğin zaman gelip okuyabilirsin...

Şimdi sana söylemek istediğim bazı şeyleri söyleyeyim.... 

Ben hayatımda ilk kez böyle çok seviyorum ve seviliyorum biliyorsun güzel kızım. 14 Şubat sevgililer gününde beni yalnız bırakmadığın için de çok teşekkür ederim bitanemmm. İyiki hayatımda dediğim tek insan sensin. Seninle beraber yeni yeni şeyler öğreniyorum. Her gün seni daha çok seviyorum. Önceki günden çok sonraki günden az... Sana olan sevgim cümlelere kelimelere sığmayacak kadar çok. Ve ben bugün beraber olduğumuz için Allah'a dua ediyorum. Çok şükür bugün de yanımdan ayırmadın diye. Her geçen gün kaybetmekten korkuyorum ama senin gitmenle değil... Allah korusun Kazada belada başına bişi gelip ölümle ayrılmaktan çok korkuyorum. Çünkü biliyorum ki bizi tek ölüm ayırır. Ve bu ayrılık manevi değil fiziken sadece. Tek korkum bu ama Allah'ın izniyle sapasağlam yaşlancaz askim. Hayatımda olduğun için çok ama çok teşekkür ederim bebeğim. Bana yaşattığın her güzel anı için, yaşadığımız her güzel anı için, beni sevdiğin her an için çok ama çok teşekkür ederim. Gerçekten ben bu hayata ne kattım ne verdim bilmiyorum ama ne verdiysem iyi ki vermişimm. İyi ki sana sahibim. İyi ki senin gibi bi sevgilim var. Sen benim iyi ki dediğim tek şeysin. Bu konuşmayı ufak birkaç parça güzel söz ile bölsem bana kızmasın dimi 😁`,
`"Mesafenin önemi yoktur... Burnunun dibinde olsa ne olacak, seni anlamıyorsa... Ama birisi vardır dünyanın öbür ucunda, en ihtiyaç duyduğun anda, 2 satırıyla bile olsa, bir çırpıda yanı başında... mesafe uzaklık değil fedakarlıktır..."`,
`"Yanında olmak isteyipte, olamadığım bi gün daha bitti. Şimdi ben bu şehrin neresine sığınayım..."`,
`"Sen benim herşeyimsin sevgilim ve unutma ki bu herşeyden küçücük bi zerre eksilse ben bi hiç kalırım..."`,
`"Allah'ım bir kulunda gönlüm var. Onu bana beni ona en güzel ve en hayırlı şekilde kavştur. 

Ve kalbimi onun kalbi ile rızıklandır."`,
`"Önemli olan, sevgiden dolayı seni seven birini değil, gerçekten içindekini gördüğü için seven birini bulmak..."`,
`"Gelelim sen ve bana...
Sen harikuladesin,
Ben, seni seviyorum..."`,
`"Tesadüf seni önüme çıkarmasaydı, gene aynı şekilde, fakat her şeyden habersiz, yaşayıp gidecektim. Sen bana, dünyada başka türlü bir hayatın da mevcut olduğunu, benim bir de ruhum bulunduğunu öğrettin"`,
`"Ben dünyada bu kadar güzel, güldüğü zaman bu kadar güzel olan bi insan görmedim..."`,
`"Hayatımda ilk kez birisi bana "kendine çok dikkat et" dedi. Anlamış onun kalbini taşıdığımı herhalde... Rastgele, yürürken aklına geleyim sızlasın için... Zaman sen olmayınca geçmiyor, 

sen olunca da yetmiyor... Üşüyorsan söyle, seni bir kat daha seveyim. 

Bak! papatya mevsimi geldi. Mevsimlerden papatyayı severim. 

Sonra seni. 

Sonra yine seni. 

Ve hep seni..."`,
`"Sende bir parçam var...
Bende bir parçan var. 
Kırıl ama dağılma. 
İnan.
Birlikte toparlanır, birlikte kalkarız ayağa"`,
`Bu kadar ara yeterli bence güzel kızım. Söylemek istediğim son birkaç şeyden sonra ufak bi sürprizim var daha sonra zaten büyük ihtimalle bana yazmış olursun... 
Ben sözlerime ufak bi yeminle başlamak istiyorum. Ben bu hayattan hiçbirşey istemiyorum. Tek seni ve senin olan herşeyi. Bazen sana kızıyorum bazen tartışıyoruz ediyoruz ama gerçekten seni çok seviyorumm. Tartışmalar olacak elbet ama istiyorum ki bu tartışmalar sadece sözde kalsın bizi etkilemesin. Beraber aşalım bu tartışmaları. Beraber konuşalım beraber. Ne olacaksa ne yapacaksak beraber yapalım. Önümüzde yaşayabileceğimiz çok güzel günler var sevgilimm ve bu günlerin hepsini beraber geçirelim istiyorum. İyi ki varsın güzel kızım. İyi ki varsın mis kokulum. Seni çok ama çok seviyorum bitanem. Hep beraber olalım hep mutlu olalım. 14 Şubat sevgililer günümüz kutlu olsun aşkım...`,
`Sıra sürprizde ekran bi anda siyah olursa çıkma 3 saniye bekle o bulur seni ışığından...`
];

// Kodlar
let currentIndex = 0;
const textContainer = document.getElementById("text-container");
const videoContainer = document.getElementById("video-container");
const video = document.getElementById("video");

function typeWriter() {
  if (currentIndex < textArray.length) {
    const currentText = textArray[currentIndex];
    currentIndex++;

    let i = 0;
    const speed = 75; // 100 milisaniyede bir harf yazılacak+silincek

    function type() {
      if (i < currentText.length) {
        textContainer.innerHTML += currentText.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          // Yazıyı sil
          textContainer.innerHTML = "";
          typeWriter();
        }, 3000); // 3 saniye bekle
      }
    }

    type();
  } else {
    setTimeout(() => {
      video.play();
      videoContainer.style.display = "block";
    }, 3000); // 3 saniye bekle
  }
}

typeWriter();

video.addEventListener("ended", () => {
  setTimeout(() => {
    videoContainer.style.display = "none";
  }, 1000); // 3 saniye bekle
});

// Path: views/js/typewriter.js
