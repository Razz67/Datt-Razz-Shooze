const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
	render() {
		return (

			<DefaultLayout className="flex" title="New Product" productGroup="products">
				<h1>Create New Product</h1>

				<form action="/products" method="POST">

				<input type="text" name="image" placeholder="new image url" />
				<br /><br />

					Title: <input type="text" name="title" placeholder="title" />
					<br /><br />

					Description: <input type="text" name="description" placeholder="description" />
					<br /><br />

					stock: {this.props.instock}
					<br /><br />

					Price: <input type="number" name="price" placeholder="price" />
					<br /><br />

					
                    <button type="submit" name="" value="Create Product">Create</button>
				</form>

			</DefaultLayout>
		);
	}
}

module.exports = New;

