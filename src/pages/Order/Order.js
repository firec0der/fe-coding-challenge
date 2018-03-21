// imports from vendors
import React from 'react';
import moment from 'moment';

// imports from components
import { Loading } from '../../components';

export default class OrderPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: null,
      isLoading: true,
    };
  }

  componentWillMount() {
    fetch(`https://18d9382a-0730-4340-952c-340f90890c88.mock.pstmn.io/orders/${this.props.match.params.orderId}`, {
      headers: {
        'x-api-key': 'f747cdbe08f3497395174d140b3fa1f4',
      },
    })
      .then(resp => resp.json())
      .then(order => {
        console.log(order);
        this.setState({
          order,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <div className="Orders">
        <div className="Orders__headline">
          Order page
        </div>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          this.state.order && (
            <table className="Orders__table">
              <thead className="Orders__tableHead">
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              </thead>
              <tbody>
              <tr className="Orders__tableRow">
                <td>Ref number</td>
                <td>{this.state.order.ref_number}</td>
              </tr>
              <tr className="Orders__tableRow">
                <td>Status</td>
                <td>{this.state.order.status}</td>
              </tr>
              <tr className="Orders__tableRow">
                <td>Patient</td>
                <td>{this.state.order.patient.name}</td>
              </tr>
              <tr className="Orders__tableRow">
                <td>Clinic</td>
                <td>{this.state.order.clinic.name}</td>
              </tr>
              <tr className="Orders__tableRow">
                <td>Lab</td>
                <td>{this.state.order.lab.name}</td>
              </tr>
              <tr className="Orders__tableRow">
                <td>Created at</td>
                <td>{moment(this.state.order.created_at).format('DD.MM.YYYY, hh:mm:ss')}</td>
              </tr>
              <tr className="Orders__tableRow">
                <td>Updated at</td>
                <td>{moment(this.state.order.updated_at).format('DD.MM.YYYY, hh:mm:ss')}</td>
              </tr>
              </tbody>
            </table>
          )
        )}
      </div>
    );
  }

}
