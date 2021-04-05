import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';

const Link = ({
  children = <></>,
  to = '',
  activeClassName = '',
  partiallyActive = false,
  ...other
}) => {
  if (process.env.GATSBY_PREVIEW_MODE === 'true') {
    let previewPath = to;
    if (previewPath && previewPath !== '/' && to.charAt(0) === '/') {
      previewPath = to.substring(1);
    }
    return (
      <a
        href={previewPath}
        {...other}
        onClick={(event) => {
          event.preventDefault();
          navigate(`?path=${previewPath}`);
        }}
      >
        {children}
      </a>
    );
  }
  if (!to) {
    return <></>;
  }
  let path = to;
  if (to.charAt(0) !== '/') {
    path = `/${to}`;
  }
  return (
    <GatsbyLink
      to={path}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...other}
    >
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.any]),
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.bool,
};

export default Link;
