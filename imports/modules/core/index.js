import actions from './actions';
import routes from './routes.jsx';

  /* global document, window*/


const onEscPressed = (callback) => {
  document.onkeydown = function (evt) {
    /* eslint no-param-reassign: 0*/
    evt = evt || window.event;
    let isEscape = false;
    if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
    } else {
      isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
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
    onEscPressed(() => {
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
