import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' })

const startGame = async () => {
  const {
    data: { msg }
  } = await instance.post('/start')

  return msg
}

const guess = async (number) => {
  const {
    data: { result }
  } = await instance.get('/guess', { params: { number } });

  return { result };
}

const restart = async () => {
  const {
    data: { msg }
  } = await instance.post('/restart')

  return msg
}

export { startGame, guess, restart }
