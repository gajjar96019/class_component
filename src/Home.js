import React from "react";

class Home extends React.Component {
    constructor() {
        super();
        console.log('Hello');
        this.state = {
            name: 'cdmi',
            email: 'cdmi@gmail.com'
        }
    }

    getdata = () => {
        this.setState({ name: 'CDMI' })
    }

    render() {
        return (
            <>
                <h1>Home Component</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>

                <button onClick={this.getdata}>Click Here</button>
            </>
        )
    }
}

export default Home;
