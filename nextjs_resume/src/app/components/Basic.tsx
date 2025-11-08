import { Basics } from "../types/resume";
import { ContactItem } from "./helper_css/ContactItem";

interface BasicProps {
    basics: Basics;
}

export default function Basic({ basics }: BasicProps) {
    const contactItems = [
        basics.email && {
            href: `mailto:${basics.email}`,
            label: basics.email,
            icon: "fas fa-envelope",
        },
        basics.phone && {
            href: basics.phone,
            label: basics.phone,
        },
        basics.url && {
            href: basics.url,
            label: "LinkedIn",
            icon: "fas fa-external-link-alt",
        },
        basics.url2 && {
            href: basics.url2,
            label: "Github",
            icon: "fas fa-external-link-alt",
        },
    ].filter(Boolean) as { href?: string; label: string; icon?: string; external?: boolean }[];
    return (
        <div className="contact-info flex flex-wrap justify-center gap-4 text-sm">
            {contactItems.map((item, index) => (
                <ContactItem key={index} {...item} />
            ))}
        </div>
    );

    // return (
    //     <div className="contact-info flex flex-wrap justify-center gap-4 text-sm">
    //         {basics.email && (
    //             <div className="contact-item">
    //                 <a href={`mailto:${basics.email}`} 
    //                 className="hover:text-blue-600 transition-colors">
    //                     {basics.email}
    //                 </a>
    //             </div>
    //         )}
    //         {basics.phone && (
    //             <div className="contact-item">
    //                 <span>{basics.phone}</span>
    //             </div>
    //         )}
    //         {basics.url && (
    //             <div className="contact-item">
    //                 <a href={basics.url} className="hover:text-blue-600 transition-colors"
    //                 target="_blank" rel="noopener noreferrer">
    //                     <strong>LinkedIn</strong>
    //                     <i className="ml-[5px] fas fa-external-link-alt fa-xs"></i>
                    
    //                 </a>
    //             </div>
    //         )}
    //         {basics.url2 && (
    //             <div className="contact-item">
    //                 <a href={basics.url2} className="hover:text-blue-600 transition-colors"
    //                 target="_blank" rel="noopener noreferrer">
    //                     <strong>Github</strong>
    //                     <i className="ml-[5px] fas fa-external-link-alt fa-xs"></i>
    //                 </a>
    //             </div>
    //         )}
    //     </div>
    // );
}