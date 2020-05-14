import React, { Component } from 'react';
// import {Content, Footer, Header, Container } from '../components/Layout';

export class Search extends Component {

    onChange = e => {

    }
    
    render () {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
            <div className="container">
                <h1 className="display-4 mb-3">
                    <i className="fa fa-search" /> Search for a book, article, event ...
                </h1>
                <form id="searchForm">
                    <input
                    type="text"
                    className="form-control"
                    name="searchText"
                    placeholder="Search Books, Articles ..."
                    onChange={this.onChange}
                    />
                    <button type="submit" className="btn btn-primary btn-bg mt-3">
                        Search
                    </button>
                </form>
            </div>
            </div>
        )
    }
}

export default Search;