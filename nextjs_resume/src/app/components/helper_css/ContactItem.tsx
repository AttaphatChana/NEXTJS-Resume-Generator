import { ContactLink } from "./ContactLink";
interface ContactItemProps {
    href?: string;
    label: string;
    icon?: string;
    external?: boolean;
}

export function ContactItem({ href, label, icon, external = false }: ContactItemProps) {
    const content = icon ? (
        <>
            <strong>{label}</strong>
            <i className={`ml-[5px] ${icon} fa-xs`}></i>
        </>
    ) : (
        label
    );

    return (
        <div className="contact-item">
            {href ? <ContactLink href={href} external={external}>{content}</ContactLink> : <span>{content}</span>}
        </div>
    );
}