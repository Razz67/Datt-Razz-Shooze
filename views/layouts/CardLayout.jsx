const React = require("react");

class CardLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/cardStyles.css" />
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
						crossorigin="anonymous"
					/>
					<script
						defer
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
						crossorigin="anonymous"
					></script>
				</head>
				<body>
					<div className="card-deck">
						<div className="card">
							<img className="card-img-top" src={this.props.image} alt="Card image" />
							<div class="card-body">
								<h5 className="card-title">{this.props.title}</h5>
								<p className="card-text">{this.props.description}</p>
								<p>Quantity in stock: {this.props.quantity}</p>
								<p>{`Product Price: $${this.props.price}`}</p>
								<p>{this.props.instock ? "It is in stock!" : "It is NOT in stock!"}</p>
								<button type="button" className="btn btn-primary">
									BUY
								</button>
							</div>
							<div className="card-footer">
								<a className="btn btn-danger" href={`/`}>
									Delete
								</a>
							</div>
						</div>
						<div className="card">
							<img className="card-img-top" src={this.props.image} alt="Card image" />
							<div className="card-body">
								<h5 className="card-title">{this.props.title}</h5>
								<p className="card-text">{this.props.description}</p>
								<p>Quantity in stock: {this.props.quantity}</p>
								<p>{`Product Price: $${this.props.price}`}</p>
								<p>{this.props.instock ? "It is in stock!" : "It is NOT in stock!"}</p>
								<button type="button" className="btn btn-primary">
									BUY
								</button>
							</div>
							<div className="card-footer">
								<a className="btn btn-danger" href={`/`}>
									Delete
								</a>
							</div>
						</div>
						<div className="card">
							<img className="card-img-top" src={this.props.image} alt="Card image" />
							<div className="card-body">
								<h5 className="card-title">{this.props.title}</h5>
								<p className="card-text">{this.props.description}</p>
								<p>Quantity in stock: {this.props.quantity}</p>
								<p>{`Product Price: $${this.props.price}`}</p>
								<p>{this.props.instock ? "It is in stock!" : "It is NOT in stock!"}</p>
								<button type="button" className="btn btn-primary">
									BUY
								</button>
							</div>
							<div className="card-footer">
								<a className="btn btn-danger" href={`/`}>
									Delete
								</a>
							</div>
						</div>
					</div>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = CardLayout;
