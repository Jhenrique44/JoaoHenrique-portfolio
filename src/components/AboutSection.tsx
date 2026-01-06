import { useLanguage } from "../translator/LanguageTranslator";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 px-6 bg-sand-200 mt-16">
      <div className="container mx-auto max-w-10xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-luckiest text-crimson-800 mb-8">
              {t('about_title')}
            </h2>
            <div className="prose prose-lg text-brown-700 space-y-4 text-left">
              <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {t('about_p1')}
              </p>

              <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {t('about_p2')}
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                {t('about_p3')}
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                {t('about_p4')}
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                {t('about_p5')}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-5 animte-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="group realtive overflow-hidden rounde-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/images/huawei-part.jpeg"
                alt="Huawei partners"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* <div className="group relative overflow-hidden rounded-2xl shadouw-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div> */}
            {/* <div className="group realtive overflow-hidden rounde-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src=""
                alt=""
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group realtive overflow-hidden rounde-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src=""
                alt=""
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
