 const toTitleCase = (str) => {
    return str
    .toLocaleLowerCase('tr-TR') // Türkçe'ye özel küçük harfe çevirme
    .split(' ')
    .map(word => {
      const firstChar = word.charAt(0).toLocaleUpperCase('tr-TR');
      const rest = word.slice(1);
      return firstChar + rest;
    })
    .join(' ');
  }
  export default toTitleCase;