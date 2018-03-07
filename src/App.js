import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrendList from './components/TrendList/trendList';
import SearchBox from './components/SearchBox/searchBox';
import SearchResult from './components/SearchResult/searchResult';
import { getGIFsByFilter, getTrend } from './helpers/api';
import { getGIFsFormat, getGIFsFormatTrend } from './helpers/beautifyContent';

const styles = {
  trendlist: {
    backgroundColor: 'lime'
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
  }

  componentDidMount() {
    this.fetchTrend();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchText !== this.props.searchText) {
      this.props.dispatch(this.fetchData(nextProps.searchText));
    }
  }

  handleNewSearch(searchText) {
    this.setState(prevState => {
      return {
        ...searchText
      }
    });
  }

  handleNewFavorite(id) {
    this.setState(prevState => {
      return {
        ...prevState.favorites, id
      }
    });
  }

  fetchData(filter) {
    getGIFsByFilter(filter)
      .then(result => {
        if (result.data) {
          let beautifyContent = getGIFsFormat(result);

          this.setState({ results: beautifyContent })
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
          let beautifyContent = getGIFsFormatTrend(result.data);
          this.setState({ trend: beautifyContent })
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

            <div className="col-7" style={styles.left}>
              <h1 style={styles.title}>GIF Search</h1>
            </div>

            <div className="col-4" style={styles.right}>
              <i className={'far fa-smile fa-2x'} style={styles.icon}></i>
            </div>

          </div>
          <div className="row">
            <SearchBox onNewSearch={this.handleNewSearch.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-3" style={styles.trendlist}>
            <TrendList trendList={this.state.trend} />
          </div>
          <div className="col-8">
            <SearchResult results={this.state.results}
              addFavorite={this.handleNewFavorite.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
