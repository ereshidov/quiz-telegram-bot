const shuffleArray = array => {
  const clonedArray = Array.from(array)
  for (let i = clonedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = clonedArray[i];
    clonedArray[i] = clonedArray[j];
    clonedArray[j] = temp;
  }
  return clonedArray
}

module.exports = {
  shuffleArray
}
