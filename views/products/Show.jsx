const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { _id, title, description, category, price, image, instock } = this.props.
			product;

		return (
			<DefaultLayout title={`${title} details`} productGroup="products">
				<h1>{title}</h1>
                <h3>{category}</h3>
                <img src={image} />
				<p>{`Product Description: ${description}`}</p> 
                <p>{`Product Price: ${price}.`}</p>
				<p>
					{instock ? "It is in stock!" : "It is NOT in stock!"}
				</p>

                <form action={`/products/${_id}?_method=DELETE`} method="POST">

                    <input type="submit" value="Delete" />  
                </form>
                <nav>
                    <a href={`/products/${_id}/edit`}>Back</a>
                </nav>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
