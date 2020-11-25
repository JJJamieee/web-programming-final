let number

const getNumber = (forceRestart = false) => {
  // TODO:
  // generate a random number if number is undefined or forceRestart is true
  const max_num = 100

  if (!number || forceRestart === true) {
    number = Math.floor(Math.random() * max_num) + 1
  }

  return number
}

export default getNumber
