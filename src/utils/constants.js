export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
export const FilterGaps = [0, 20, 20, 40]
export const SortGaps = [0, 20, 20]
export const ButtonGaps = [0, 10]
export const Status = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Failure: 'failure'
}
export const Filterings = [
  ['', '없음'],
  ['partial', '미리보기 가능'],
  ['full', '전체 공개'],
  ['ebooks', '전체 eBooks'],
  ['free-ebooks', '무료 eBooks'],
  ['paid-ebooks', '유료 eBooks']
]
