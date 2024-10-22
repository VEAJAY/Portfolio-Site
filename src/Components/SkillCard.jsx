import PropTypes from 'prop-types';

const SkillCard = ({ skill, imageSrc, bgColor }) => {
    return (
        <div className={`flex flex-col items-center justify-center h-40 rounded-lg text-center ${bgColor} dark:bg-slate-400 p-2`}>
            <img src={imageSrc} className="w-12 h-12 mb-2 object-contain" />
            <span className="text-white dark:text-gray-900">{skill}</span>
        </div>
    );
};

SkillCard.propTypes = {
    skill: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
};

SkillCard.defaultProps = {
    bgColor: 'bg-slate-700',
};

export default SkillCard;
