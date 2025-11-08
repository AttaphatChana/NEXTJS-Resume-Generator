import type { Languages } from "../types/resume";

export default function Lang({ lang }: { lang: Languages }) {
    return (
        <div className="language-item">
            <span className="item-title">{lang.language}</span>: <i>{lang.fluency}</i>
        </div>
    );
}