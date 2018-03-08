import React from 'react';
import PropTypes from 'prop-types';

function Favorites(props) {

    return (
        <div style={{ textAlign: 'left' }}>
            <h2 style={{ margin: '0', marginBottom: '5%' }}>You loved them!</h2>
            <div style={{
              overflowY: 'auto',
              maxHeight: '100px',
              padding: '0'
            }}>
            {
                props.favorites.map(fav => (
                    <div key={fav.id} className="row" >
                        <div className="col-2">
                            <img src={fav.src} style={{ width: '100%' }}
                                onClick={() => props.open(fav)} />
                        </div>
                        <div className="col-4">{fav.name}</div>
                        <div className="col-2">
                            <button
                                onClick={() => props.removeFavorite(fav)}
                                style={{ border: 'none', backgroundColor: 'lightseagreen' }} title="It's my favorite!">

                                <i className={'fa fa-times'}></i>

                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

Favorites.propTypes = {
    favorites: PropTypes.array.isRequired,
    open: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired
};

export default Favorites;