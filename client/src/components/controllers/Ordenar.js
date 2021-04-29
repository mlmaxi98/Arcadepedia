export function compareZA(a, b) {
    const nameA = a.name;
    const nameB = b.name;
    return (nameA < nameB ? 1 : -1);
}
export function compareAZ(a, b) {
    const nameA = a.name;
    const nameB = b.name;
    return (nameA > nameB ? 1 : -1);
}

export function compareMin(a, b) {
    const ratA = a.rating;
    const ratB = b.rating;
    return ratA - ratB
}
export function compareMax(a, b) {
    const ratA = a.rating;
    const ratB = b.rating;
    return ratB - ratA;
}
export function compareAZ_Max(a, b) {
    const ratA = a.rating;
    const ratB = b.rating;
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return (nameA > nameB ? 1 : -1) || ratB - ratA;
}
export function compareAZ_Min(a, b) {
    const ratA = a.rating;
    const ratB = b.rating;
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return (nameA > nameB ? 1 : -1) || ratA - ratB;
}
export function compareZA_Max(a, b) {
    const ratA = a.rating;
    const ratB = b.rating;
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return (nameA < nameB ? 1 : -1) || ratB - ratA;
}
export function compareZA_Min(a, b) {
    const ratA = a.rating;
    const ratB = b.rating;
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return (nameA < nameB ? 1 : -1) || ratA - ratB;
}