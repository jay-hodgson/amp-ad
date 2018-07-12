import React, { Component } from "react"

import { getMarkdownSegment } from "../queries/getWikiData"
import { buildSection } from "../model/HandleMarkdown"

class ResearchPublications extends Component {
  componentDidMount() {
    getMarkdownSegment(this.props, "581933", "researchPublications")
  }

  render() {
    return (
      <div className="row about">
        <div className="col-xs-12">
          <section className="row child-page-hero">
            <div className="col-xs-12 col-sm-9 content">
              <h2>
Publications
              </h2>
              <p>
                Below are selected publications stemming from grants from the
                AMP-AD, MODEL-AD, M2OVE-AD, and Resilience programs. For a full
                list of publications resulting from these grants see this PubMed
                query.
              </p>
            </div>
          </section>
          <section className="row center-xs researchers-content">
            <div className="col-xs-12 col-sm-9">
              {buildSection(0, 581933, this.props)}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default ResearchPublications