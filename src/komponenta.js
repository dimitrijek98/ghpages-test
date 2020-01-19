import React, {Component} from 'react';

class Komponenta extends Component {
    constructor(props) {
        super(props);
        this.state= {
            res:null
        }
    }

    componentDidMount() {
        fetch(`https://dimitrijek98.github.io/ghpages-test/radnici/1234`)
            .then(res => {
                this.setState({res})
            })
    }

    render() {
        return (
            <div>
                {this.state.res &&
                    <h1>{this.state.res.id}</h1>
                }

            </div>
        );
    }
}

export default Komponenta;
