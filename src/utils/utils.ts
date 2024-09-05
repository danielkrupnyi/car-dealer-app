const startYear = 2015;
const currentYear = new Date().getFullYear();

export const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
