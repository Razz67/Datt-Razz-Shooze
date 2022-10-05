const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { products } = this.props;

		return (
			<DefaultLayout>
					{products.map((products) => {
						const { _id, title, description, price, instock, image } = products;

						return (
							<div className="wrapper" key={_id}>
								<a className="title" href={`/products/${_id}`}>{title}</a>
								<div className="desc">{description}</div>
								<div className="price">${price.toFixed(2)}</div>
								<img src={image} />
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
{/* <li key={_id}>
								{console.log(products)}
								<a href={`/products/${_id}`}>{title}</a>
								<img src={image} />
								{description}
								{instock}
								{price}
							</li> */}

											{/* <h1 className="header">Datt Razz Shoozz</h1> */}
