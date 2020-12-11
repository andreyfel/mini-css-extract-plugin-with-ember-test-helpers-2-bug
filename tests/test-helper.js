import Application from 'mini-css-extract-plugin-with-ember-test-helpers-2-bug/app';
import config from 'mini-css-extract-plugin-with-ember-test-helpers-2-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
