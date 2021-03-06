import React from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { BUTTON_GAP, FILTER_GAP, FILTERINGS, SORT_GAP } from 'utils/constants'
import useSearchForm from 'hooks/useSearchForm'
import Stack from 'components/Stack'
import Fieldset from 'components/Form/Fieldset'
import Select from 'components/Form/Select'
import Radio from 'components/Form/Radio'
import { cx } from 'emotion'

const Filters = () => {
  const history = useHistory()
  const { searchInfo, handleChange, handleSubmit } = useSearchForm()
  const handleCancel = () => {
    history.goBack()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Helmet>
        <title>필터링</title>
      </Helmet>
      <Stack gaps={FILTER_GAP}>
        <Fieldset legend="필터링">
          <Select id="filter" value={searchInfo.filter} onChange={handleChange}>
            {FILTERINGS.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Fieldset>

        <Fieldset legend="도서 종류">
          <Stack gaps={SORT_GAP} direction="horizontal">
            <Radio
              id="printTypeAll"
              name="printType"
              value="all"
              checked={searchInfo.printType === 'all'}
              onChange={handleChange}
              label="전체"
            />
            <Radio
              id="printTypeBooks"
              name="printType"
              value="books"
              checked={searchInfo.printType === 'books'}
              onChange={handleChange}
              label="일반도서"
            />
            <Radio
              id="printTypeMagazines"
              name="printType"
              value="magazines"
              checked={searchInfo.printType === 'magazines'}
              onChange={handleChange}
              label="잡지"
            />
          </Stack>
        </Fieldset>

        <Fieldset legend="정렬 순서">
          <Stack gaps={FILTER_GAP} direction="horizontal">
            <Radio
              id="orderByRelevance"
              name="orderBy"
              value="relevance"
              checked={searchInfo.orderBy === 'relevance'}
              onChange={handleChange}
              label="관련성"
            />
            <Radio
              id="orderByNewest"
              name="orderBy"
              value="newest"
              checked={searchInfo.orderBy === 'newest'}
              onChange={handleChange}
              label="최신순"
            />
          </Stack>
        </Fieldset>

        <Stack gaps={BUTTON_GAP} direction="horizontal">
          <button
            type="button"
            className={cx([styles.button, styles.cancel])}
            onClick={handleCancel}
          >
            취소
          </button>
          <button type="submit" className={cx([styles.button, styles.submit])}>
            확인
          </button>
        </Stack>
      </Stack>
    </form>
  )
}

const styles = {
  button: 'w-20 font-bold py-2 px-4 rounded-full',
  cancel:
    'border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700',
  submit: 'bg-blue-500 hover:bg-blue-700 text-white'
}

export default Filters
