import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "./utils/button";
export const ContactSection = () => {
    const handleSocialClick = (social: string) => () => {
        const urls = { 
            instagram: 'https://www.instagram.com/joaoqueiroz/',
            linkedin: 'https://www.linkedin.com/in/joaoqueiroz/',
            github: 'https://github.com/jhenrique44'
            
        };
        window.open(urls[social as keyof typeof urls], '_blank');

    }
    const handleCalendlyClick = () => {
        window.open('https://calendly.com/joaoqueiroz/30min', '_blank');
    }

return (
    <section>
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <h2>Get in touch!
                            <span onClick= {handleCalendlyClick}> Schedule a meeting with me. </span></h2>    
                    </div>
                    <div className="">
                        <Mail/>
                        <div className="">
                            <p> EMAIL</p>
                            <p>jo-henrique8@hotmail.com</p>
                        </div>
                    </div>
                    <div className="">
                        <Button
                            size='icon'
                            variant='outline'
                            onClick={handleSocialClick('instagram')}
                            className=""
                        >
                            <Instagram />
                        </Button>

                        <Button
                            
                                size='icon'
                                variant='outline'
                                onClick={handleSocialClick('linkedin')}
                                className=""
                                >
                                <Linkedin />
                            
                        </Button>
                        <Button>
                            <Button
                                size='icon'
                                variant='outline'
                                onClick={handleSocialClick('github')}
                                className=""
                            >
                                <Github />
                            </Button>
                        </Button>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        Thank
                    </div>
                    <div className="">
                        You
                    </div>
                </div>
            </div>
            <div className="">
                <p>&copy; 2025 João Henrique de Freitas Queiroz. Todos os direitos reservados.</p>
            </div>
        </div>
    </section>
  )
}
