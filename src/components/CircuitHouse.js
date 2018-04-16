import React from 'react'
import { css } from 'react-emotion'
import { mediaQuery, theme } from './styles'

const headerImg = css`
  position: absolute;
  height: 100%;
  top: 105px;
  right: 0px;
  padding-top: ${theme.spacing.xl}px;
`

const headerWidth = css`
  width: 24em;

  ${mediaQuery.large(css`
    padding-top: 2em;
    width: 20em;
  `)};

  ${mediaQuery.medium(css`
    width: 0em;
  `)};
`

const CircuitHouse = () => (
  <div className={headerImg}>
    <img
      className={headerWidth}
      src="https://cdn.rawgit.com/cds-snc/nrcan-energuide-api-poc/46fad368/assets/CircuitHouse.svg"
      alt={''}
    />
  </div>
)

export default CircuitHouse
