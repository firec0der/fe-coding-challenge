// imports from vendors
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchOrdersWithRedux } from '../../modules/orders.js';

// imports from components
import { Loading, Error } from '../../components';

class OrdersPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      isLoading: true,
      error: false,
      sortBy: 'id',
    };
  }

  componentWillMount() {
    this.props.fetchOrdersWithRedux();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.orders);
  }

  sortBy = (param) => {

    const dynamicSort = (property) => {
      let sortOrder = 1;
      if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return (a, b) => (
        ((a[property] < b[property])
            ? -1
            : (a[property] > b[property])
              ? 1
              : 0
        ) * sortOrder
      );
    };

    this.setState({
      orders: this.state.orders.sort(dynamicSort(param)),
      sortBy: param,
    });
  };

  render() {
    return (
      <div className="Orders">
        <div className="Orders__headline">
          Orders page
        </div>
        <select
          value={this.state.sortBy}
          onChange={event => this.sortBy(event.target.value)}
        >
          <option value="id">Sort by</option>
          <option value="lab_name">Lab (ASC)</option>
          <option value="-lab_name">Lab (DESC)</option>
          <option value="created_at">Created at (ASC)</option>
          <option value="-created_at">Created at (DESC)</option>
        </select>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          this.state.error ? (
            <Error />
          ) : (
            <table className="Table">
              <thead className="Table__Head">
                <tr>
                  <th>Ref</th>
                  <th>Patient</th>
                  <th>Clinic</th>
                  <th>Lab</th>
                  <th>Created at</th>
                </tr>
              </thead>
              <tbody>
              {this.state.orders.map(order => {
                return (
                  <tr
                    key={order.id}
                    className="Table__Row Orders__Row"
                    onClick={() => this.props.history.push(`/orders/${order.id}`)}
                  >
                    <td>{order.ref_number}</td>
                    <td>{order.patient_name}</td>
                    <td>{order.clinic_name}</td>
                    <td>{order.lab_name}</td>
                    <td>{moment(order.created_at).format('DD.MM.YYYY, hh:mm:ss')}</td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          )
        )}
      </div>
    );
  }

}

const mapStateToProps = (state) => ({ orders: state.orders, });
const mapDispatchToProps = dispatch => ( bindActionCreators({ fetchOrdersWithRedux }, dispatch) );

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
