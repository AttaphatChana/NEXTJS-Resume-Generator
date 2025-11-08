import type { Work } from "../types/resume";

export default function Work({ work }: { work: Work }) {

    return (
        <div className="work-item">
            <div className="item-title mb-[4px]">
                <div className="flex flex-row justify-between align-bottom">
                    <h3>{work.name}</h3>
                    <div className="item-date">
                        {work.startDate} - {work.endDate || 'Present'}
                    </div>
                </div>
                <div className="work-item-position">{work.position}</div>
                <div className="item-location">{work.location}</div>
            </div>
            <div className="item-content">
                <p>{work.summary}</p>
                <ul>
                    {work.highlights.map((highlight, index) => (
                        <li
                            key={index}
                            // Render allowed inline HTML (e.g., <strong>) from resume data.
                            // Assumes content is trusted. If user-provided, sanitize before rendering.
                            dangerouslySetInnerHTML={{ __html: highlight }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}