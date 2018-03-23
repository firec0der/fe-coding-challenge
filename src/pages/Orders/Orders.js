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
      filterText: '',
      filterBy: 'clinic_name',
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

  filterBy = (searchText, searchBy) => {
    this.setState({
      orders: this.props.orders.orders.map((record) => {
        if (!record[searchBy].match(new RegExp(searchText, 'gi'))) {
          return null;
        }
        return record;
      }).filter(record => !!record),
    });
  };

  applyFilter = () => {
    this.filterBy(this.state.filterText, this.state.filterBy);
  };

  pressEnterListener = (e) => {
    if (e.key === 'Enter') {
      this.applyFilter();
    }
  };

  render() {
    return (
      <div className="Orders">
        <div className="Orders__headline">
          Orders page
        </div>
        <div className="Orders__controls">
          <div className="Orders__sort">
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
          </div>
          <div className="Orders__filter">
            <select
              value={this.state.filterBy}
              onChange={event => this.setState({ filterBy: event.target.value })}
            >
              <option value="clinic_name">Clinic</option>
              <option value="lab_name">Lab</option>
              <option value="patient_name">Patient</option>
              <option value="created_at">Created at</option>
            </select>
            <input
              type="text"
              onChange={event => this.setState({ filterText: event.target.value })}
              onKeyPress={event => this.pressEnterListener(event)}
            />
            <button
              onClick={() => this.applyFilter()}
            >
              filter
            </button>
          </div>
        </div>
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
