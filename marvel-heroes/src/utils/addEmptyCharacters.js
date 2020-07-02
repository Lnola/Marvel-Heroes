export const addEmptyCharacters = (array) => {
  if (array !== null) {
    const amountToAdd = 4 - (array.length % 4);

    if (amountToAdd % 4 !== 0)
      for (let i = 0; i < amountToAdd; i++) {
        array.push(null);
      }
  }

  return array;
};
