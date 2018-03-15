import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { NavLink } from 'redux-first-router-link'
import Breadcrumbs from './Breadcrumbs'
import FieldSet from './forms/FieldSet'
import Radio from './forms/Radio'
import InfoIcon from './InfoIcon'
import Button from './forms/Button'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { spacing } from './styles'

const main = css`
  form {
    margin-bottom: ${spacing.xl}px;
  }
`

class Search extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  constructor() {
    super()
    this.handleFormData = this.handleFormData.bind(this)
  }

  async handleFormData(data) {
    if (data.searchBy == 'location') {
      this.props.dispatch({ type: 'LOCATION' })
    }
    if (data.searchBy == 'file-number') {
      this.props.dispatch({ type: 'FILEID' })
    }
  }

  render() {
    let { handleSubmit, pristine, submitting } = this.props
    return (
      <main role="main" className={main}>
        <Breadcrumbs>
          <NavLink to="/">
            <Trans>EnerGuide API</Trans>
          </NavLink>
          <NavLink to="/search">
            <Trans>Search</Trans>
          </NavLink>
          <NavLink to="/search-location">
            <Trans>Location</Trans>
          </NavLink>
        </Breadcrumbs>

        <div id="page-body">
          <header>
            <h1>
              <Trans>Which parameter would you like to search by?</Trans>
            </h1>
          </header>
          <p>
            <Trans>
              To test the API, you are able to search by Location or File
              number.
            </Trans>
          </p>
          <form
            onSubmit={handleSubmit(this.handleFormData)}
            aria-labelledby="search-by-description"
          >
            <FieldSet name="search">
              <legend id="search-by-description">
                <Trans>Search by Location or File number</Trans>
              </legend>
              <Field
                id="search-by-1"
                name="searchBy"
                component="input"
                type="radio"
                value="location"
              />
              <label htmlFor="search-by-1">
                <Trans>Location&nbsp;</Trans>
                <abbr title="A location refers to a region or neighbourhood. You will be searching by the first three digits of any postal code.">
                  <InfoIcon />
                </abbr>
              </label>
              <Field
                id="search-by-2"
                name="searchBy"
                component="input"
                type="radio"
                value="file-number"
              />
              <label htmlFor="search-by-2">
                <Trans>File number&nbsp;</Trans>
                <abbr title="A file number refers to an individual home. This number is provided to the homeowner through EnerGuide.">
                  <InfoIcon />
                </abbr>
              </label>
            </FieldSet>
            <button type="submit" disabled={pristine || submitting}>
              <Trans>Search</Trans>
            </button>
          </form>

          <aside>
            <h3>
              <Trans>To see all of the available data,&nbsp;</Trans>
              <a href="https://github.com/cds-snc/nrcan_api">
                <Trans>view the EnerGuide API documentation</Trans>
              </a>
              <Trans>&nbsp;on GitHub.</Trans>
            </h3>
          </aside>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default compose(
  withApollo,
  reduxForm({ form: 'searchBy' }),
  connect(mapStateToProps),
)(Search)
