import React, { Component } from "react"
import Dropdown from 'react-dropdown'

class SearchBar extends Component {
 generateSelectionDropdown = (props, name, dropdownValue) => {
   const options = [];
    if(props !== undefined){
      props.forEach( (element, index) => {
        options.push({ 
          label: element, 
          value: [name, element],
          className: "dropdown-element"
        })
      });
      if(options[0] !== undefined){
        console.log(dropdownValue)
        return <Dropdown 
          options={options} 
          placeholder={options[0].value[1]} 
          onChange={this.props.handleReactDropdownEvent} 
          value={dropdownValue}
        />
      }else return <div></div>
    }
  }

  render(){
    return (
      <section className="row searchbar">
          <form className="searchbar-form col-sm-10 col-md-10">
            <div className="row between-xs">
              <div className="col-xs-3 col-sm-2">
                <h2 className="dropdown-description">View data by</h2> 
              </div>
              <div className="col-xs-3 col-sm-3">
                {this.generateSelectionDropdown(this.props.speciesSelectionOptions, "speciesDropdownSelection", this.props.speciesSelection)}
              </div>
              <div className="col-xs-3 col-sm-3">
                {this.generateSelectionDropdown(this.props.diagnosesSelectionOptions, "diagnosesDropdownSelection", this.props.diagnosesSelection)}
							</div>
              <div className="col-xs-3 col-sm-1 search-icon-box">
                <img src={require('./images/search.svg')} alt="search magnifying glass icon" className="svg-small-icon" /> 
                <a className="search-box" value="search" type="text">Search</a>
              </div>
              <div className="col-xs-3 col-sm-1 search-icon-box">
                <img src={require('./images/filter.svg')} alt="coffee filter icon" className="svg-small-icon" /> 
                <a className="search-box" value="filter" type="text">Filter</a>
              </div>
             </div>
          </form>
      </section>
    ) 
  }
}

export default SearchBar;
