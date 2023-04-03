import React from 'react'
import {SSRProvider} from '@react-aria/ssr'
import {ThemeProvider} from '../../ThemeProvider'
import Autocomplete, {AutocompleteInputProps} from '../../Autocomplete'
import {AutocompleteMenuInternalProps} from '../../Autocomplete/AutocompleteMenu'
import BaseStyles from '../../BaseStyles'
import {ItemProps} from '../../deprecated/ActionList'

import {MandateProps} from '../../utils/types'
import theme from '../../theme'

export const mockItems = [
  {text: 'zero', id: 0},
  {text: 'one', id: 1},
  {text: 'two', id: 2},
  {text: 'three', id: 3},
  {text: 'four', id: 4},
  {text: 'five', id: 5},
  {text: 'six', id: 6},
  {text: 'seven', id: 7},
  {text: 'twenty', id: 20},
  {text: 'twentyone', id: 21},
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AutocompleteItemProps<T = Record<string, any>> = MandateProps<ItemProps, 'id'> & {metadata?: T}

export const AUTOCOMPLETE_LABEL = 'Autocomplete field'
export const LabelledAutocomplete = <T extends AutocompleteItemProps>({
  inputProps = {},
  menuProps,
}: {
  inputProps?: AutocompleteInputProps
  menuProps: AutocompleteMenuInternalProps<T>
}) => {
  const {['aria-labelledby']: ariaLabelledBy = 'autocompleteLabel', ...menuPropsRest} = menuProps
  const {id = 'autocompleteInput', ...inputPropsRest} = inputProps
  return (
    <ThemeProvider theme={theme}>
      <SSRProvider>
        <BaseStyles>
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label htmlFor={id} id={ariaLabelledBy}>
            Autocomplete field
          </label>
          <Autocomplete id="autocompleteId">
            <Autocomplete.Input id={id} {...inputPropsRest} />
            <Autocomplete.Overlay>
              <Autocomplete.Menu aria-labelledby={ariaLabelledBy} {...menuPropsRest} />
            </Autocomplete.Overlay>
          </Autocomplete>
        </BaseStyles>
      </SSRProvider>
    </ThemeProvider>
  )
}
