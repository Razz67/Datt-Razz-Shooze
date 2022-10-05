const React = require("react");

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/styles.css" />
				</head>
				<body>
                <img src="/images/datt_razz.png" />
					<nav>
						<a href={`/${this.props.productGroup}`}>{this.props.productGroup}</a>
					</nav>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
