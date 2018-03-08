import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrendList from './components/TrendList/trendList';
import SearchBox from './components/SearchBox/searchBox';
import SearchResult from './components/SearchResult/searchResult';
import Favorites from './components/Favorites/favorites';
import { getGIFsByFilter, getTrend } from './helpers/api';
import { getGIFsFormat, getGIFsFormatTrend } from './helpers/beautifyContent';

const styles = {
  trendlist: {
    backgroundColor: 'lime',
    minHeight: '600px'
  },
  title: {
    margin: 0
  },
  header: {
    padding: '2%',
    backgroundColor: 'lightseagreen'
  },
  icon: {
    color: 'lime'
  },
  left: {
    textAlign: 'right'
  },
  right: {
    textAlign: 'left'
  },
  resultlist: {
    height: '900px',
    overflowY: 'auto'
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      trend: [],
      results: [],
      favorites: []
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  componentDidMount() {
    this.fetchTrend();
  }

  handleNewSearch() {
    this.fetchData();
  }

  handleOpen(e) {
    window.open(e.src, 'Image');
  }

  handleSearchText(e) {
    this.setState({ searchText: e.target.value });
  }

  handleToggleFavorite(e) {
    let clonedFavorites = this.state.favorites.slice();
    let clonedResults = this.state.results.slice();

    let indexResult = this.state.results.map(r => {
      return r.id;
    })
      .indexOf(e.id);

    clonedResults[indexResult].favorite = !this.state.results[indexResult].favorite;

    if (!clonedResults[indexResult].favorite) {
      let indexFavorite = clonedFavorites.map(r => {
        return r.id;
      })
        .indexOf(e.id);

      clonedFavorites = [
        ...clonedFavorites.slice(0, indexFavorite),
        ...clonedFavorites.slice(indexFavorite + 1)
      ];

    } else {
      clonedFavorites = [...clonedFavorites, e];
    }

    this.setState({
      results: clonedResults,
      favorites: clonedFavorites
    });
  }

  fetchData() {
    getGIFsByFilter(this.state.searchText)
      .then(result => {
        if (result.data) {
          let beautifiedContent = getGIFsFormat(result.data);

          let withFavorites = beautifiedContent.map(c => {
            let isFavorite = this.state.favorites.some(f => {
              return f.id == c.id;
            });

            c.favorite = isFavorite;

            return c;
          });

          this.setState({ results: withFavorites })
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchTrend() {
    getTrend()
      .then(result => {
        if (result.data) {
          let beautifiedContent = getGIFsFormatTrend(result.data);
          this.setState({ trend: beautifiedContent })
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div style={styles.header}>
          <div className="row">
            <div className="col-4" style={{
              padding: '0'
            }}>
              <Favorites
                favorites={this.state.favorites}
                open={this.handleOpen}
                removeFavorite={this.handleToggleFavorite} />
            </div>
            <div className="col-8">
              <div className="row">

                <div className="col-7" style={styles.left}>
                  <h1 style={styles.title}>GIF Search</h1>
                </div>

                <div className="col-4" style={styles.right}>
                  <i className={'far fa-smile fa-2x'} style={styles.icon}></i>
                </div>

              </div>
              <div className="row">
                <SearchBox
                  searchText={this.state.searchText}
                  onChange={this.handleSearchText}
                  onNewSearch={this.handleNewSearch} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3" style={styles.trendlist}>
            <TrendList
              trendList={this.state.trend}
              open={this.handleOpen} />
          </div>
          <div className="col-8" style={styles.resultlist}>
            <SearchResult
              results={this.state.results}
              addFavorite={this.handleToggleFavorite}
              open={this.handleOpen} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
