import { TMDB } from 'tmdb-ts'
import { API_KEY } from '../../constants'

const tmdb = new TMDB(API_KEY)

export default tmdb
