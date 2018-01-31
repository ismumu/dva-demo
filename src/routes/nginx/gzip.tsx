import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';


const source =
`
# Nginx开启gzip

配置如下

\`\`\`js
gzip  on;
gzip_min_length 1k;
gzip_buffers 4 16k;
gzip_http_version 1.0;
gzip_comp_level 5;
gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css;
gzip_disable "MSIE [1-6]\.";
gzip_vary on;
\`\`\`

`;

export default class extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return <BlogTemplate source={source} />;
	}

}
