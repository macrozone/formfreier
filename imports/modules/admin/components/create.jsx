import React from 'react';
import { T } from '@panter/manul-i18n';
import AutoForm from 'uniforms-bootstrap4/AutoForm';


const Create = ({ collectionName, schema, create, title, gotoList, onSuccess }) =>
   (
     <div >
       <h2>Create {title}</h2>
       <AutoForm
         schema={schema.omit('_id')}
         t={collectionName}
         onSubmit={doc => create(collectionName, doc, onSuccess)}
         submitLabel={<T>autoform.defaults.save</T>}
       />
       <button onClick={() => gotoList(collectionName)}>Back to list</button>
     </div>
  );

Create.propTypes = {

};

Create.defaultProps = {
};

Create.displayName = 'Admin.Create';

export default Create;
