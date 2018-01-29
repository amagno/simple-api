const buildSearchRegex = (str = '') => {
  const strArray = Array.from(str);
  const regexArray = strArray.map(word => {
      if (word === 'a') return '[à-úÀ-ÚaA]';
      if (word === 'e') return '[à-úÀ-ÚeE]';
      if (word === 'i') return '[à-úÀ-ÚiI]';
      if (word === 'o') return '[à-úÀ-ÚoO]';
      if (word === 'u') return '[à-úÀ-ÚuU]';
      return word;
  });
  const strRegex = regexArray.toString().split(',').join('');
  console.log(strRegex);
  return new RegExp(strRegex, 'ig');
};
const sanitizeContact = (contact) => {
  const obj = Object.assign({}, contact);
  if (obj.isFavorite === 'false') {
      obj.isFavorite = false;
  }
  if (obj.isFavorite === 'true') {
      obj.isFavorite = true;
  }
};

module.exports = {
  buildSearchRegex,
  sanitizeContact
};