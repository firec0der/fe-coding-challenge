// imports from vendors
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchOrdersWithRedux } from '../../modules/orders.js';

// imports from components
import { Loading } from '../../components';

class OrdersPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      isLoading: true,
      error: false,
    };
  }

  componentWillMount() {
    this.props.fetchOrdersWithRedux();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.orders);
  }

  render() {
    return (
      <div className="Orders">
        <div className="Orders__headline">
          Orders page
        </div>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          this.state.orders && (
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

const mapStateToProps = (state) => ({ test: state.test, orders: state.orders, });
const mapDispatchToProps = dispatch => ( bindActionCreators({ fetchOrdersWithRedux }, dispatch) );

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
