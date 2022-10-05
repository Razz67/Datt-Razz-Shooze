const React = require("react");

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/cardStyles.css" />
					<script src="/js/cards.js"></script>
				</head>
				<body>
					<div className="shop-card">
						<div className="title">{this.props.title}</div>
						<div className="desc">{this.props.description}</div>
						<div className="price">{this.props.price}</div>
						<div className="image">{this.props.image}</div>
						<div className="instock">{this.props.instock}</div>
					</div>
						
					<div className="bg"></div>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
