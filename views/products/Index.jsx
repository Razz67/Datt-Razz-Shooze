const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { products } = this.props;

		return (
			<DefaultLayout title="Index Page">
			
					<h1 className="header">Datt Razz Shoozz</h1>
					{products.map((products) => {
						const { _id, title, description, price, instock, quantity, image } = products;

						return (
							<div className="wrapper" key={_id}>
								<img src={image} />
								<a href={`/products/${_id}/edit`}>Edit</a>;
								<div className="desc">{description}</div>
								<div className="price">${price.toFixed(2)}</div>
								<div className="quantity">Quantity In Stock: {quantity}</div>
								<div className="instock">{instock}</div>
							</div>
						);
					})}

				<button>
					<a href="/products/new">Create New Shoe</a>
				</button>
			</DefaultLayout>
		);
	}
}
module.exports = Index;
								

											
