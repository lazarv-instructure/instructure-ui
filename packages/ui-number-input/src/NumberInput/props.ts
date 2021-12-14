/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import type { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { FormPropTypes } from '@instructure/ui-form-field'

import type {
  PropValidators,
  NumberInputTheme,
  OtherHTMLAttributes
} from '@instructure/shared-types'
import type { FormFieldOwnProps, FormMessage } from '@instructure/ui-form-field'
import type { InteractionType } from '@instructure/ui-react-utils'
import type { WithStyleProps, ComponentStyle } from '@instructure/emotion'

type NumberInputOwnProps = {
  /**
   * The form field label.
   */
  renderLabel: React.ReactNode | (() => React.ReactNode)

  /**
   * The id of the input. One is generated if not supplied.
   */
  id?: string

  /**
   * Specifies if interaction with the input is enabled, disabled, or readonly.
   * When "disabled", the input changes visibly to indicate that it cannot
   * receive user interactions. When "readonly" the input still cannot receive
   * user interactions but it keeps the same styles as if it were enabled.
   */
  interaction?: InteractionType

  /**
   * Array of objects with shape: `{
   *   text: ReactNode,
   *   type: One of: ['error', 'hint', 'success', 'screenreader-only']
   * }`
   */
  messages?: FormMessage[]

  /**
   * Html placeholder text to display when the input has no value. This
   * should be hint text, not a label replacement.
   */
  placeholder?: string

  /**
   * Whether or not the text input is required.
   */
  isRequired?: boolean

  /**
   * Whether or not to display the up/down arrow buttons.
   */
  showArrows?: boolean

  /**
   * The size of the input.
   */
  size?: 'medium' | 'large'

  /**
   * The value of the input (should be accompanied by an `onChange` prop).
   */
  value?: string | number

  /**
   * The width of the input.
   */
  width?: string

  /**
   * The display of the root element.
   */
  display?: 'inline-block' | 'block'

  /**
   * A function that provides a reference to the actual input element.
   */
  inputRef?: (element: HTMLInputElement | null) => void

  /**
   * Callback fired when input receives focus.
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * Callback fired when the input loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * Callback executed when the input fires a change event.
   * @param {Object} event - the event object
   * @param {string} value - the string value of the input
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void

  /**
   * Called when the down arrow button is clicked, or the down arrow key is
   * pressed.
   */
  onDecrement?: (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void

  /**
   * Called when the up arrow button is clicked, or the up arrow key is
   * pressed.
   */
  onIncrement?: (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void

  /**
   * Callback fired when a key is pressed.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void

  /**
   * The inputMode attribute of the underlying `input` element can be one of ['numeric', 'decimal', 'tel']
   */
  inputMode?: 'numeric' | 'decimal' | 'tel'

  /**
   * The text alignment of the input.
   */
  textAlign?: 'start' | 'center'
}

type NumberInputState = {
  hasFocus: boolean
}

type NumberInputStyleProps = NumberInputState & {
  interaction: InteractionType
  invalid: boolean
}

type PropKeys = keyof NumberInputOwnProps

type AllowedPropKeys = Readonly<Array<PropKeys>>

type NumberInputProps =
  // pickProps passes through FormField.allowedProps, except the ones set manually
  Omit<FormFieldOwnProps, 'label' | 'inline' | 'id' | 'elementRef'> &
    NumberInputOwnProps &
    WithStyleProps<NumberInputTheme, NumberInputStyle> &
    OtherHTMLAttributes<
      NumberInputOwnProps,
      InputHTMLAttributes<NumberInputOwnProps>
    >

type NumberInputStyle = ComponentStyle<
  | 'numberInput'
  | 'arrowContainer'
  | 'arrow'
  | 'inputWidth'
  | 'inputContainer'
  | 'input'
>

const propTypes: PropValidators<PropKeys> = {
  renderLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string,
  interaction: PropTypes.oneOf(['enabled', 'disabled', 'readonly']),
  messages: PropTypes.arrayOf(FormPropTypes.message),
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  showArrows: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  display: PropTypes.oneOf(['inline-block', 'block']),
  inputRef: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  onKeyDown: PropTypes.func,
  inputMode: PropTypes.oneOf(['numeric', 'decimal', 'tel']),
  textAlign: PropTypes.oneOf(['start', 'center'])
}

const allowedProps: AllowedPropKeys = [
  'renderLabel',
  'id',
  'interaction',
  'messages',
  'placeholder',
  'isRequired',
  'showArrows',
  'size',
  'value',
  'width',
  'display',
  'inputRef',
  'onFocus',
  'onBlur',
  'onChange',
  'onDecrement',
  'onIncrement',
  'onKeyDown',
  'inputMode',
  'textAlign'
]

export type {
  NumberInputProps,
  NumberInputState,
  NumberInputStyleProps,
  NumberInputStyle
}
export { propTypes, allowedProps }
