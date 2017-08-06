
export default ({ highlightEditable }) => {
  import React from 'react';

  // load components lazyly
  import lazyLoad from '/imports/modules/core/libs/lazy_load';

  const AutoForm = lazyLoad(() => import('uniforms-bootstrap4/AutoForm'));
  const Button = lazyLoad(() => import('/imports/modules/core/components/button'));


  return {
    highlightEditable,
    components: {
      Button,
      Form: AutoForm,
    },
  };
};
