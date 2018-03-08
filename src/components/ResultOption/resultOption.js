import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    image: {
        maxWidth: '100%',
        height: 'auto'
    },
    name: {
        textAlign: 'left'
    }
}

function defineColor(favorite) {

    let baseStyle = {
        border: 'none',
        backgroundColor: 'white'
    };

    baseStyle.color = favorite === true ? 'red' : 'gray';

    return baseStyle;
}

function ResultOption(props) {
    let isFavoriteOnIt = props.result.favorite != undefined;

    return (
        <div className="row" key={props.result.id} style={styles.result}>
            <div className="col-4">
                <img
                    src={props.result.src}
                    style={styles.image}
                    onClick={() => props.open(props.result)} />
            </div>
            <div className={isFavoriteOnIt ? "col-4" : "col-8"} style={styles.name}>
                {props.result.name}
            </div>
            {
                isFavoriteOnIt ?
                    <div className="col-2">
                        <button
                            onClick={() => props.addFavorite(props.result)}
                            style={defineColor(props.result.favorite)} title="It's my favorite!">

                            <i className={'fa fa-heart'}></i>

                        </button>
                    </div> :
                    null
            }
        </div>
    )
}

ResultOption.propTypes = {
    result: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        favorite: PropTypes.bool
    }),
    open: PropTypes.func,
    addFavorite: PropTypes.func
};

export default ResultOption;