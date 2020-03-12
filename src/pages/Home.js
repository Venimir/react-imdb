import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";


class SearchMovie extends Component {

    constructor(props){
        super(props);
        this.state = {
            primary_release_year: new Date().getFullYear(),
            query: '',
        }
    }

    componentDidMount(){
        this.discoverMovies();
    }

    discoverMovies = () => {
        this.props.getMdDiscoverMovies({
            primary_release_year: this.state.primary_release_year,
            page: this.props.currentPage
        })
    }

    searchMovieByTitle = () => {
        this.props.getMdSearchMovies({
            query: this.state.query,
            page: this.props.currentPage
        })
    }

    getMovieList = () => {
        const movieList = 
            this.props.movieDatabaseMovies.map( movie => {
            return <SingleMovie 
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                overview={movie.overview}
                id={movie.id}
            />        
        });
        return movieList
    }

    getYears = () => {
        const availableYears = [];
        for(let i = new Date().getFullYear(); i > 1999; i--){
            availableYears.push(i);
        }
        return availableYears;
    }


    getAvailableReleaseYears = () => {

        const availableYearsOptions = this.getYears().map(year => {
            return <option 
            key={year} 
            value={year}>
                {year}
            </option>
        })
        return availableYearsOptions
    }

    releaseYearOnChange = e => {
        this.setState({
            primary_release_year: e.target.value 
        }, () => {
            this.discoverMovies();
        })
    }


    setSelectedPage = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        if (this.state.query !== '') {
            this.searchMovieByTitle();
        } else {
            this.discoverMovies();
        }
        
    }
    getPages = () => {
        const pages = [];
        for(let i = 1; i < this.props.totalPages; i++){
            pages.push(
                <li key={i} className="page-item">
                <a className="page-link"
                    onClick={() => this.setSelectedPage(i)} 
                    href="#">
                    {i}
                </a>
            </li>);
        }
        return pages
    }


    handleChange = e => {
        this.setState({
            query: e.target.value
        });
    }

    handleKeyPress = e => {
        if(e.key === 'Enter'){
            this.searchMovieByTitle();
        }
    }

    clearValue = e => {
        this.setState({query: ''});
    }

    render() {
        return <>
            <div className="row mb-5">
                <div className="col">
                    <ul className="pagination">
                        {this.getPages()}
                    </ul>
                </div>
            </div>
            <div className="row">
                    <div className="col-md-6 text-right">
                        <button type="button" id="clear-filters" onClick={this.clearValue} className="btn btn-warning">Clear Filters</button>
                    </div>
                    <div className="col-md-6 text-left">
                        <button type="button" className="btn btn-primary " id="search-button" onClick={this.searchMovieByTitle}>
                            <i className="fa fa-search mr-1"></i>Search</button>
                    </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-2">
                    <div id="movie-filters">
                            <label htmlFor="movieTitle">Movie Title</label>
                            <input 
                            onKeyPress={this.handleKeyPress} 
                            onChange={this.handleChange}
                            type="text" 
                            className="form-control" 
                            id="movieTitle" 
                            placeholder="Enter Movie Title" 
                            value={this.state.query} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text"
                            htmlFor="release-year">Release Year</label>
                        </div>
                        <select
                            onChange={this.releaseYearOnChange}
                            value={this.state.primary_release_year}
                            className="custom-select" 
                            id="release-year">
                            {this.getAvailableReleaseYears()}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                {this.getMovieList()}
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return {
        movieDatabaseMovies: state.movieDatabaseMovies,
        currentPage: state.currentPage,
        totalPages: state.totalPages
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMdMovies: actions.setMdMovies,
        setCurrentPage: actions.setCurrentPage,
        getMdDiscoverMovies: actions.getMdDiscoverMovies,
        getMdSearchMovies: actions.getMdSearchMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(SearchMovie);