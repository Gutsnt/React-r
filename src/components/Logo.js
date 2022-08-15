import { Component } from "react";
const styles = {
	logo: {
		fontWight: '700',
		fontSize: '2rem',
	}
}
class Logo extends Component {
	render() {
		return(
			<div style={styles.logo}>
				<h1>Shop</h1>
			</div>
		)
	}
}

export default Logo