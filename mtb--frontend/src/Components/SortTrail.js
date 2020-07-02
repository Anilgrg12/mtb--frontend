import React from 'react'

export default class SortTrail extends React.Component {
    render() {
        return (
            <div className = "sort-trail">
                <label>Sort Trails By:</label>
                <select name="sortBy" value={this.props.type} onChange={this.props.handleChange}>
                    <option value="all">All</option>
                    <option value="name">Name</option>
                    <option value="description">Description</option>
                    <option value="length">Length</option>
                </select>
            </div>
        )
    }
}