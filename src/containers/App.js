import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../stylesheet/style.css'

class App extends Component {
    render() {
        return <div>Первая заметка {this.props.todo}</div>
    }
}

function mapStateProps (state) {
    return {
        todo: state.todo
    }
}

export default connect(mapStateProps)(App)