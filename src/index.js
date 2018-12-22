import React from 'react';
import ReactDOM from 'react-dom';

const App = document.write("react boilerplate");


ReactDOM.render(App, document.getElementById('app'));

//Hot reloading
if (module.hot) {
    module.hot.accept()
}