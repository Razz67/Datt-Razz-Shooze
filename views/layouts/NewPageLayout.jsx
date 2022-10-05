const React = require("react");

class NewPageLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/cardStyles.css" />
				</head>
				<body>
					<div className="wrapper">
					</div>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = NewPageLayout;
