import React, { Component } from 'react'
import TrailList from './TrailList'
import Picture from './Picture'
import SearchBar from './SearchBar'
import TrailDetail from './TrailDetail'
import SortTrail from './SortTrail'
import TrailForm from './TrailForm'
const TrailURL = "http://localhost:3000/trails"
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };


export default class Home extends Component {

state = {
      trails: [],
      searchTerm: '',
      sortBy: ''
  }

searchHandler = (event) =>{
    this.setState({
    searchTerm: event.target.value
    })
  }

sortOption = (event) => {
    this.setState({
    sortBy: event.target.value
    })
  }

filterTrail = (type) => {
    let sorted = []
    if (type === 'all') {
      sorted = [...this.state.trails]
    } else if (type === 'name') {
      sorted = [...this.state.trails].sort((a, b) => a.name > b.name ? 1 : -1)
    } else if (type === 'description') {
      sorted = [...this.state.trails].sort((a, b) => a.description > b.description ? 1 : -1)
    } else if (type === 'length') {
       sorted = [...this.state.trails].sort((a, b) => a.length > b.length ? 1 : -1)
      } 
      else if (type === 'stars') {
        sorted = [...this.state.trails].sort((a, b) => a.stars > b.stars ? 1 : -1)
      } 
    return sorted
  }

  deleteHandler = (id) => {
    fetch(TrailURL + "/" + id, {
      method: "DELETE",
      headers: headers,
    })
      .then(
        this.setState({
          trails: this.state.trails.filter((trail) =>
            trail.id === id ? null : trail
          ),
        })
      )
      .catch((err) => console.log(err));
  };

componentDidMount(){
      fetch('http://localhost:3000/trails')
      .then(resp => resp.json())
      .then(trails => {
              this.setState({trails})
      }

      )
  }
  
render() {
// console.log('hello',this.props)


let FilteredTrail = this.state.trails.filter(trail => trail.name.toLowerCase().includes (this.state.searchTerm.toLowerCase()))
let sorted = this.filterTrail(this.state.sortBy)
return (
    <div className = "home-page">
        <Picture />
        <div className = "search-sort">
        <SearchBar searchHandler = {this.searchHandler} />
        </div>
        <div className = "sort-search">
        <SortTrail type={this.state.sortBy} handleChange={this.sortOption}/>
        {this.state.sortBy
        ? <TrailList className = "trails-page" trails={sorted} deleteHandler={this.deleteHandler} history = {this.props.history}/>
        : <TrailList className = "trails-page" trails={FilteredTrail} deleteHandler={this.deleteHandler} history = {this.props.history}/>
        }
        </div>

        {/* <TrailForm onChange = {this.handleChanged} onSubmit = {this.handleSubmit} /> */}
         
    
        
    </div>
        )
    }
}