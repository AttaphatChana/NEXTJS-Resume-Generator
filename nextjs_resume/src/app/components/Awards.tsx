import type { Awards } from "../types/resume";

export default function Awards({ awards }: { awards: Awards }) {
    return (
        <div className="certificate-item">
            <p className="item-title"><strong>{awards.title}</strong> {awards.date.split('-')[0]}</p>
            <div className="item-content">
                <p>{awards.awarder}</p>
            </div>
        </div>
    );
}