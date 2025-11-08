interface ContactLinkProps {
    href: string;
    children: React.ReactNode;
    external?: boolean; // For external links
  }
  
  export function ContactLink({ href, children, external = false }: ContactLinkProps) {
    const externalProps = external ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : {};
  
    return (
      <a 
        href={href}
        className="hover:text-blue-600 transition-colors"
        {...externalProps}
      >
        {children}
      </a>
    );
  }