let language;

let mandarinButtonAndTextStrings = {
  kidMode:"孩子模式",
  advancedMode:"高级模式",
  stationaryMode:"固定模式",
  newStudent:"新生",
  returningStudent:"回归学生",
  whatIsYourName:"您叫什么名字？",
  typeYourNameHere:"于此处输入您的姓名",
  previous:"返回前页",
  congratulations:"恭喜！您已经查看了今天的所有目标。尝试一些新目标继续学习！",
  noProfilesExist:"无配置文件，请返回前页创建新配置文件。",
  information:"??? 帮助",
  gamePlayInfo:"听听读音。它会说一个声音或一个字母名称。用鼠标或手指点击屏幕上的语音或字母。开心地玩!",
  videoButton:"??? 视频",
  exit:"离开"
}

let englishButtonAndTextStrings = {
  kidMode:"Kid Mode",
  advancedMode:"Advanced Mode",
  stationaryMode:"Stationary Mode",
  newStudent:"New Student",
  returningStudent:"Returning Student",
  whatIsYourName:"What is your name?",
  typeYourNameHere:"Type your name here",
  previous:"Back",
  congratulations:"Congratulations! You have reviewed all of today's targets. Try some new targets to keep learning!",
  noProfilesExist:"No profiles exist, go back and create a new profile",
  information:"??? Info",
  gamePlayInfoLine1:"Listen to the voice. It will say either a phonic sound or a letter name.",
  gamePlayInfoLine2:"Click the phonic or letter on the screen with either the mouse or your finger.",
  gamePlayInfoLine3:"The correct answers are glowing to help teach new students how to play.",
  gamePlayInfoLine4:"Have fun!",
  statsInfoLine1:"The game keeps track of your accuracy.",
  statsInfoLine2:"Your information will be saved in a profile.",
  statsInfoLine3:"The game will show you what to play at the beginning of each day.",
  statsInfoLine4:"Make sure to play a little every day for continued progress.",
  showSettingsButtonBlurbText:"Click or touch the settings button",
  videoButton:"??? Video",
  exit:"Exit"
}

let hindustaniButtonAndTextStrings = {
  kidMode:"बच्चे मोड",
  advancedMode:"उन्नत मोड",
  stationaryMode:"स्टेशनरी मोड",
  newStudent:"नया विद्यार्थी",
  returningStudent:"वापस आने वाला विद्यार्थी",
  whatIsYourName:"तुम्हारा नाम क्या हे?",
  typeYourNameHere:"अपना नाम यहां टाइप करें",
  previous:"पिछला",
  congratulations:"बधाई हो! आपने आज के सभी लक्ष्यों की समीक्षा की है। सीखने के लिए कुछ नए लक्ष्य आज़माएं!ो",
  noProfilesExist:"कोई प्रोफाइल मौजूद नहीं है, वापस जाएं और एक नई प्रोफ़ाइल बनाएं",
  information:"??? जानकारी",
  gamePlayInfo:"आवाज सुनो। यह या तो एक ध्वन्यात्मक ध्वनि या एक अक्षर नाम कहेंगे। माउस या अपनी अंगुली के साथ स्क्रीन पर ध्वन्यात्मक या अक्षर पर क्लिक करें। मज़े करो!",
  videoButton:"??? वीडियो",
  exit:"बाहर जाएं"
}

let spanishButtonAndTextStrings = {
  kidMode:"Modo Niño",
  advancedMode:"Modo Avanzado",
  stationaryMode:"Modo Estacionario",
  newStudent:"Estudiante Nuevo",
  returningStudent:"Estudiante Que Regresa",
  whatIsYourName:"¿Cuál es su nombre?",
  typeYourNameHere:"Escribe tu nombre aquí",
  previous:"Anterior",
  congratulations:"¡Felicidades! Usted ha revisado todos los objetivos de hoy. ¡Prueba algunos objetivos nuevos para seguir aprendiendo!",
  noProfilesExist:"No existen perfiles, retrocede y crea un nuevo perfil",
  information:"??? Info",
  gamePlayInfo:"Escucha la voz. Dirá un sonido fónico o un nombre de letra. Haga clic en la fónica o letra en la pantalla con el mouse o con el dedo. ¡Que te diviertas!",
  videoButton:"??? Vídeo",
  exit:"Salida"
}

let arabicButtonAndTextStrings = {
  kidMode:"وضع الطفل",
  advancedMode:"وضع متقدم",
  stationaryMode:"وضع ثابت",
  newStudent:"طالب جديد",
  returningStudent:"عودة الطالب",
  whatIsYourName:"ما اسمك؟",
  typeYourNameHere:"اكتب اسمك هنا",
  previous:"سابق",
  congratulations:"تهانينا! لقد قمت بمراجعة جميع أهداف اليوم. جرب بعض الأهداف الجديدة لمواصلة التعلم!",
  noProfilesExist:"لا توجد ملفات تعريف ، والعودة وإنشاء ملف تعريف جديد",
  information:"??? معلومات",
  gamePlayInfo:"استمع إلى الصوت. سيقول إما صوت صوتي أو اسم حرف. انقر فوق صوتي أو حرف على الشاشة باستخدام الماوس أو إصبعك. إستمتع!",
  videoButton:"??? فيديو",
  exit:"ىخرج"
}

let swahiliButtonAndTextStrings = {
  kidMode:"Hali ya Kid",
  advancedMode:"Hali ya juu",
  stationaryMode:"Njia ya Msafiri",
  newStudent:"Mwanafunzi Mpya",
  returningStudent:"Kurudi Mwanafunzi",
  whatIsYourName:"¿Jina lako nani??",
  typeYourNameHere:"Andika jina lako hapa",
  previous:"Kabla",
  congratulations:"Hongera! Umehakikishia malengo yote ya leo. Jaribu malengo mapya ya kuendelea kujifunza!",
  noProfilesExist:"Hakuna maelezo yaliyopo, kurudi nyuma na uunda wasifu mpya",
  information:"??? Taarifa",
  gamePlayInfo:"Sikiliza sauti. Itasema sauti ya phonic au jina la barua. Bonyeza phonic au barua kwenye skrini na panya au kidole chako. Furahia!",
  videoButton:"??? Vídeo",
  exit:"Utgång"
}

let frenchButtonAndTextStrings = {
  kidMode:"Mode Enfant",
  advancedMode:"Mode Avancé",
  stationaryMode:"Mode Stationnaire",
  newStudent:"Nouvel étudiant",
  returningStudent:"Étudiant de retour",
  whatIsYourName:"Comment vous appelez-vous?",
  typeYourNameHere:"Tapez votre nom ici",
  previous:"Précédent",
  congratulations:"Toutes nos félicitations! Vous avez examiné toutes les cibles d'aujourd'hui. Essayez de nouvelles cibles pour continuer à apprendre!",
  noProfilesExist:"Aucun profil n'existe, revenir en arrière et créer un nouveau profil",
  information:"??? Info",
  gamePlayInfo:"Écoutez la voix On dira un son phonique ou un nom de lettre. Cliquez sur le phonique ou la lettre sur l'écran avec la souris ou le doigt. S'amuser!",
  videoButton:"??? Vidéo",
  exit:"Sortie"
}

let portugueseButtonAndTextStrings = {
  kidMode:"Modo Infantil",
  advancedMode:"Modo avançado",
  stationaryMode:"Modo estacionário",
  newStudent:"Novo estudante",
  returningStudent:"Estudante de retorno",
  whatIsYourName:"Qual é o seu nome?",
  typeYourNameHere:"Digite seu nome aqui",
  previous:"Anterior",
  congratulations:"Parabéns! Você analisou todos os alvos de hoje. Tente alguns novos alvos para continuar aprendendo!",
  noProfilesExist:"Não existem perfis, volte e crie um novo perfil",
  information:"??? Em formação",
  gamePlayInfo:"Ouça a voz. Ele dirá um som fônico ou um nome de letra. Clique no fônico ou na letra na tela com o mouse ou com o dedo. Diverta-se!",
  videoButton:"??? Vídeo",
  exit:"Saída"
}

let russianButtonAndTextStrings = {
  kidMode:"Ребенок",
  advancedMode:"Расширенный режим",
  stationaryMode:"Стационарный режим",
  newStudent:"Новый студент",
  returningStudent:"Возвращающийся студент",
  whatIsYourName:"Как вас зовут?",
  typeYourNameHere:"Введите свое имя здесь",
  previous:"предыдущий",
  congratulations:"Поздравляем! Вы просмотрели все сегодняшние цели. Попробуйте новые цели, чтобы учиться!",
  noProfilesExist:"Нет профилей, вернуться и создать новый профиль",
  information:"??? Информация",
  gamePlayInfo:"Слушайте голос. Он скажет либо звуковой звук, либо имя письма. Нажмите на букву или букву на экране с помощью мыши или пальца. Повеселись!",
  videoButton:"??? видео",
  exit:"Выход"
}

let japaneseButtonAndTextStrings = {
    kidMode:"キッドモード",
    advancedMode:"アドバンスモード",
    stationaryMode:"静止モード",
    //keeping previous entries just in case 新入生 戻る学校
    newStudent:"初めから",　//"start new"
    returningStudent:"続きから", //"continue (from last time)" - no "returning student" in japanese (as far as I know) but will try to think of something else if needed
    whatIsYourName:"お名前は？",
    typeYourNameHere:"名前を入力してください",
    previous:"戻る",
    congratulations:"おめでとうございます！今日の目標をすべて達成しました！もっと目標を作って学習を続けましょう！",
    noProfilesExist:"プロファイルは存在しません。戻ると新しいプロファイルが作成できます。",
    information:"??? 情報",
    gamePlayInfo:"声を聞いてください。音声か文字の名前を言ってもらいます。マウスか、指で画面上の音、または文字をクリックしてください。楽しんでくださいね！",
    videoButton:"??? 動画",
    exit:"出る"
}

let bahasaButtonAndTextStrings = {
  kidMode:"Mode kanak-kanak",
  advancedMode:"Mode lanjutan",
  stationaryMode:"Mode tenang",
  newStudent:"Murid baru",
  returningStudent:"Murid kembali",
  whatIsYourName:"Siapakah nama anda?",
  typeYourNameHere:"Sila taipkan nama anda.",
  previous:"Dahulu",
  congratulations:"Taniah! Anda telah belajar kesemuanya hari ini. Cubalah sasaran baru untuk terus belajar!",
  noProfilesExist:"Profil tidak wujud. Sila kembali dan membuat profil baru.",
  information:"??? informasi",
  gamePlayInfo:"Sila mendengar suaranya dan pastikan ia suara phonic atau huruf. Klik pada phonic atau huruf di layaran anda. Selamat mencuba!",
  videoButton:"??? video",
  exit:"Keluar"
}

let languageSelectorButtonList = [
  {label: "简体中文", x:115,y:185, language: mandarinButtonAndTextStrings, onClick: goToMainMenu},
  {label: "English", x:340,y:185, language: englishButtonAndTextStrings, onClick: goToMainMenu},
  {label: "हिंदुस्तानी", x:565,y:185, language: hindustaniButtonAndTextStrings, onClick: goToMainMenu},
  {label: "Español", x:790,y:185, language: spanishButtonAndTextStrings, onClick: goToMainMenu},
  {label: "Kiswahili", x:115,y:265, language: swahiliButtonAndTextStrings, onClick: goToMainMenu},
  {label: "Français", x:340,y:265, language: frenchButtonAndTextStrings, onClick: goToMainMenu},
  {label: "Português", x:565,y:265, language: portugueseButtonAndTextStrings, onClick: goToMainMenu},
  {label: "русский", x:790,y:265, language: russianButtonAndTextStrings, onClick: goToMainMenu},
  {label: "Bahasa Malaysia", x:115,y:340, language: bahasaButtonAndTextStrings, onClick: goToMainMenu},
  {label: "عربى", x:340,y:340, language: arabicButtonAndTextStrings, onClick: goToMainMenu},
  {label: "日本語", x:565,y:340, language: japaneseButtonAndTextStrings, onClick: goToMainMenu}
];

if (localStorage.getItem("language") === null) {
  language = englishButtonAndTextStrings;
  console.log("language", language);
  localStorage.setItem("language", JSON.stringify(language));
} else {
  language = localStorage.getItem("language");
}
console.log("loading reached end of language.js");
