import React from 'react'
import { WordMark } from '@cdssnc/gcui'
import { Trans } from 'lingui-react'
import styled, { css } from 'react-emotion'
import { theme } from './styles'

const footer = css`
  background-color: ${theme.black};
  padding: ${theme.spacingXlarge}px ${theme.spacingXlarge3}px;
  display: flex;
  justify-content: space-between;
  position: relative;
  font-family: ${theme.weightBold}, sans serif;
`

const Link = styled.a`
  color: ${theme.white};
  margin-top: 10px;
`

const Footer = () => (
  <footer className={footer}>
    <Link href="https://www.canada.ca/en/transparency/privacy.html">
      <Trans>Privacy</Trans>
    </Link>
    <WordMark width="6em" flag={theme.white} text={theme.white} />
  </footer>
)

export default Footer
