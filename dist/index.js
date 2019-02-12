'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var AudioContext = React.createContext();

var UserContext = React.createContext();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function withAudio(WrappedComponent) {
  function WithAudio(props) {
    return React.createElement(
      AudioContext.Consumer,
      null,
      function (audio) {
        return React.createElement(WrappedComponent, _extends({ audio: audio }, props));
      }
    );
  }

  WithAudio.displayName = 'withAudio(' + (WrappedComponent.displayName || WrappedComponent.name) + ')';
  return WithAudio;
}

var audio = {
  play: function play(text, voice, gender, speakingRate, token) {
    return alert('this should play ' + text + ' with params [' + voice + ', ' + gender + ', ' + speakingRate + ', ' + token + ']');
  }
};

var user = {
  authenticated: true,
  info: { username: 'natacha', firstName: 'natacha', lastName: 'blanchet' },
  refreshToken: 'fake refresh token',
  token: 'fake token'
};

function withMocks(WrappedComponent) {
  function WithMocks(props) {
    return React.createElement(
      AudioContext.Provider,
      { value: audio },
      React.createElement(
        UserContext.Provider,
        { value: user },
        React.createElement(WrappedComponent, props)
      )
    );
  }

  WithMocks.displayName = 'withMocks(' + (WrappedComponent.displayName || WrappedComponent.name) + ')';
  return WithMocks;
}

function withUser(WrappedComponent) {
  function WithUser(props) {
    return React.createElement(
      UserContext.Consumer,
      null,
      function (user) {
        return React.createElement(WrappedComponent, _extends({ user: user }, props));
      }
    );
  }

  WithUser.displayName = 'withUser(' + (WrappedComponent.displayName || WrappedComponent.name) + ')';
  return WithUser;
}

exports.AudioContext = AudioContext;
exports.UserContext = UserContext;
exports.withAudio = withAudio;
exports.withUser = withUser;
exports.withMocks = withMocks;
//# sourceMappingURL=index.js.map
