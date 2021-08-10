import React from 'react'
import { useHistory } from 'react-router-dom'
import { cx } from 'emotion'
import useForm from 'hooks/useForm'
import Stack from 'components/Stack'
import Fieldset from 'components/Form/Fieldset'
import Select from 'components/Form/Select'
import Radio from 'components/Form/Radio'
import { ButtonGaps, FilterGaps, Filterings, SortGaps } from 'utils/constants'

function Filters() {
  const history = useHistory()
  const { searchInfo, handleChange, handleSubmit } = useForm()
  const handleCancel = () => {
    history.goBack()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gaps={FilterGaps}>
        <Fieldset legend="필터링">
          <Select id="filter" value={searchInfo.filter} onChange={handleChange}>
            {Filterings.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Fieldset>

        <Fieldset legend="도서 종류">
          <Stack gaps={SortGaps} direction="horizontal">
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
          <Stack gaps={FilterGaps} direction="horizontal">
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

        <Stack gaps={ButtonGaps} direction="horizontal">
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
