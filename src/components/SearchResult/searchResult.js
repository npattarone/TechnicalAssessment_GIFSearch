import React from 'react';
import PropTypes from 'prop-types';
import ResultOption from '../ResultOption/resultOption';

function SearchResult(props) {
    return (
        <div>
            <h2>Results</h2>
            {
                props.results.map(r => (
                    <ResultOption
                        key={r.id}
                        result={r}
                        addFavorite={props.addFavorite} />
                ))
            }
        </div>
    )
}

SearchResult.propTypes = {
    results: PropTypes.array.isRequired,
    addFavorite: PropTypes.func.isRequired
};

export default SearchResult;