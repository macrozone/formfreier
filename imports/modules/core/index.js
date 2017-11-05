import actions from './actions';
import routes from './routes.jsx';

/* global document, window*/

const onCrtlPressed = (callback) => {
  document.onkeydown = function (evt) {
    if (evt.ctrlKey) {
      callback();
    }
  };
};

export default {
  routes,
  actions,
  load({ Meteor }) {
    let keysPressed = 0;
    const KEYS_NEEDED = 3;
    let timeoutHandle;

    const startClearTimeout = () => {
      window.clearTimeout(timeoutHandle);
      timeoutHandle = window.setTimeout(() => {
        keysPressed = 0;
      }, 1000);
    };
    onCrtlPressed(() => {
      startClearTimeout();
      keysPressed += 1;
      if (keysPressed >= KEYS_NEEDED) {
        keysPressed = 0;
        if (Meteor.userId()) {
          Meteor.logout();
        } else {
          Meteor.loginWithGoogle();
        }
      }
    });
  },
};
