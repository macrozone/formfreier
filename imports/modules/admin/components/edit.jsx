import React from 'react';
import { T } from '@panter/manul-i18n';
import AutoForm from 'uniforms-antd/AutoForm';


const DocumentEdit = ({ doc, collectionName, schema, title, destroy, gotoList, update, Alerts, preFormContent, onSuccess, onDestroySuccess }) =>
   (
     <div>
       <h2>Edit {title}</h2>
       {preFormContent}
       <AutoForm
         model={doc}
         schema={schema}
         t={collectionName}
         onSubmit={changedDoc => update(collectionName, changedDoc, onSuccess)}
         submitLabel={<T>autoform.defaults.update</T>}
         additionalActions={[
           <button
             onClick={() => gotoList(collectionName)}
           >
             Back to list
           </button>,
           <button
             black onClick={() => (
             Alerts.confirm({
               message: <T>admin.destroy.confirm.message</T>,
               onConfirm: () => destroy(collectionName, doc._id, onDestroySuccess),
             })

           )}
           >Destroy</button>,
         ]}
       />

     </div>
  );

DocumentEdit.propTypes = {
};

DocumentEdit.defaultProps = {
};

DocumentEdit.displayName = 'DocumentEdit';

export default DocumentEdit;
