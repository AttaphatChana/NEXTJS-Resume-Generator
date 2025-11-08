export interface Basics {
    name: string,
    email: string,
    phone: string,
    url: string,
    url2: string,
}

export interface Education {
    institution: string,
    area: string,
    studyType: string,
    startDate: string,
    endDate: string,
    score: string,
    courses: string[],
}

export interface Skills {
    name: string,
    keywords: string[],
}


export interface Work {
    name: string,
    position: string,
    location: string,
    startDate: string,
    endDate: string,
    summary: string,
    highlights: string[],
}

export interface Project {
    url: string,
    name: string,
    technologies: string[],
    description: string,
    highlights: string[],
}

export interface Languages {
    language: string,
    fluency: string,
}


export interface Certificates {
    name: string,
    issuer: string,
    url: string,
}

export interface Awards {
    title: string,
    date: string,
    awarder: string,
}