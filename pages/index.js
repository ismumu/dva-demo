

import Link from 'next/link';
// import dva from 'dva';
import dva, { connect } from 'dva';


export default function () {
    const app = dva();
    app.router(() => {
        return (
            <div>
                Hi,
                <Link href="/demo/transformationNumber">
                    <a>Go to /demo/transformationNumber</a>
                </Link>
            </div>
        );
    });

    const Component = app.start();


    return (
        <Component />
    );
}
