import React from 'react';
import PropTypes from 'prop-types';
import ResultOption from '../ResultOption/resultOption';

function SearchResult(props) {
    return (
        <div>
            {
                props.results.length ?
                    <h2>Results</h2> :
                    null
            }
            <div>
                {
                    props.results.map(gif => (
                        <ResultOption
                            key={gif.id}
                            result={gif}
                            addFavorite={props.addFavorite}
                            open={props.open} />
                    ))
                }
            </div>
        </div>
    )
}

SearchResult.propTypes = {
    results: PropTypes.array.isRequired,
    addFavorite: PropTypes.func.isRequired
};

export default SearchResult;