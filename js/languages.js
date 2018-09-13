let language;

let mandarinButtonAndTextStrings = {
  kidMode:"孩子模式",
  advancedMode:"高级模式",
  stationaryMode:"固定模式",
  newStudent:"新生",
  returningStudent:"回归学生",
  whatIsYourName:"你叫什么名字？",
  typeYourNameHere:"于此处输入您的姓名",
  previous:"以前",
  congratulations:"恭喜！您已经查看了今天的所有目标。尝试一些新目标继续学习！",
  noProfilesExist:"没有配置文件，请返回并创建新的配置文件"
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
  noProfilesExist:"No profiles exist, go back and create a new profile"
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
  noProfilesExist:"कोई प्रोफाइल मौजूद नहीं है, वापस जाएं और एक नई प्रोफ़ाइल बनाएं"
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
  noProfilesExist:"No existen perfiles, retrocede y crea un nuevo perfil"
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
  noProfilesExist:"لا توجد ملفات تعريف ، والعودة وإنشاء ملف تعريف جديد"
}

let languageSelectorButtonList = [
  {label: "普通话", x:25,y:210, language: mandarinButtonAndTextStrings, onClick: goToMainMenu},
  {label: "English", x:250,y:210, language: englishButtonAndTextStrings, onClick: goToMainMenu},
  {label: "हिंदुस्तानी", x:475,y:210, language: hindustaniButtonAndTextStrings, onClick: goToMainMenu},
  {label: "Español", x:700,y:210, language: spanishButtonAndTextStrings, onClick: goToMainMenu},
  {label: "عربى", x:925,y:210, language: arabicButtonAndTextStrings, onClick: goToMainMenu}
];

if (localStorage.getItem("language") === null) {
  language = englishButtonAndTextStrings;
  console.log("language", language);
} else {
  language = localStorage.getItem("language");
}

let mainMenuButtonList = [
  {label: undefined, x:125,y:210, onClick: startKidMode},
  {label: undefined, x:500,y:210, onClick: startAdvancedMode},
  {label: undefined, x:310,y:300, onClick: toggleStationaryMode}
];
