const React = require("react");

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/cardStyles.css" />
				</head>
				<body>
					
						
					<div className="bg"></div>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
