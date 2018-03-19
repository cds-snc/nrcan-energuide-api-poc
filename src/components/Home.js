import React from 'react'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { ThemeProvider } from 'emotion-theming'
import {
  Header1,
  Header2,
  Header3,
  IndexHeader,
  HeaderContainer,
  Section,
  theme,
} from './styles'
import CircuitHouse from './CircuitHouse'

const Home = () => (
  <ThemeProvider theme={theme}>
    <main role="main">
      <IndexHeader>
        <HeaderContainer>
          <div id="page-header">
            <Header2>
              <Trans>Natural Resources Canada</Trans>
            </Header2>
            <Header1>
              <Trans>EnerGuide API</Trans>
            </Header1>
          </div>

          <p>
            <Trans>
              The EnerGuide API allows you to access the housing data provided
              by Natural Resources Canada. You will have open access the data,
              and will be able to query to an individual dwelling.
            </Trans>
          </p>
          <NavLink to="/search">
            <Trans>Test the API</Trans>
          </NavLink>
          <a href="https://github.com/cds-snc/nrcan_api">
            <Trans>Access the API</Trans>
          </a>
        </HeaderContainer>
      </IndexHeader>

      <CircuitHouse />

      <div id="page-body">
        <Section>
          <Header2>
            <Trans>What is an API?</Trans>
          </Header2>
          <p>
            <Trans>
              An <abbr title="Application Programming Interface">API</abbr>, or{' '}
              <strong>Application Programming Interface</strong>, is a set of
              routines, protocols and tools for building software. Many
              applications can talk to each other and deliver a response.
            </Trans>
          </p>
        </Section>
        <Section>
          <Header2>
            <Trans>What are the benefits of the EnerGuide API?</Trans>
          </Header2>
          <Header3>
            <Trans>View open data</Trans>
          </Header3>
          <p>
            <Trans>
              The EnerGuide API will help make energy consumption data
              accessible for everyone.
            </Trans>
          </p>
          <Header3>
            <Trans>Query specific data</Trans>
          </Header3>
          <p>
            <Trans>
              You can choose to access the granular data that you need. You will
              benefit from the ability to extract data data that is specific to
              your needs.
            </Trans>
          </p>
          <Header3>
            <Trans>Access current data</Trans>
          </Header3>
          <p>
            <Trans>
              The EnerGuide API will help make energy consumption data
              accessible for everyone.
            </Trans>
          </p>
        </Section>
        <Section>
          <Header2>
            <Trans>How can I use the EnerGuide API?</Trans>
          </Header2>
          <p>
            <Trans>
              Developers and data analysts can allow users to query specific
              information from large data sets. They set the rules that will
              guide the user to what they need.{' '}
            </Trans>
          </p>
          <Header3>
            <Trans>To see how it can be used,</Trans>{' '}
            <NavLink to="/search">
              <Trans>test the API</Trans>
            </NavLink>
          </Header3>
          <Header3>
            <Trans>Ready to use the Energuide API?</Trans>{' '}
            <NavLink to="https://github.com/cds-snc/nrcan_api">
              <Trans>Read the documentation</Trans>
            </NavLink>
          </Header3>
        </Section>
      </div>
    </main>
  </ThemeProvider>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default withApollo(connect(mapStateToProps)(Home))
