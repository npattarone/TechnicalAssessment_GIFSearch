import React from 'react';
import PropTypes from 'prop-types';
import ResultOption from '../ResultOption/resultOption';

function TrendList(props) {
    return (
        <div>
            <h2>Top 10 trend list!</h2>
            <div>
                {
                    props.trendList.map(gif => (
                        <ResultOption
                            key={gif.id}
                            result={gif}
                            open={props.open} />
                    ))
                }
            </div>
        </div>
    )
};

TrendList.propTypes = {
    trendList: PropTypes.array.isRequired
};

export default TrendList;