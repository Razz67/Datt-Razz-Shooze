const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { products } = this.props;

		return (
			<DefaultLayout>
				<h1>Datt Razz Shoozz</h1>
				<ul>
					{products.map((products) => {
						const { _id, title, description, price, instock, image } = products;

						return (
							<li key={_id}>
								{console.log(products)}
								<a href={`/products/${_id}`}>{title}</a>
								{description}
								<img src={image} />
								{price}
								{instock}
							</li>
						);
					})}
				</ul>

				<button>
					<a href="/products/new">Create New Shoe</a>
				</button>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
