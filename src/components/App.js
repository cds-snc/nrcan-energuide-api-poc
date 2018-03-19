import React from 'react'
import { injectGlobal } from 'emotion'
import Switcher from './Switcher'
import { I18nProvider } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'
import en from './locale/en/messages.js'
import fr from './locale/fr/messages.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AlphaBanner from './AlphaBanner'
import FederalBanner from './FederalBanner'
import Footer from './Footer'
import { theme } from './styles'

const catalogs = { en: unpackCatalog(en), fr: unpackCatalog(fr) }

// required in development only (huge dependency)
const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

injectGlobal`

	html, body {
    padding: 0;
		margin: 0;
		background: ${theme.white};
		min-height: 100%;
    font-family: ${theme.weightMed}, sans serif;
    font-size: ${theme.fontMedium};
	}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  svg {
    font-size: 1.4em;
  }

  p, a {
		line-height: 1.45;
	}

  p {
    margin-bottom: ${theme.spacingLarge}px;
  }


	a {
		color: ${theme.blue};
    padding-right: ${theme.spacingMedium}px;
	}

	#info {
		top: 5px;
		left: 5px;
		display: inline;
	}

	input[type=text] {
		width: 30%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		border: 3px solid #ccc;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		outline: none;
	}

	input[type=text]:focus {
		border: 3px solid #555;
	}

  .bottom-link {
    padding-left: ${theme.spacingXsmall}px;
  }

`

const App = ({ lang }) => (
  <I18nProvider language={lang} catalogs={catalogs} development={dev}>
    <link
      rel="stylesheet"
      media="screen"
      href="https://fontlibrary.org/face/hk-grotesk"
      type="text/css"
    />
    <div>
      <AlphaBanner />
      <FederalBanner />
      <Switcher />
      <Footer />
    </div>
  </I18nProvider>
)

App.propTypes = {
  lang: PropTypes.string,
}

const mapStateToProps = state => ({
  lang: state.language,
})

export default connect(mapStateToProps)(App)
