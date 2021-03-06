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
  profiles:"简介",
  gamePlayInfoLine1:"听听声音。它会说一个声音或一个字母名称。",
  gamePlayInfoLine2:"用鼠标或手指点击屏幕上的语音或字母。",
  gamePlayInfoLine3:"正确的答案正在发光，以帮助教新生如何玩 ",
  gamePlayInfoLine4:"玩的开心！",
  statsInfoLine1:"游戏记录您的准确性。",
  statsInfoLine2:"您的信息将保存在个人资料中。",
  statsInfoLine3:"游戏将告诉你每天开始时玩什么。",
  statsInfoLine4:"一定要每天玩一点才能继续前进。",
  showSettingsButtonBlurbText:"单击或触摸设置按钮",
  customLevels:"自定义级别",
  glow:"辉光",
  stationary:"静止的",
  tutorial:"教程",
  credits:"积分",
  olderKids:"年龄较大的孩子",
  newStudent:"新生",
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
  profiles:"Profiles",
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
  customLevels:"Custom Levels",
  glow:"Glow",
  stationary:"Stationary",
  tutorial:"Tutorial",
  credits:"Credits",
  olderKids:"Older Kids",
  newStudent:"New Student",
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
  gamePlayInfoLine1:"आवाज सुनो। यह या तो एक ध्वन्यात्मक ध्वनि या एक अक्षर नाम कहेंगे।",
  gamePlayInfoLine2:"माउस या अपनी अंगुली के साथ स्क्रीन पर ध्वन्यात्मक या अक्षर पर क्लिक करें।",
  gamePlayInfoLine3:"सही उत्तर नए छात्रों को खेलना सीखने में मदद करने के लिए चमक रहे हैं।",
  gamePlayInfoLine4:"मज़े करो!",
  statsInfoLine1:"गेम आपकी सटीकता का ट्रैक रखता है।",
  statsInfoLine2:"आपकी जानकारी प्रोफ़ाइल में सहेजी जाएगी।",
  statsInfoLine3:"गेम आपको दिखाएगा कि प्रत्येक दिन की शुरुआत में क्या खेलना है।",
  statsInfoLine4:"निरंतर प्रगति के लिए हर दिन थोड़ा खेलना सुनिश्चित करें।",
  showSettingsButtonBlurbText:"सेटिंग्स बटन पर क्लिक या स्पर्श करें",
  customLevels:"कस्टम स्तर",
  glow:"चमक",
  stationary:"स्थिर",
  profiles:"प्रोफाइल",
  tutorial:"ट्यूटोरियल",
  credits:"क्रेडिट",
  olderKids:"बड़े बच्चे",
  newStudent:"नया विद्यार्थी",
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
  gamePlayInfoLine1:"Escucha la voz. Dirá un sonido fónico o un nombre de letra.",
  gamePlayInfoLine2:"Haga clic en el fónico o la letra en la pantalla con el mouse o con el dedo.",
  gamePlayInfoLine3:"Las respuestas correctas son brillantes para ayudar a enseñar a los nuevos estudiantes a jugar.",
  gamePlayInfoLine4:"¡Que te diviertas!",
  statsInfoLine1:"El juego realiza un seguimiento de su precisión.",
  statsInfoLine2:"Su información se guardará en un perfil.",
  statsInfoLine3:"El juego te mostrará qué jugar al comienzo de cada día.",
  statsInfoLine4:"Asegúrate de jugar un poco todos los días para seguir progresando.",
  showSettingsButtonBlurbText:"Haga clic o toque el botón de configuración",
  customLevels:"Niveles personalizados",
  glow:"Brillo",
  stationary:"Estacionario",
  profiles:"Perfiles",
  tutorial:"Tutorial",
  credits:"Creditos",
  olderKids:"Niños mayores",
  newStudent:"Estudiante nuevo",
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
  gamePlayInfoLine1:"استمع إلى الصوت. سيقول إما صوت صوتي أو اسم حرف.",
  gamePlayInfoLine2:"انقر فوق صوتي أو حرف على الشاشة باستخدام الماوس أو إصبعك.",
  gamePlayInfoLine3:"تتوهج الإجابات الصحيحة للمساعدة في تعليم الطلاب الجدد كيفية اللعب.",
  gamePlayInfoLine4:"إستمتع!",
  statsInfoLine1:"اللعبة بتتبع دقتك.",
  statsInfoLine2:"سيتم حفظ المعلومات الخاصة بك في ملف تعريف.",
  statsInfoLine3:"سوف تظهر لك اللعبة ما اللعب في بداية كل يوم.",
  statsInfoLine4:"تأكد من اللعب قليلا كل يوم للتقدم المستمر.",
  showSettingsButtonBlurbText:"انقر أو المس زر الإعدادات",
  customLevels:"مستويات مخصصة",
  glow:"توهج",
  stationary:"ثابت",
  profiles:"مظهر",
  tutorial:"الدورة التعليمية",
  credits:"قروض",
  olderKids:"الاطفال الاكبر سنا",
  newStudent:"طالب جديد",
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
  gamePlayInfoLine1:"Sikiliza sauti. Itasema sauti ya phonic au jina la barua.",
  gamePlayInfoLine2:"Bonyeza phonic au barua kwenye skrini na panya au kidole chako.",
  gamePlayInfoLine3:"Majibu sahihi yanakuangaza ili kuwafundisha wanafunzi wapya jinsi ya kucheza.",
  gamePlayInfoLine4:"Furahia!",
  statsInfoLine1:"Mchezo huendelea kufuatilia usahihi wako.",
  statsInfoLine2:"Maelezo yako itahifadhiwa kwenye wasifu.",
  statsInfoLine3:"Mchezo utaonyesha kile unachocheza mwanzoni mwa kila siku.",
  statsInfoLine4:"Hakikisha kucheza kidogo kila siku kwa maendeleo ya kuendelea.",
  showSettingsButtonBlurbText:"Bonyeza au kugusa kifungo cha mipangilio",
  customLevels:"Ngazi za Desturi",
  glow:"Panga",
  stationary:"Imewekwa",
  profiles:"Profaili",
  tutorial:"Mafunzo",
  credits:"Mikopo",
  olderKids:"Watoto Wakubwa",
  newStudent:"Mwanafunzi Mpya",
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
  gamePlayInfoLine1:"Écoute la voix. Il dira soit un son phonique, soit un nom de lettre.",
  gamePlayInfoLine2:"Cliquez sur la lettre ou sur la lettre à l'écran avec la souris ou votre doigt.",
  gamePlayInfoLine3:"Les bonnes réponses brillent pour aider à apprendre aux nouveaux étudiants à jouer.",
  gamePlayInfoLine4:"S'amuser!",
  statsInfoLine1:"Le jeu garde trace de votre précision.",
  statsInfoLine2:"Vos informations seront enregistrées dans un profil.",
  statsInfoLine3:"Le jeu vous montrera quoi jouer au début de chaque journée.",
  statsInfoLine4:"Assurez-vous de jouer un peu tous les jours pour continuer à progresser.",
  showSettingsButtonBlurbText:"Cliquez ou touchez le bouton des paramètres",
  customLevels:"Niveaux personnalisés",
  glow:"lueur",
  stationary:"Stationnaire",
  tutorial:"Didacticiel",
  profiles:"Profils",
  credits:"Crédits",
  olderKids:"Enfants plus âgés",
  newStudent:"Nouvel étudiant",
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
  gamePlayInfoLine1:"Ouça a voz. Ele dirá um som fônico ou um nome de letra.",
  gamePlayInfoLine2:"Clique no fônico ou na letra na tela com o mouse ou com o dedo.",
  gamePlayInfoLine3:"As respostas corretas estão brilhando para ajudar a ensinar novos alunos a jogar.",
  gamePlayInfoLine4:"Diverta-se!",
  statsInfoLine1:"O jogo mantém o controle de sua precisão.",
  statsInfoLine2:"Suas informações serão salvas em um perfil.",
  statsInfoLine3:"O jogo irá mostrar-lhe o que jogar no início de cada dia.",
  statsInfoLine4:"Certifique-se de jogar um pouco todos os dias para continuar progredindo.",
  showSettingsButtonBlurbText:"Clique ou toque no botão de configurações",
  customLevels:"Níveis personalizados",
  glow:"Brilho",
  stationary:"Estacionário",
  profiles:"Perfis",
  tutorial:"Tutorial",
  credits:"Créditos",
  olderKids:"Crianças mais velhas",
  newStudent:"Novo estudante",
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
  gamePlayInfoLine1:"Слушайте голос. Он скажет либо звуковой звук, либо имя письма.",
  gamePlayInfoLine2:"Нажмите на букву или букву на экране с помощью мыши или пальца.",
  gamePlayInfoLine3:"Правильные ответы светятся, чтобы помочь учащимся новых учеников, как играть.",
  gamePlayInfoLine4:"Повеселись!",
  statsInfoLine1:"Игра отслеживает вашу точность.",
  statsInfoLine2:"Ваша информация будет сохранена в профиле.",
  statsInfoLine3:"Игра покажет вам, что играть в начале каждого дня.",
  statsInfoLine4:"Обязательно играйте каждый день каждый день для продолжения прогресса.",
  showSettingsButtonBlurbText:"Нажмите или коснитесь кнопки настроек",
  customLevels:"Пользовательские уровни",
  glow:"пылать",
  stationary:"стационарный",
  profiles:"профили",
  tutorial:"Руководство",
  credits:"кредиты",
  olderKids:"Старые дети",
  newStudent:"Новый студент",
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
    gamePlayInfoLine1:"声を聞く。それは、音の音か文字の名前を言うでしょう。",
    gamePlayInfoLine2:"マウスや指で画面上の音や文字をクリックする.",
    gamePlayInfoLine3:"新しい生徒に遊ぶ方法を教えるのに役立つ正解が輝いています。",
    gamePlayInfoLine4:"楽しむ！",
    statsInfoLine1:"ゲームはあなたの正確さを追跡します。",
    statsInfoLine2:"あなたの情報はプロフィールに保存されます。",
    statsInfoLine3:"ゲームは、毎日の初めに何をプレイするかを表示します。",
    statsInfoLine4:"継続的な進歩のために少しずつプレーするようにしてください。",
    showSettingsButtonBlurbText:"設定ボタンをクリックまたはタッチする",
    customLevels:"カスタムレベル",
    glow:"グロー",
    stationary:"定常",
    profiles:"プロフィール",
    tutorial:"チュートリアル",
    credits:"クレジット",
    olderKids:"年長の子供たち",
    newStudent:"新入生",
    videoButton:"??? 動画",
    exit:"出る"
}

let bahasaButtonAndTextStrings = {
  kidMode:"Mode kanak-kanak",
  advancedMode:"Mode lanjutan",
  stationaryMode:"Mode tenang",
  newStudent:"Pelajar baru",
  returningStudent:"Pelajar kembali",
  whatIsYourName:"Siapakah nama anda?",
  typeYourNameHere:"Sila taipkan nama anda.",
  previous:"Dahulu",
  congratulations:"Taniah! Anda telah belajar kesemuanya hari ini. Cubalah sasaran baru untuk terus belajar!",
  noProfilesExist:"Profil tidak wujud. Sila kembali dan membuat profil baru.",
  information:"??? informasi",
  gamePlayInfoLine1:"Dengar suara itu. Ia akan mengatakan sama ada bunyi phonic atau nama surat.",
  gamePlayInfoLine2:"Klik fonik atau huruf pada skrin dengan sama ada tetikus atau jari anda.",
  gamePlayInfoLine3:"Jawapan yang betul akan bercahaya untuk membantu mengajar pelajar baru cara bermain.",
  gamePlayInfoLine4:"Selamat mencuba!",
  statsInfoLine1:"Permainan ini mengesan ketepatan anda.",
  statsInfoLine2:"Maklumat anda akan disimpan dalam profil.",
  statsInfoLine3:"Permainan ini akan menunjukkan apa yang perlu dimainkan pada awal setiap hari.",
  statsInfoLine4:"Cubalah bermain setiap hari untuk kemajuan yang berterusan.",
  showSettingsButtonBlurbText:"Klik atau sentuh butang tetapan",
  customLevels:"Tahap Khusus",
  glow:"Sinar",
  stationary:"Pegun",
  profiles:"Profil",
  tutorial:"Tutorial",
  credits:"Kredit",
  olderKids:"Kanak-kanak yang lebih tua",
  newStudent:"Pelajar baru",
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
} else {
  language = JSON.parse(localStorage.getItem("language"));
}
