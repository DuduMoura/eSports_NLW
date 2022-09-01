import axios from 'axios';
import { verifyDateTimeCache } from '../util/Dates';
const url: string = 'https://api.twitch.tv/'


export class Twitch {
  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  api: any
  client_id: string | undefined
  secret: string | undefined

  constructor() {
    const api = axios.create({
      baseURL: url,
      headers: this.headers
    })
    this.api = api
    this.client_id = process.env.NEXT_PUBLIC_CLIENT_ID
    this.secret = process.env.NEXT_PUBLIC_CLIENT_SECRET
    this.api.defaults.headers['Client-Id'] = this.client_id
  }

  async getToken() {
    var config = {
      method: 'post',
      url: `https://id.twitch.tv/oauth2/token?client_id=${this.client_id}&client_secret=${this.secret}&grant_type=client_credentials`,
      headers: { }
    };
    if (this.api.defaults.headers['Authorization']) {
      return
    }
    let token = await axios(config)
    .then(function (response) {
      return `Bearer ${response.data.access_token}`
    })
    .catch(function (error) {
      return ''
    });

    this.api.defaults.headers['Authorization'] = token
  }

  async getTopGames() {
    let games: string | null = localStorage.getItem('games')
    if (games) {
      let gamesJson: any = JSON.parse(games)
      if (verifyDateTimeCache(gamesJson?.expires)) {
        console.log(gamesJson.data)
        return gamesJson.data
      }
    }
    await this.getToken()
    return await this.api.get('helix/games/top')
    .then(function (response: any) {
      response.data.expires = new Date()
      localStorage.setItem('games', JSON.stringify(response.data))
      return response.data.data
    })
    .catch(function (error: any) {
      console.log(error);
      return null
    })
  }
}