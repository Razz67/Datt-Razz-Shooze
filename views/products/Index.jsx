const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
        const products = this.props.products;
        return (
            <DefaultLayout>
				<h1>Products</h1>
				<ul>
					{products.map((product) => {
            const { _id, title, description, category, price, date_added, image } = product;
						return (
							<li key={_id}>
								<img src={image} />
								{console.log(product)}
								<a href={`/products/${_id}`}>{title}</a>
								{description}
								{category}
								{price}
								{date_added}
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


/* Products Schema

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    } */