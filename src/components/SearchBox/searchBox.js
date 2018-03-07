import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    left: {
        textAlign: 'right'
    },
    right: {
        textAlign: 'left'
    },
    input: {
        width: '100%'
    }
}

function SearchBox(props) {
    return (
        <div className="row">
            <div className="col-6" style={styles.left}>What you're looking for?</div>
            <div className="col-3" style={styles.right}>
                <input onChange={props.onNewSearch} style={styles.input} />
            </div>
        </div>
    )
}

SearchBox.propTypes = {
    onNewSearch: PropTypes.func.isRequired
};

export default SearchBox;