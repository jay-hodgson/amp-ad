import React, { Component } from "react"
import PropTypes from "prop-types"

import { getMarkdownSegment } from "../queries/getWikiData"
import { buildSection } from "../model/HandleMarkdown"

import ShowHideSection from "../ShowHideSection"

class ExternalResearchers extends Component {
  componentDidMount() {
    getMarkdownSegment(this.props, "581946", "externalResearchers")
  }

  render() {
    return (
      <div className="row about">
        <div className="col-xs-12">
          <section className="row child-page-hero">
            <div className="col-xs-12 col-sm-9 content">
              <h2>
External Researchers
              </h2>
              <p>
Content...
              </p>
            </div>
          </section>
          <section className="row center-xs researchers-content">
            <div className="col-xs-12 col-sm-9">
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
              <ShowHideSection content={buildSection(0, 581946, this.props)} />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

ExternalResearchers.propTypes = {
  markdown: PropTypes.array.isRequired,
}

export default ExternalResearchers