import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imgLink }) => (
    <div>
        <img src={imgLink} width="200" height="200" />
    </div>
);

export default Image;
Image.propTypes = {
    imgLink: PropTypes.string.isRequired,
};
