const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Edit extends React.Component {
	render() {
        const {_id, title, description, category, price, image} = products;
									

		return (
			<DefaultLayout title={`Edit ${title}`} productGroup="products">

				<h1>{title}</h1>

				<form action={`/logs/${_id}?_method=PUT`} method="POST">

					Category:{" "}<input type="text" id="category" name="category"
						defaultValue={category} />

					Image:{" "}<input type="text" id="image" name="image" defaultValue={image} />

					Description:{" "}<input type="textarea" id="description" name="description"
						defaultValue={description} />

					Price:{" "}<input type="number" id="price" name="price" defaultValue={price} />
					
                    <input type="checkbox" id="instock" name="instock" defaultChecked={instock} />
					
                    <input type="submit" value="Edit" />
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = Edit;
