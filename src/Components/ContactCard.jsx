const ContactCard = ({ image, note, contact, link, isLinkActive, onClick }) => {
    const handleClick = () => {
        if (!isLinkActive && onClick) {
            onClick();
        }
    };

    return (
        <div className="flex flex-row items-center cursor-pointer" onClick={handleClick}>
            <img src={image} alt={note} className="w-14 h-14" />

            <div className="flex flex-col m-4 text-white dark:text-gray-900">
                {isLinkActive ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <p className="text-gray-400 font-thin dark:text-black">
                            {note}
                        </p>
                        <h2 className="font-bold text-xl">
                            {contact}
                        </h2>
                    </a>
                ) : (
                    <div>
                        <p className="text-gray-400 font-thin dark:text-black">
                            {note}
                        </p>
                        <h2 className="font-bold text-xl">
                            {contact}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactCard;
