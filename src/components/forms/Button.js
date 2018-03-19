import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { theme, roundedEdges } from '../styles'

const button = css`
  font-size: ${theme.fontMedium};
  font-weight: 700;
  color: ${theme.white};
  background-color: ${theme.blue};
  border: 3px solid transparent;
  outline: 0;
  padding: ${theme.spacingSmall}px ${theme.spacingXlarge}px;
  cursor: pointer;
  ${roundedEdges};

  &:focus {
    outline: 4px solid ${theme.focus};
    outline-offset: -1px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${theme.blueDark};
  }

  &:active {
    opacity: 0.8;
  }
`

const Button = ({ disabled = false, children }) => (
  <button className={button} type="submit" disabled={disabled}>
    {children}
  </button>
)

/* validation to make sure only one child is passed in */
Button.propTypes = {
  children: PropTypes.element.isRequired,
  disabled: PropTypes.any,
}

export default Button
