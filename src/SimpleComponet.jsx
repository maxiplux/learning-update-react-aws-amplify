import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const SimpleComponent = ({ mensaje }) => (
  <>
    <h1>
      Soy un componetico y me enviaron
      {mensaje}
    </h1>
  </>
);
SimpleComponent.propTypes = {
    mensaje: PropTypes.string.isRequired
};

SimpleComponent.defaultProps = {
    mensaje: `toca definir un mensaje por defecto`
};
export default SimpleComponent;
