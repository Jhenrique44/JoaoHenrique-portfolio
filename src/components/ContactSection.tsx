import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./utils/button";
export const ContactSection = () => {
  const handleSocialClick = (social: string) => () => {
    const urls = {
      instagram: "https://www.instagram.com/joaoqueiroz/",
      linkedin: "https://www.linkedin.com/in/jhenriquefq/",
      github: "https://github.com/jhenrique44",
    };
    window.open(urls[social as keyof typeof urls], "_blank");
  };
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/joaoqueiroz/30min", "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 gradient-crimson-dark ">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-slide-up">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Get in touch!
                <span
                  className="cursor-pointer hover:text-mustard-300 transition-colors underline decoration-2 underline-offset-8 ml-2"
                  onClick={handleCalendlyClick}
                >
                  {" "}
                  Schedule a meeting with me.{" "}
                </span>
              </h2>
            </div>
            <div
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Mail className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-80"> EMAIL</p>
                <p className="text-1 break-words">jo-henrique8@hotmail.com</p>
              </div>
            </div>
            <div
              className="flex gap-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >

              <Button
                size="icon"
                variant="outline"
                onClick={handleSocialClick("linkedin")}
                className="border-2 border-mustard-400 text-brown-900 hover:bg-mustard-400 hover:text-brown-900 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={handleSocialClick("github")}
                className="border-2 border-mustard-400 text-brown-900 hover:bg-mustard-400 hover:text-brown-900 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github />
              </Button>
            </div>
          </div>
          <div className="text-center lg:text-right animate-slide-up " style={{ animationDelay: "0.6s" }}>
            <div className="text-6xl lg:text-8xl font-luckiest text-mustard-300 thank-you-1">Thank</div>
            <div className="text-6xl lg:text-8xl font-luckiest text-mustard-300 thank-you-2 -mt-1">You</div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p>
            &copy; 2025 João Henrique de Freitas Queiroz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </section>
  );
};
