const ContactCard = ({ image, note, contact, link }) => {
    return (
        <div className="flex flex-row items-center">
                <img src={image} className="w-16 h-16"/>

                <div className="flex flex-col m-4 text-white dark:text-gray-900">
                    <a href={link} target="_blank">
                        <p className="text-gray-400 font-thin dark:text-black">
                            {note}
                        </p>
                        <h2 className="font-bold text-xl">
                            {contact}
                        </h2>
                    </a>
                    
                </div>
            
        </div>
    );
}
export default ContactCard