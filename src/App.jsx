import './App.css'
import { Languages, BookType, ScanText } from 'lucide-react'
import translate from './assets/translate.jpeg'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
function App() {

  const languageList = [
    // نحدد اللغات ومفاتيحها و الاتجاه 

    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'es', label: 'Español', dir: 'ltr' },
    { code: 'ur', label: 'اردو', dir: 'rtl' },
  ]

  const [isOpen, setIsOpen] = useState(false);
  // t دالة الترجمة 
  // i18n محرك المكتبه الترجمة
  const { t, i18n } = useTranslation();

  useEffect(() => {
    //نتحقق بان اللغة المختارة وكودها متوافق مع اللغه في محرك الترجمه 
    const currentLang = languageList.find(l => l.code === i18n.language);
    //نحدد الاتجاه بناء على ال JSON
    document.documentElement.dir = currentLang.dir;
    // نحدد الكود بناء على ال JSON
    document.documentElement.lang = currentLang.code;
  }, 
  // نراقب التغيرات في اللغة المختارة   
  [i18n.language]);

  // دالة تغيير اللغة 
  const handleLanguageChange = (lang) => {
    // ناخد رمز اللغه ونمرره لمحرك الترجمة 
    i18n.changeLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-white  text-white">
      <nav className="px-8 py-5 bg-violet-950 opacity-80 text-white">
        <div className="flex items-center gap-4">
          <Languages size={40} className="text-teal-300" />
          <div className="flex flex-col">
            <h1 className="font-arabic-bold text-2xl font-bold ">
              {t('title')}</h1>
            <p className="font-arabic-bold text-sm  pt-1 text-teal-200/80">
              {t('subtitle')}
            </p>
          </div>
          <div className="ms-auto flex items-center gap-3 text-white">
            <p className="text-sm font-medium text-white font-arabic-bold">
              {t('chooseLang')}
            </p>
            <button className="border border-white/60 rounded-full p-2.5 cursor-pointer hover:border-teal-300 hover:text-teal-200 transition"
              onClick={() => setIsOpen(true)}>
              <BookType size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className="w-350 h-150 mx-auto my-10 border-2  flex   border-teal-200/30 bg-violet-200 shadow-2xl p-20 rounded-xl">

        <div className="flex w-full h-full items-center justify-between gap-10 shadow-2xl relative">

          <div className="w-full h-full bg-violet-900 rounded-lg p-7 shadow-2xl relative opacity-80">
            <h1 className="flex items-center justify-center gap-3 text-3xl font-arabic-bold text-white mt-4 text-center">
              <ScanText size={32} className="shrink-0 text-white" />
              <span>{t('whyTitle')}</span>
            </h1>

            <p className="text-white text-lg font-arabic-light mt-6 text-center  leading-15">
              {t('whyDesc')}
            </p>

            <h4 className="text-teal-200 text-lg font-arabic-bold mt-6 text-center  leading-6">
              “{t('quote')}"
            </h4>
          </div>

          <div className="w-200 h-full bg-violet-900 rounded-lg flex items-center justify-center opacity-80 p-4 shadow-2xl relative overflow-hidden">

            <img class="h-auto max-w-full max-h-100 rounded-lg object-contain" src={translate} ></img>

          </div>

        </div>
      </div>

      <footer className=" bg-violet-950 opacity-80 py-6 text-center font-arabic-light" >
        <p className="text-teal-200/80 text-sm font-medium">
          {t('madeWith')}
        </p>
      </footer>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-violet-900 opacity-80 border border-teal-300/40 rounded-2xl p-6 shadow-2xl text-center">
            <h3 className="text-lg font-arabic-bold text-white mb-4">
              {t('changeLang')}
            </h3>

            <div className="flex flex-col gap-2.5 mb-5 font-arabic-bold">
              {languageList.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className="w-full py-2.5 px-4 rounded-xl bg-violet-900 border border-violet-700 hover:border-teal-300 hover:bg-violet-800 text-teal-100 font-medium transition cursor-pointer"
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-400 hover:text-white  font-arabic-bold cursor-pointer transition"
            >
              {t('close')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App