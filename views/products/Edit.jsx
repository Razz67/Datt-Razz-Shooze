const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Edit extends React.Component {
	render() {
        const {_id, title, description, category, price, instock,image} = this.props.products;

		return (
			<DefaultLayout title={`Edit ${title}`} productGroup="products">

				<h1>{title}</h1>


				<form action={`/products/${_id}?_method=PUT`} method="POST">

					Image:{" "}<input type="text" id="image" name="image" defaultValue={image} />
					<br /> <br />

					Description:{" "}<input type="textarea" id="description" name="description"
						defaultValue={description} />
						<br /><br />

					Price:{" "}<input type="number" id="price" name="price" defaultValue={price} />
					<br /><br />
					
                    Stock:{" "}<input type="checkbox" id="instock" name="instock" defaultChecked={instock} />
					<br /><br />


					<a href={`/products/`}>Back</a>
					<br /><br />
					
                    <button type="submit" value="Edit">Edit</button>
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = Edit;
