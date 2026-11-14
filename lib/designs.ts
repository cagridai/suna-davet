export const THESIS_TITLE =
  "Dopamin reseptör agonisti olan apomorfinin sol ventriküler miyositlerin uyarılma kasılma dinamikleri üzerine etkileri";

export const DEFENSE_DATE = "8 Aralık";
export const DEFENSE_LOCATION = "Akdeniz Üniversitesi Biyofizik Anabilim Dalı";

export type DesignId =
  | "dogum-gunu"
  | "vefat-ilani"
  | "bilimsel-makale"
  | "cicek-bahcesi"
  | "son-dakika"
  | "sirk-afisi"
  | "indirim-katalogu"
  | "retro-sistem"
  | "gerilim-afisi"
  | "resmi-tebligat";

export interface InvitationDesign {
  id: DesignId;
  name: string;
  buttonHint: string;
  headline: string;
  lead: string;
  details: string;
  rsvpNote: string;
  metaPrimaryLabel: string;
  metaPrimaryValue: string;
  metaSecondaryLabel: string;
  metaSecondaryValue: string;
  badgeText: string;
}

export const INVITATION_DESIGNS: InvitationDesign[] = [
  {
    id: "dogum-gunu",
    name: "Doğum Günü Partisi",
    buttonHint: "Konfeti ve pasta teması",
    headline: "Suna'nın Tez Yaş Günü Partisi!",
    lead: "Bir yaş daha büyüyoruz, bir tez daha bitiriyoruz! Palyaço yok ama apomorfin ve yüksek stres var.",
    details:
      "Hediyelerinizi 'Hocam bu grafikteki hata payı nedir?' diye sormayarak verebilirsiniz. Pasta kesimi jüri insafına kalmıştır.",
    rsvpNote: "Balonları şişirdik, miyositleri uyardık; tek eksiğimiz sensin.",
    metaPrimaryLabel: "Parti Günü",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Oyun Alanı",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "SÜRPRİZ PARTİ",
  },
  {
    id: "vefat-ilani",
    name: "Vefat ve Anma İlanı",
    buttonHint: "Siyah çerçeveli gazete ilanı",
    headline: "ACI KAYBIMIZ: SOSYAL HAYATIMIZ",
    lead: "Yıllardır süren literatür taraması, uykusuz geceler ve bitmeyen revizyonlar sonucu Suna'nın eski neşesi hakka yürümüştür.",
    details:
      "Merhumun uyku düzeni için son görev 8 Aralık tarihinde yerine getirilecektir. Çelenk göndermek yerine gelip alkışlamanız rica olunur.",
    rsvpNote: "Dost ve akrabalara üzüntüyle değil, derin bir oh çekerek duyurulur.",
    metaPrimaryLabel: "Tören Tarihi",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Taziye Yeri",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "İLAN",
  },
  {
    id: "bilimsel-makale",
    name: "Bilimsel Makale",
    buttonHint: "Hakemli dergi ve EKG grafiği",
    headline: "Klinik Vaka Raporu: Suna v4.2 (p < 0.0001)",
    lead: "Özet: Denek (Suna), yoğun kafein ve apomorfin literatürü altında sol ventriküler miyositlerden daha hızlı kasılmaktadır.",
    details:
      "Bulgular, 8 Aralık günü jüri karşısında canlı deney düzeneğinde (powerpoint slaytları) savunulacaktır. Kontrol grubu yoktur.",
    rsvpNote: "Peer-review sürecine katılmak için salondaki yerinizi alınız.",
    metaPrimaryLabel: "Veri Sunumu",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Laboratuvar",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "DOI: 10.1208/SUNA",
  },
  {
    id: "cicek-bahcesi",
    name: "Çiçek Bahçesi",
    buttonHint: "Botanik kır davetiyesi",
    headline: "Bahar Bahçesinde Tez Nikâhı",
    lead: "Suna ve Diploması, nice uykusuz gecenin ardından 'Hocam çok haklısınız' diyerek bir ömür boyu ayrılmamaya evet diyor!",
    details:
      "Kır düğünü konseptimizde beyaz önlük giymek serbest, zor soru sormak yasaktır. Papatyalar eşliğinde miyosit dinamikleri konuşulacaktır.",
    rsvpNote: "Bu mutlu günümüzde kır çiçekleri ve dopamin reseptörleri bizimle.",
    metaPrimaryLabel: "Mutlu Gün",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Bahçe Adresi",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "KIR DAVETİ",
  },
  {
    id: "son-dakika",
    name: "Son Dakika Haber Bülteni",
    buttonHint: "Canlı yayın TV alt bandı",
    headline: "SON DAKİKA: AKDENİZ ÜNİVERSİTESİ'NDE KRİTİK GÜN!",
    lead: "Muhabirlerimiz bildiriyor: Suna'nın nabzı 180 bpm sınırında. Apomorfinin kasılma dinamikleri salonda masaya yatırılıyor.",
    details:
      "Uzmanlar 8 Aralık sabahı kampüs çevresinde yüksek akademik gerilim bekliyor. Canlı tanıklık etmek isteyen izleyiciler stüdyoya davetli.",
    rsvpNote: "Yayın akışımız jüri sorularına göre anlık değişebilir.",
    metaPrimaryLabel: "Yayın Tarihi",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Canlı Stüdyo",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "CANLI YAYIN",
  },
  {
    id: "sirk-afisi",
    name: "Sirk ve Karnaval",
    buttonHint: "Büyük çadır gösteri afişi",
    headline: "MUHTEŞEM BÜYÜK SAVUNMA GÖSTERİSİ!",
    lead: "Tek kişilik akrobasi! Suna, 60 slayt üzerinde ip cambazlığı yaparken aynı anda apomorfin mekanizmasını anlatacak!",
    details:
      "Aslan terbiyecisi yok ama kıymetli jüri üyelerimiz sahnede. Patlamış mısırınızı kapın, tarihinin en heyecanlı biyofizik şovunu kaçırmayın.",
    rsvpNote: "Giriş ücretsiz, çıkışta alkış mecburidir.",
    metaPrimaryLabel: "Matine Günü",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Büyük Çadır",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "TEK GÖSTERİ",
  },
  {
    id: "indirim-katalogu",
    name: "Süpermarket İndirimi",
    buttonHint: "Haftanın fırsatları kataloğu",
    headline: "HAFTANIN DEV FIRSATI: BEDAVA BİLİM ŞÖLENİ!",
    lead: "Stoklarla sınırlı! Normalde 4 yıl süren dopamin ve miyosit emeği sadece 1 saatlik sunuma indi! Kaçıran üzülür.",
    details:
      "8 Aralık Cuma değil ama 8 Aralık gününe özel %100 heyecan, %0 giriş ücreti! Aldığınız bilgiyi iade edebilirsiniz ama Suna iade almıyor.",
    rsvpNote: "Bu fırsat bir daha tez yazılana kadar gelmez!",
    metaPrimaryLabel: "Kampanya Günü",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Şube",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "%100 İNDİRİM",
  },
  {
    id: "retro-sistem",
    name: "90'lar Masaüstü Penceresi",
    buttonHint: "Klasik bilgisayar hata penceresi",
    headline: "Suna_Tez_Savunma_FINAL_v99_SON.exe",
    lead: "Sistem Uyarısı: 'Sol ventriküler miyositler yanıt vermiyor. Yine de 8 Aralık tarihinde sunum başlatılsın mı?'",
    details:
      "Çözünürlük düşük, heyecan yüksek. Disketinizde yer açın çünkü Biyofizik Anabilim Dalı'nda tam sürüm savunma kuruluyor.",
    rsvpNote: "Lütfen sunum sırasında bilgisayarı kapatmayın veya fişten çekmeyin.",
    metaPrimaryLabel: "Sistem Tarihi",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Dizin Yolu",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "SİSTEM UYARISI",
  },
  {
    id: "gerilim-afisi",
    name: "Gerilim Film Afişi",
    buttonHint: "Sinematik korku ve gerilim afişi",
    headline: "BU 8 ARALIK'TA HİÇBİR MİYOSİT ESKİSİ GİBİ KASILMAYACAK",
    lead: "Karanlık bir laboratuvar... Bir adet sunum kumandası... Ve cevabı bilinmeyen tek bir jüri sorusu. Gerilim başlıyor.",
    details:
      "Başrolde Suna, konuk oyuncu apomorfin. Nefesinizi tutun, çünkü bu salonda sadece elektrofizyoloji değil, sinirler de geriliyor.",
    rsvpNote: "18 yaşından küçükler için yüksek dozda biyofizik içerir.",
    metaPrimaryLabel: "Vizyon Tarihi",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Gösterim Salonu",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "VİZYONDA",
  },
  {
    id: "resmi-tebligat",
    name: "Resmî Tebligat",
    buttonHint: "Mühürlü devlet celbi",
    headline: "MECBURÎ KATILIM TEBLİGATI (EVRAK NO: 2026/1208)",
    lead: "Sayın Muhatap; işbu belge ile Suna'nın tez savunmasında fiziken veya ruhen bulunmanızın kanuni bir gönül borcu olduğu tebliğ olunur.",
    details:
      "8 Aralık günü belirtilen adreste hazır bulunmayanların, savunma sonrası kutlamadaki tatlı hakkı zamanaşımına uğrayacaktır.",
    rsvpNote: "İtiraz mercii yoktur; sevgi anketini doldurmanız önemle rica olunur.",
    metaPrimaryLabel: "Tebliğ Tarihi",
    metaPrimaryValue: DEFENSE_DATE,
    metaSecondaryLabel: "Yetkili Makam",
    metaSecondaryValue: DEFENSE_LOCATION,
    badgeText: "ASLIDIR",
  },
];
