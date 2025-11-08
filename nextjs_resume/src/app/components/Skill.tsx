import type { Skills } from "../types/resume";

interface SkillProps {
    skills: Skills;
}

export default function Skill({ skills }: SkillProps) {
    return (
        <div className="skill-group">
            <h3 className="item-title">{skills.name}</h3>
            <div className="item-content flex flex-wrap gap-2">
                {skills.keywords.map((keyword, index) => (
                    <span key={index} className="keyword">
                        {keyword}
                    </span>
                ))}
            </div>
        </div>
    );
}