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
					<div className="bg wrapper">
				<nav>
					<ul>
						<li>
							<a href="/products/new">new</a>
						</li>
						<li>
							<a href={"products/edit"}>Edit</a>
						</li>
					</ul>
				</nav>

					</div>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
