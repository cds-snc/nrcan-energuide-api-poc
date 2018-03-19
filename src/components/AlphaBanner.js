import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { theme, roundedEdges } from './styles'

const banner = css`
  background-color: ${theme.gray};
  color: ${theme.white};
  padding-left: ${theme.spacingXlarge3}px;
  padding-right: ${theme.spacingXlarge3}px;
  padding-top: 12px;
  padding-bottom: ${theme.spacingSmall}px;
`

const alpha = css`
  font-size: ${theme.fontXsmall}px;
  margin-bottom: 0;
`

const statusBar = css`
  text-transform: uppercase;
  line-height: 2;
  color: white;
  position: relative;
  display: inline-block;
  font-size: ${theme.fontXsmall};
  bottom: 2px;
  padding: 2px ${theme.spacingMedium}px;
  margin-right: ${theme.spacingMedium}px;
  background-color: ${theme.blueAlpha};
  ${roundedEdges};
`

const link = css`
  color: ${theme.white};
  padding: 0;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p className={alpha}>
      <Trans>
        <span className={statusBar}>Alpha</span>This is an internal service.{' '}
        <a
          className={link}
          href="mailto:paul.craig@cds-snc.ca?subject=Hey,%20I%20love%20your%20app!"
        >
          To provide feedback, email us
        </a>.
      </Trans>
    </p>
  </div>
)

export default AlphaBanner
