import { css } from 'react-emotion'
import styled from 'react-emotion'

export const spacingBase = 16
export const spacing = {
  md: spacingBase,
  sm: spacingBase / 2,
  xs: spacingBase / 3,
  xxs: spacingBase / 6,
  lg: parseInt(spacingBase * 1.35),
  xl: spacingBase * 2,
  xxl: spacingBase * 3,
  xxxl: spacingBase * 5,
}

export const fontFace = css`
  @import url(https://fontlibrary.org/face/hk-grotesk);
`

export const fontWeight = {
  light: 'HKGroteskLight',
  lightItal: 'HKGroteskLightItalic',
  med: 'HKGroteskMedium',
  medItal: 'HKGroteskMediumItalic',
  reg: 'HKGroteskRegular',
  semi: 'HKGroteskSemiBold',
  bold: 'HKGroteskBold',
  boldItal: 'HKGroteskSemiBoldItalic',
}

export const fontSizes = {
  xs: '12px',
  sm: '16px',
  base: '20px',
  md: '20px',
  lg: '24px',
  xl: '48px',
}

export const colours = {
  yellow: '#FDD262',
  yellowLight: '#E5BF73',
  yellowDark: '#E7AE27',
  blue: '#1177DD',
  blueDark: '#073767',
  blueAlpha: '#4A90E2',
  red: '#A5071B',
  grey: '#4A4A4A',
  gray: '#4A4A4A',
  greyLight: '#DBDBDB',
  grayLight: '#DBDBDB',
  white: '#FFFFFF',
  black: '#000000',
  focus: '#ffbf47',
}

const borderRadius = 2
export const roundedEdges = css`
  -webkit-border-radius: ${borderRadius}px;
  -moz-border-radius: ${borderRadius}px;
  border-radius: ${borderRadius}px;
`

/*
 * Hide only visually, but have it
 * available for screenreaders
 */
export const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const breakpoints = {
  xs: 481,
  small: 576,
  ms: 600,
  medium: 764,
  large: 992,
  xLarge: 1200,
  xxl: 1920,
}

export const theme = {
  yellow: '#FDD262',
  yellowLight: '#E5BF73',
  yellowDark: '#E7AE27',
  blue: '#1177DD',
  blueDark: '#073767',
  blueAlpha: '#4A90E2',
  red: '#A5071B',
  grey: '#4A4A4A',
  gray: '#4A4A4A',
  greyLight: '#DBDBDB',
  grayLight: '#DBDBDB',
  white: '#FFFFFF',
  black: '#000000',
  focus: '#ffbf47',

  weightLight: 'HKGroteskLight',
  weightLightItal: 'HKGroteskLightItalic',
  weightMed: 'HKGroteskMedium',
  weightMedItal: 'HKGroteskMediumItalic',
  weightReg: 'HKGroteskRegular',
  weightSemi: 'HKGroteskSemiBold',
  weightBold: 'HKGroteskBold',
  weightBoldItal: 'HKGroteskSemiBoldItalic',

  fontXsmall: '12px',
  fontSmall: '16px',
  fontBase: '20px',
  fontMedium: '20px',
  fontLarge: '24px',
  fontXlarge: '48px',

  spacingMedium: 16,
  spacingSmall: 16 / 2,
  spacingXsmall: 16 / 3,
  spacingXsmall2: 16 / 6,
  spacingLarge: parseInt(16 * 1.35),
  spacingXlarge: 16 * 2,
  spacingXlarge2: 16 * 3,
  spacingXlarge3: 16 * 5,
}

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
    let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
    accumulator[label] = cls =>
      css`
        @media screen and (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {},
)

export const Header1 = styled.h1`
  color: ${theme.black};
  font-family: ${theme.weightBold}, sans-serif;
  font-size: ${theme.fontXlarge};
  margin-bottom: ${theme.spacingLarge}px;
`

export const Header2 = styled.h2`
  color: ${theme.black};
  font-family: ${theme.weightBold}, sans-serif;
  font-size: ${theme.fontLarge};
  margin-bottom: ${theme.spacingMedium}px;

  ${mediaQuery.medium(css`
    color: blue;
  `)};
`

export const Header3 = styled.h3`
  color: ${theme.black};
  font-family: ${theme.weightBold}, sans-serif;
  font-size: ${theme.fontMedium};
  margin-bottom: 0px;

  ${mediaQuery.medium(css`
    color: blue;
  `)};
`

export const IndexHeader = styled.header`
  background-color: ${props => props.theme.yellow};
  padding: ${theme.spacingXlarge}px ${theme.spacingXlarge3}px;
  height: 19em;

  ${mediaQuery.large(css`
    height: 20em;
  `)};

  ${mediaQuery.medium(css`
    height: 18.5em;
  `)};

  ${mediaQuery.small(css`
    height: 20em;
  `)};

  ${mediaQuery.xs(css`
    height: 23em;
  `)};
`

export const HeaderContainer = styled.div`
  width: 45%;
  position: absolute;
  z-index: 1;
  margin-left: 0px;
  padding: ${theme.spacingXlarge}px 0px ${theme.spacingXlarge}px 0px;

  ${mediaQuery.medium(css`
    width: 80%;
  `)};

  ${mediaQuery.small(css`
    width: 70%;
    padding: 8px;
  `)};
`

export const Section = styled.section`
  margin-bottom: ${theme.spacingXlarge2}px;
  width: 70%;
  &:last-of-type {
    margin-bottom: 0;
  }

  ${mediaQuery.medium(css`
    width: 100%;
  `)};
`
export const PageBody = styled.div`
  margin: 0px;
  padding: ${theme.spacingXlarge2}px ${theme.spacingXlarge3}px;
`
