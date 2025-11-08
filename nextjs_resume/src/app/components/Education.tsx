import type { Education } from "../types/resume";

interface EducationProps {
    education: Education;
}


function formatDate(date?: string): string {
    if (!date) return "Present";
    const [month, year] = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }).split(' ');
    return `${month} ${year}`;
}

export default function Education({ education }: EducationProps) {
    return (
        <div className="education-item">
            <div className="flex flex-row justify-between align-bottom">
                <h3 className="item-title">{education.institution}</h3>
                {education.endDate && (
                    <div className="flex">
                        <div className="education-item-date">
                            Expected Graduation: {formatDate(education.endDate)}
                        </div>
                    </div>
                )}
            </div>
            <div className="item-content">
                <p>{education.area}</p>
                {education.score && (
                    <p>GPA: {education.score}</p>
                )}
                {education.courses && education.courses.length > 0 && !education.courses.includes('HIDE') && (
                    <ul>
                        <li>Relevant Courses: {education.courses.join(', ')}.</li>
                    </ul>
                )}
            </div>
        </div>
    );
    // return (
    //   <div className="education-item mb-6">
    //     <div className="flex flex-row justify-between items-baseline mb-2">
    //       <h3 className="item-title text-xl font-semibold">
    //         {education.institution}
    //       </h3>
    //       {education.endDate && (
    //         <div className="text-sm text-gray-600">
    //           Expected Graduation: {formatDate(education.endDate)}
    //         </div>
    //       )}
    //     </div>
        
    //     <div className="item-content text-gray-700">
    //       <p className="mb-1">{education.area}</p>
          
    //       {education.score && (
    //         <p className="mb-1">GPA: {education.score}</p>
    //       )}
          
    //       {education.courses && education.courses.length > 0 && !education.courses.includes('HIDE') && (
    //         <ul className="list-none pl-0">
    //           <li>
    //             Relevant Courses: {education.courses.join(', ')}.
    //           </li>
    //         </ul>
    //       )}
    //     </div>
    //   </div>
    // );
  }