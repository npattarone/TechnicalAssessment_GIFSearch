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
        width: '80%'
    },
    icon: {
        color: 'black',
        marginLeft: '50%'
    },
    button: {
        border: 'none',
        backgroundColor: 'lightseagreen'
    },
    buttonPlace: {
        padding: '5px',
        paddingLeft: '0px'
    }
}

function SearchBox(props) {
    return (
        <div className="row">
            <div className="col-6" style={styles.left}>What you're looking for?</div>
            <div className="col-4" style={styles.right}>
                <input
                    type="text"
                    value={props.searchText}
                    onChange={props.onChange}
                    onKeyPress={e => {
                        if (e.key == 'Enter') {
                            props.onNewSearch()
                        }
                    }}
                    style={styles.input} />
                <button onClick={props.onNewSearch} style={styles.button} title="Go!">
                    <i className={'fa fa-search fa-lg'} style={styles.icon}></i>
                </button>
            </div>
        </div>
    )
}

SearchBox.propTypes = {
    onNewSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchBox;