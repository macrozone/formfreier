import { noop } from 'lodash/fp';

export default {
  save({ Methods, Alerts }, { contentId, editor, locale }, callback = noop) {
    Methods.cm.upsert.call({ contentId, value: editor, locale },
      Alerts.handleCallback('cm.update', callback)
    );
  },
};
