export const toCapitalizeFirstLetter = (targetString: string = '') => {
  const newString = targetString.toLowerCase();

  return newString.charAt(0).toUpperCase() + newString.slice(1);
};
