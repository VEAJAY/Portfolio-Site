// https://icons8.com/icons <= location of the icons

import SkillCard from "./SkillCard";
import Title from "./Title";

function Skills() {
  const skills = [
    { name: "HTML", image: "/assets/tech_logos/html-logo.png" },
    { name: "CSS", image: "/assets/tech_logos/css-logo.png" },
    { name: "JavaScript", image: "/assets/tech_logos/javascript-logo.png" },
    { name: "Tailwind CSS", image: "/assets/tech_logos/tailwind-logo.png" },
    { name: "Bootstrap", image: "/assets/tech_logos/bootstrap-logo.png" },
    { name: "React", image: "/assets/tech_logos/react-logo.png" },
    { name: "MySQL", image: "/assets/tech_logos/mysql-logo.png" },
    { name: "Python", image: "/assets/tech_logos/python-logo.png" },
    { name: "Java", image: "/assets/tech_logos/java-logo.png" },
    { name: "Springboot", image: "/assets/tech_logos/springboot-logo.png" },
    { name: "Git", image: "/assets/tech_logos/git-logo.png" },
    { name: "GitHub", image: "/assets/tech_logos/github-logo.png" },
    { name: "GitLab", image: "/assets/tech_logos/gitlab-logo.png" },
    { name: "Docker", image: "/assets/tech_logos/docker-logo.png" },
    { name: "AWS", image: "/assets/tech_logos/aws-logo.png" },
    { name: "Node.js", image: "/assets/tech_logos/node-logo.png" },
    { name: "Unity 3D", image: "/assets/tech_logos/unity-logo.png" },
    { name: "Unreal Engine", image: "/assets/tech_logos/unreal-logo.png" },
    { name: "VS Code", image: "/assets/tech_logos/vscode-logo.png" },
    { name: "Chrome Dev Tools", image: "/assets/tech_logos/chrome-logo.png" },
    { name: "Blender", image: "/assets/tech_logos/blender-logo.png" },
    { name: "Expo", image: "/assets/tech_logos/expo-logo.png" },
    { name: "IntelliJ", image: "/assets/tech_logos/intellij-logo.png" },
    { name: "Github Copilot", image: "/assets/tech_logos/copilot-logo.png" },
  ];

  return (
    <div
      className="sm:mt-36 min-h-screen dark:bg-gray-200 text-center"
      id="skills"
    >
      <Title title="Skills" description="Cool technologies and languages" />

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
