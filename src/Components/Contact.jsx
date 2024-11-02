import { useState } from 'react';
import ContactCard from './ContactCard';
import Title from './Title';
import EmailModal from './EmailModal';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-auto dark:bg-gray-200" id="contact">
      <Title title="Contact" description="Feel free to reach out" />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 justify-center max-w-6xl px-4">
          
          
          <ContactCard 
            image="../src/assets/socials_logo/gmail-logo.png"
            note="Send me an email"
            contact="veaseyjayland3@gmail.com"
            link="" 
            isLinkActive={false} 
            onClick={handleEmailClick}
          />

          <ContactCard 
            image="../src/assets/socials_logo/phone-logo.png"
            note="Send a text to my cell"
            contact="(361) 415 - 0294"
            link=""
            isLinkActive={false}
          />

          <ContactCard 
            image="../src/assets/socials_logo/twitter-logo.png"
            note="My Twitter / X account"
            contact="@jayland37"
            link="https://x.com/jayland37"
            isLinkActive={true}
          />

          <ContactCard 
            image="../src/assets/socials_logo/linkedin-logo.png"
            note="View my Linkedin account"
            contact="/in/Jayland Veasey"
            link="https://www.linkedin.com/in/jayland-veasey-72696715b/"
            isLinkActive={true}
          />

          <ContactCard 
            image="../src/assets/socials_logo/githubdesktop-logo.webp"
            note="Check out my GitHub account"
            contact="/VEAJAY"
            link="https://github.com/VEAJAY"
            isLinkActive={true}
          />

        </div>
      </div>

      <EmailModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        email="veaseyjayland3@gmail.com" 
      />
    </div>
  );
}

export default Contact;
