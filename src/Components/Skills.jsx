// https://icons8.com/icons <= location of the icons

import SkillCard from './SkillCard';
import Title from './Title';

function Skills() {
    const skills = [
        { name: 'HTML', image: '../src/assets/tech_logos/html-logo.png' },
        { name: 'CSS', image: '../src/assets/tech_logos/css-logo.png' },
        { name: 'JavaScript', image: '../src/assets/tech_logos/javascript-logo.png' },
        { name: 'Tailwind CSS', image: '../src/assets/tech_logos/tailwind-logo.png' },
        { name: 'Bootstrap', image: '../src/assets/tech_logos/bootstrap-logo.png' },
        { name: 'React', image: '../src/assets/tech_logos/react-logo.png' },
        { name: 'MySQL', image: '../src/assets/tech_logos/mysql-logo.png' },
        { name: 'Python', image: '../src/assets/tech_logos/python-logo.png' },
        { name: 'Java', image: '../src/assets/tech_logos/java-logo.png' },
        { name: 'Springboot', image: '../src/assets/tech_logos/springboot-logo.png' },
        { name: 'Git', image: '../src/assets/tech_logos/git-logo.png' },
        { name: 'GitHub', image: '../src/assets/tech_logos/github-logo.png' },
        { name: 'GitLab', image: '../src/assets/tech_logos/gitlab-logo.png' },
        { name: 'Docker', image: '../src/assets/tech_logos/docker-logo.png' },
        { name: 'AWS', image: '../src/assets/tech_logos/aws-logo.png' },
        { name: 'Node.js', image: '../src/assets/tech_logos/node-logo.png' },
        { name: 'Unity 3D', image: '../src/assets/tech_logos/unity-logo.png' },
        { name: 'Unreal Engine', image: '../src/assets/tech_logos/unreal-logo.png' },
        { name: 'VS Code', image: '../src/assets/tech_logos/vscode-logo.png' },
        { name: 'Chrome Dev Tools', image: '../src/assets/tech_logos/chrome-logo.png' },
        { name: 'Blender', image: '../src/assets/tech_logos/blender-logo.png' },
    ];

    return (
        <div className="min-h-screen dark:bg-gray-200" id='skills'>

            <Title
                title="Skills"
                description="Cool technologies and languages"
            />

            {/* SKILLS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 px-5 sm:px-10 md:px-20 lg:px-56 py-10">
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index} 
                        skill={skill.name} 
                        imageSrc={skill.image} 
                        bgColor="bg-slate-700"
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
