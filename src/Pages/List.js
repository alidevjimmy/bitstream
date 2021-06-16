import React,{ Component } from "react";
import {useParams} from 'react-router-dom'

class List extends Component {
    render() {
        let {search} = this.props.match.params
        return (
            <div>
                <h1>{search}</h1>
            </div>
        )
    }
}

export default List