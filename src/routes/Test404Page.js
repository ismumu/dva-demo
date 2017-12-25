import React from 'react';
import { connect } from 'dva';

function TestPage() {
    return (
        <h1>404</h1>
    );
}

TestPage.propTypes = {
};

export default connect()(TestPage);
