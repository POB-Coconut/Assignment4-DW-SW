export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
export const RESULT_GAP = [0, 10, 20, 20]
export const FILTER_GAP = [0, 20, 20, 40]
export const SORT_GAP = [0, 20, 20]
export const BUTTON_GAP = [0, 10]
export const INIT_INDEX = 0

export const ROUTES = {
  HOME: '/',
  RESULT: '/result',
  FILTERS: '/filters'
}

export const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Failure: 'failure'
}

export const FILTERINGS = [
  ['', '없음'],
  ['partial', '미리보기 가능'],
  ['full', '전체 공개'],
  ['ebooks', '전체 eBooks'],
  ['free-ebooks', '무료 eBooks'],
  ['paid-ebooks', '유료 eBooks']
]
