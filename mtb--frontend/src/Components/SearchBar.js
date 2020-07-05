import React from 'react'

const SearchBar = (props) => {
    const {searchHandler,searchTerm,handleSortBy}= props
    return (
    //     <div className = "search">
    //     <div className="input-group md-form form-sm form-1 pl-0">
    //         <div className="input-group-prepend">
    //             <span className="input-group-text purple lighten-3" id="basic-text1"><i class="fas fa-search text-white"
    //                 aria-hidden="true"></i></span>
    //     </div>
    //     <input className ="form-control my-0 py-1" type = "text" placeholder = "Enter trail name" onChange = {searchHandler} value = {searchTerm} aria-label="Search"/> 
    //     </div>
    //    </div>
    <div className="container">
    <br/>
	<div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                   
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" placeholder = "Enter trail name" onChange = {searchHandler} value = {searchTerm} /> 
                                    </div>
                                    
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                   
                                </div>
                            </form>
                        </div>
                       
                    </div>
</div>
    )
}
export default SearchBar

