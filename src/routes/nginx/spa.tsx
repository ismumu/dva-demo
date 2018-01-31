import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';


const source =
`
### Nginx配置如下

\`\`\`js
server {
	listen  80;
	server_name ismumu.com;
	location / {
		try_files $uri $uri/ /index.html;
		root /www/dva-demo/dist;
	}
}
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
