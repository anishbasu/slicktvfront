import React from 'react';

// = ({headers, data, item_options, onEventAdd, onEventModify, onEventDelete}) 

export EventTable extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            eventAdd: {
                name,
                image,
                start,
                end,
                channel_id,
                category,
                public_event
            }
        }
    }
    render = () => {
        let {headers, data, onEventDelete, onEventModify, onEventAdd} = this.props

        return (
            <table>
                <thead>
                    {
                        headers.map((elem, idx) => <tr key={idx}>{elem}</tr>)
                    }
                </thead>
                <tbody>
                    {
                        data.map((elem, idx) => <EventRow key={idx} data={data}/>)
                    }
                    <EventInput >
                </tbody>
            <table>
        )
    }
}
