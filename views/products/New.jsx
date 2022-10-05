const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
	render() {
		return (

			<DefaultLayout title="New Product" productGroup="products">
				<h1>New Product</h1>

				<form action="/products" method="POST">

				<input type="text" name="image" placeholder="image" />

					Title: <input type="text" name="title" placeholder="title" />

					Description: <input type="text" name="description" placeholder="description" />

					Category: <input type="text" name="category" placeholder="category" />

					Price: <input type="number" name="price" placeholder="price" />
					
                    <input type="submit" name="" value="Create Product" />
				</form>

			</DefaultLayout>
		);
	}
}

module.exports = New;

