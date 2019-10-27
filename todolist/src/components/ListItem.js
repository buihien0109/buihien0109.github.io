import React from 'react';
import Item from './Item';

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {renderItem} = this.props
        return(
                <div className="panel panel-success">
                    <div className="panel-heading">List Item</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">#</th>
                                <th>Name</th>
                                <th style={{ width: '15%' }} className="text-center">Level</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderItem()}
                        </tbody>
                    </table>
                </div>
                )
               }
           }
      export default ListItem;