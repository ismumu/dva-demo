import React from 'react';
import { connect } from 'dva';

function ErrorPage() {
    return (
        <h1>404</h1>
    );
}


export default connect()(ErrorPage);
