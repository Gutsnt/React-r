import { Component } from "react";

const styles = {
	navbar: {
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		height:'100px',
	}
}
class Navbar extends Component {
	render() {
		return(
			<nav style={styles.navbar}>
			<p>Logos hola</p>
			<p>Carro</p>
			</nav>
		)
	}
}

export default Navbar