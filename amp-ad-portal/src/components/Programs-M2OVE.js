import React, { Component } from "react"
import PropTypes from "prop-types"

import { getMarkdown, getWikiMarkdownSegments } from "../queries/getWikiData"
import { printShowHideSections } from "../model/HandleMarkdown"

const ReactMarkdown = require("react-markdown")

class ProgramsM2OVE extends Component {
  componentDidMount() {
    getMarkdown(this.props, "581894")
    if (this.props.markdownSegs.length === 0) {
      getWikiMarkdownSegments(
        "581894",
        "syn12666371",
        "programsM2OVE",
        this.props.token.sessionToken,
        this.props.handleNestedChanges,
        false,
      )
    }
  }

  render() {
    return (
      <div className="row about research-page">
        <div className="col-xs-12">
          <section className="row child-page-hero">
            <div className="col-xs-12 col-sm-9 content">
              <h2>M2OVE-AD</h2>
              <p>
                Generate a deeper understanding of the phenotypes of risk and
                the molecular mechanisms linking vascular risk factors,
                cerebrovascular disease and AD.
              </p>
            </div>
          </section>
          <ReactMarkdown source={this.props.markdown} escapeHtml={false} />
          <section className="row center-xs content-row">
            <div className="col-xs-12 col-sm-9">
              <h2>Projects</h2>
              {printShowHideSections(this.props.markdownSegs)}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

ProgramsM2OVE.propTypes = {
  markdown: PropTypes.string.isRequired,
  markdownSegs: PropTypes.array.isRequired,
  token: PropTypes.object.isRequired,
  handleNestedChanges: PropTypes.func.isRequired,
}

export default ProgramsM2OVE
