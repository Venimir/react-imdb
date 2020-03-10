import React, {Component} from "react";
class Home extends Component {

    render() {
        return <div id="filters">
                <div className="row">
                    <div className="col-md-6 text-right">
                        <button type="button" id="clear-filters" className="btn btn-warning">Clear Filters</button>
                    </div>
                    <div className="col-md-6 text-left">
                        <button type="button" className="btn btn-primary " id="search-button"><i className="fa fa-search mr-1"></i>Search</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <div id="movie-filters">
                                <label for="movieTitle">Movie Title</label>
                                <input type="text" className="form-control" id="movieTitle" placeholder="Enter Movie Title" value="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelect01">Sort by Year</label>
                            </div>
                            <select className="filter-year custom-select" id="inputGroupSelect01"></select>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelect03">Sort by Raiting</label>
                            </div>
                            <select className="filter-imdbRaiting custom-select" id="inputGroupSelect03"></select>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <select className="selectpicker" title="Sort by Genres" multiple data-live-search="true">

                        </select>
                    </div>
                </div>
            </div>
    }
}

export default Home;