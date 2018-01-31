
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';

//
let b = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
let a = b.test('q@qq.vi.com')

console.log(a);


const source =
`
# 常用的正则表达式

\`\`\`js

// 匹配允许0的正整数，但是不允许01， 001格式
/^([1-9]\d*|[0]{1,1})$/

// 邮箱
/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/

// 座机号码
/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/

// 手机号码
/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/

// 图片格式
/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/

// 身份证号码验证
/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/

// 验证金钱格式，x or x.x or x.xx ,x为数字
/^[0-9]+([.][0-9]{0,2}){0,1}$/

// 1-15位的纯数字
/^\d{1,15}$/,

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
