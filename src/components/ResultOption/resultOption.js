import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    favorite: {
        color: 'red'
    },
    noFavorite: {
        color: 'gray'
    },
    image: {
        maxWidth: '100%',
        height: 'auto'
    },
    name: {
        textAlign: 'left'
    }
}

function ResultOption(props) {
    return (
        <div className="row" key={props.result.id} style={styles.result}>
            <div className="col-4">
                <img src={props.result.src} style={styles.image} />
            </div>
            <div className="col-8" style={styles.name}>
                {props.result.name}
            </div>
            {
                props.result.favorite ?
                    <div className="col-2">
                        <i
                            onClick={() => props.addFavorite(props.result.id)}
                            className={'fa fa-heart'}
                            style={props.result.favorite ? styles.favorite : styles.noFavorite}>
                        </i>
                    </div> :
                    null
            }
        </div>
    )
}

ResultOption.propTypes = {
    result: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        favorite: PropTypes.bool
    }),
    addFavorite: PropTypes.func.isRequired
};

export default ResultOption;