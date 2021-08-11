import React from 'react'
import useSearchForm from 'hooks/useSearchForm'

const SearchForm = () => {
  const { searchInfo, handleChange, handleSubmit } = useSearchForm()

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <fieldset>
        <label htmlFor="searchBox" className={styles.label} />
        <input type="hidden" id="searchWord" name="searchWord" />
        <input
          type="search"
          id="searchBox"
          name="q"
          defaultValue={searchInfo.q}
          placeholder="제목, 저자, 출판사를 검색해 보세요"
          required
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.submit}>
          검색
        </button>
      </fieldset>
    </form>
  )
}

const styles = {
  wrapper: 'flex items-center justify-between sticky',
  label: 'mb-1 text-gray-700',
  input: 'w-64 h-8 px-2 border border-r-0 rounded-l focus:outline-none text-sm',
  submit:
    'h-8 px-4 rounded-r bg-blue-500 hover:bg-blue-700 text-white align-top'
}

export default SearchForm
