
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# ESLint 的使用

ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

首先，安装 ESLint。

\`\`\`js
$ npm i -g eslint
\`\`\`
然后，安装 Airbnb 语法规则，以及 import、a11y、react 插件。
\`\`\`js
$ npm i -g eslint-config-airbnb
$ npm i -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
\`\`\`
最后，在项目的根目录下新建一个.eslintrc文件，配置 ESLint。
\`\`\`js
{
  "extends": "eslint-config-airbnb"
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
