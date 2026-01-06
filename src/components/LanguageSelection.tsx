import { useLanguage } from "../translator/LanguageTranslator";

export const LanguageSelection = () => { 
    const {language, setLanguage} = useLanguage();
    return (
        <div className="flex items-center gap-4">

            <button 
        onClick={() => setLanguage('en')}
        className={`transition-transform hover:scale-110 ${language === 'en' ? 'ring-2 ring-blue-500 rounded-full' : ''}`}
      >
        <img 
          src="/images/uk.png" 
          alt="English" 
          className="w-8 h-8 rounded-full object-cover" // Tailwind para deixar redondo
        />
      </button>

      {/* Botão Português */}
      <button 
        onClick={() => setLanguage('pt')}
        className={`transition-transform hover:scale-110 ${language === 'pt' ? 'ring-2 ring-green-500 rounded-full' : ''}`}
      >
        <img 
          src="/images/br.png" 
          alt="Português" 
          className="w-8 h-8 rounded-full object-cover"
        />
      </button>
    </div>
    );
}