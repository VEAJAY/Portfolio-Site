import ContactCard from './ContactCard';
import Title from './Title';

function Contact() {
  return (
    <div className="h-screen dark:bg-gray-200">
        
        <Title 
          title="Contact"
          description="Feel free to reach out"
        />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 justify-center max-w-6xl px-4">

            <ContactCard 
              image="../src/assets/socials_logo/email-logo.png"
              note="Send me an email"
              contact="veaseyjayland3@gmail.com"
              link=""
            />

            <ContactCard 
              image="../src/assets/socials_logo/twitter-logo.png"
              note="My Twitter / X account"
              contact="@jayland37"
              link="https://x.com/jayland37"
            />

            <ContactCard 
              image="../src/assets/socials_logo/linkedin-logo.png"
              note="View my Linkedin account"
              contact="@Jayland Veasey"
              link="https://www.linkedin.com/in/jayland-veasey-72696715b/"
            />

            <ContactCard 
              image="../src/assets/socials_logo/githubdesktop-logo.webp"
              note="Check out my GitHub account"
              contact="@VEAJAY"
              link="https://github.com/VEAJAY"
            />

          </div>
        </div>

    </div>
  )
}

export default Contact
