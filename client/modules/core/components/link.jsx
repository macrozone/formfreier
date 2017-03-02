
import styled from 'styled-components';
import { mapProps } from 'recompose';


const Link = mapProps(
  ({ external, isFile, email, href, ...props }) => ({
    ...((external || isFile || email) && {
      rel: 'noreferrer noopener',
      target: '_blank',
    }),
    href: email ? `mailto:${email}` : href,
    ...props,
  })
)(styled.a`
  color: ${p => p.theme.primary};
  &:hover {
    text-decoration: underline;
  }
`);

Link.propTypes = {
};

Link.defaultProps = {
};

Link.displayName = 'Link';

export default Link;
