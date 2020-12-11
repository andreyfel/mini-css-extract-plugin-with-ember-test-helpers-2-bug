import EmberRouter from '@ember/routing/router';
import config from 'mini-css-extract-plugin-with-ember-test-helpers-2-bug/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
});
