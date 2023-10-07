//gastronomies

export const getGastronomies = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/gastronomies`);
    const gastronomies = await response.json();

    return gastronomies;
}


export const getGastronomy = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/gastronomies/${id}`);
    const gastronomy = await response.json();

    return gastronomy;
}


export const postGastronomy = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/gastronomies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const gastronomy = await response.json();

    return gastronomy;
}
//comercials

export const getCommercials = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/commercials`);
    const commercials = await response.json();

    return commercials;
}


export const getCommercial = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/commercials/${id}`);
    const commercial = await response.json();

    return commercial;
}


export const postCommercial = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/commercials`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const commercial = await response.json();

    return commercial;
}
//sports
export const getSports = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/sports`);
    const sports = await response.json();

    return sports;
}


export const getSport = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/sports/${id}`);
    const sports = await response.json();

    return sports;
}


export const postSports = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/sports`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const sports = await response.json();

    return sports;
}
//musics
export const getMusics = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/musics`);
    const musics = await response.json();

    return musics;
}


export const getMusic = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/musics/${id}`);
    const musics = await response.json();

    return musics;
}


export const postMusic = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/musics`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const musics = await response.json();

    return musics;
}