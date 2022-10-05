const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { products } = this.props;

		return (
			<DefaultLayout>
				<h1>Datt Razz Hatts</h1>
                <img src="./public/images/datt_razz.png" />
				<ul>
					{products.map((products) => {
						const { _id, title, description, category, price, instock, image } = products;

						return (
							<li key={_id}>
								<img src={image} />
								{console.log(products)}
								<a href={`/products/${_id}`}>{title}</a>
								{description}
								{category}
								{price}
								{instock}
							</li>
						);
					})}
				</ul>

				<nav>
					<a href="/products/new">Add new product</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
