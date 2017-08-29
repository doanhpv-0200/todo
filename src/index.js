import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Qs from 'qs';

window.axios = axios.create({
    paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'brackets'}),
});

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import App from './app';

render(<App />, document.getElementById('app'));
