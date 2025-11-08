import type { Certificates } from "../types/resume";

export default function Cert({ cert }: { cert: Certificates }) {
    return (
        <div className="certificate-item items-center flex flex-row align-middle py-auto gap-1 justify-between">
            
            {cert.url ? (
                <a className="my-auto" href={cert.url} target="_blank" rel="noopener noreferrer"><strong>{cert.name}</strong><i className="ml-[5px] fas fa-external-link-alt fa-xs"></i></a>
            ) : (
                <span>{cert.name}</span>
            )}
            <div className="project-tech">
                <p>{cert.issuer}</p>
            </div>
        </div>
    );
}