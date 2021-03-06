import React, { Component } from "react"
import PropTypes from "prop-types"

import Pies from "./PiesBelowHeader.jsx"
import SearchBar from "./SearchBar"

class DataResources extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="flex-row about data-page">
        <div className="title-row">
          <section className="container flex-row center-xs child-page-hero">
            <div className="flex-col-9 between-xs content-row-width">
              <h2>Data</h2>
              <p>
                This page shows a summary of the available data and provides
                links to access the data, organized by study, assay, and tissue.
              </p>
            </div>
          </section>
          <SearchBar
            setDiagnosisMenu={this.props.setDiagnosesMenu}
            speciesSelection={this.props.speciesDropdownSelection}
            speciesSelectionOptions={this.props.speciesSelectionOptions}
            diagnosesSelection={this.props.diagnosesDropdownSelection}
            diagnosesSelectionOptions={this.props.diagnosesSelectionOptions}
            handleChange={this.props.handleChangeEvent}
            handleReactDropdownEvent={this.props.handleReactDropdownEvent}
          />
          <Pies
            biosamplesLoading={this.props.biosamplesLoading}
            toggleSeeAll={this.props.toggleSeeAll}
            buttonState={this.props.buttonState}
            diagnosesSelection={this.props.diagnosesDropdownSelection}
            speciesSelection={this.props.speciesDropdownSelection}
            getSum={this.props.getSum}
            getColumnCountForSpecies={this.props.getColumnCountForSpecies}
            pageData={this.props.pageData}
          />
        </div>
      </div>
    )
  }
}

DataResources.propTypes = {
  pageData: PropTypes.object.isRequired,
  diagnosesDropdownSelection: PropTypes.string.isRequired,
  diagnosesSelectionOptions: PropTypes.array.isRequired,
  getColumnCountForSpecies: PropTypes.func.isRequired,
  getSum: PropTypes.func.isRequired,
  handleChangeEvent: PropTypes.func.isRequired,
  handleReactDropdownEvent: PropTypes.func.isRequired,
  setDiagnosesMenu: PropTypes.func.isRequired,
  speciesDropdownSelection: PropTypes.string.isRequired,
  speciesSelectionOptions: PropTypes.array.isRequired,
  toggleSeeAll: PropTypes.func.isRequired,
}

export default DataResources
