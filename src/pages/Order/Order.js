// imports from vendors
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { fetchSingleOrderWithRedux } from '../../modules/singleOrder.js';

// imports from components
import { Loading, Error } from '../../components';

class OrderPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      singleOrder: null,
      isLoading: true,
      error: false,
    };
  }

  componentWillMount() {
    this.props.fetchSingleOrderWithRedux(this.props.match.params.orderId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.singleOrder);
  }

  render() {
    return (
      <div className="Order">
        <div className="Order__headline">
          Order page
        </div>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          this.state.error ? (
            <div>
              <Error />
              <Link to="/orders" className="Order__link">&#x21E6; Go back</Link>
            </div>
          ) : (
            <div>
              <table className="Table">
                <thead className="Table__Head">
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr className="Table__Row">
                  <td>Ref number</td>
                  <td>{this.state.singleOrder.ref_number}</td>
                </tr>
                <tr className="Table__Row">
                  <td>Status</td>
                  <td
                    className={this.state.singleOrder.status === 'closed' ? 'Order__closed' : 'Order__status'}
                  >
                    {this.state.singleOrder.status}
                  </td>
                </tr>
                <tr className="Table__Row">
                  <td>Patient</td>
                  <td>{this.state.singleOrder.patient.name}</td>
                </tr>
                <tr className="Table__Row">
                  <td>Clinic</td>
                  <td>{this.state.singleOrder.clinic.name}</td>
                </tr>
                <tr className="Table__Row">
                  <td>Lab</td>
                  <td>{this.state.singleOrder.lab.name}</td>
                </tr>
                <tr className="Table__Row">
                  <td>Created at</td>
                  <td>{moment(this.state.singleOrder.created_at).format('DD.MM.YYYY, hh:mm:ss')}</td>
                </tr>
                <tr className="Table__Row">
                  <td>Updated at</td>
                  <td>{moment(this.state.singleOrder.updated_at).format('DD.MM.YYYY, hh:mm:ss')}</td>
                </tr>
                </tbody>
              </table>
              <Link to="/orders" className="Order__link">&#x21E6; Go back</Link>
            </div>
          )
        )}
      </div>
    );
  }

}

const mapStateToProps = (state) => ({ singleOrder: state.singleOrder });
const mapDispatchToProps = dispatch => ( bindActionCreators({ fetchSingleOrderWithRedux }, dispatch) );

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
