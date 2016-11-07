class ShoppingList extends React.Component {
	render(){
		return (
			<div className="shopping-list">
				<h1> Shopping List for {this.props.name}</h1>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			);
	}
}

// Example usage: <ShoppingList name="Fred" />