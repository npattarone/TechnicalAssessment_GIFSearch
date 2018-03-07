import React from 'react';
import PropTypes from 'prop-types';

function Favorites (props) {
    return (
        <div>
            <h2>Your favorite GIFs</h2>
            {
                props.favorites.map(fav => (
                    <div className="row">
                        <div className="col-2"><img src={fav.src} /></div>
                        <div className="col-10">{fav.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

Favorites.propTypes = {
    favorites: PropTypes.array.isRequired
};

export default Favorites;