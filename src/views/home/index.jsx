import React from 'react';
import Banner from '../../components/Banner';
import CategoryView from '../../components/CategoryView';
import {categoryListRequest} from '../../store/actions';

import { connect } from 'react-redux';

const data = [
{
    title: "IND vs PAK",
    startTime: new Date("2017-03-21T00:00:00Z"),
    endTime: new Date("2017-03-21T01:00:00Z"),
    link: '/player/Sky-Sports-1'
},
{
    title: "IND vs AUS",
    startTime: new Date("2017-03-21T21:00:00Z"),
    endTime: new Date("2017-03-21T22:00:00Z"),
    link: '/player/Sky-Sports-1'
},
{
    title: "IND vs NZ",
    startTime: new Date("2017-03-21T21:00:00Z"),
    endTime: new Date("2017-03-21T22:00:00Z"),
    link: '/player/Sky-Sports-1'
},
{
    title: "IND vs PAK",
    startTime: new Date("2017-03-19T21:00:00Z"),
    endTime: new Date("2017-03-19T22:00:00Z"),
    link: '/player/Sky-Sports-1'
}
]

var categories = {
    'Sports': [{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'},{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'},{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'},{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'},{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'},{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'}],
    'Entertainment':[{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'},{title: 'Sky Sports 1', link: '/player/Sky-Sports-1'}]
}

class Home extends React.Component{
    componentWillMount = () => {
        if(!this.props.authenticated){
            this.context.router.history.push("/login")
        } else {
            this.props.dispatch(categoryListRequest())
        }
    }
    render = () => (
        <article>
            <Banner elements={data} selectHandler={e => console.log(e)}/>
            <h1 className="header">Channels</h1>
            <CategoryView categories={this.props.categories}/>
        </article>
    )
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = ({user, categories}) =>({authenticated: user.authenticated, categories})
export default connect(mapStateToProps)(Home);