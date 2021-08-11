import { stringifyUrl, parse } from 'query-string'
import client from './client'

export const fetchBooksAPI = (search, startIndex) => {
  const { q, ...rest } = parse(search)

  const input = stringifyUrl({
    url: client.defaults.baseURL,
    query: {
      q: `${q}`,
      startIndex,
      projection: 'full',
      ...rest
    }
  })

  return client.get(`${input}`)
}
