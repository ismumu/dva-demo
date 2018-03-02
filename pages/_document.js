import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {

	static getInitialProps({ renderPage }) {


		const { html, head, errorHtml, chunks } = renderPage()
		const styles = flush();

		return { html, head, errorHtml, chunks, styles }
	}

	render() {

		// const { nextStyle } = this.props;
		// console.log(this.styles)

		return (
			<html>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="shortcut icon" href="./favicon.ico" />
					<title>ismumu's home</title>
					<link rel="stylesheet" href="/_next/static/style.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
