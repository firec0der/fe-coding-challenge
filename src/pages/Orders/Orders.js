// imports from vendors
import React from 'react';

export default class OrdersPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      isLoading: true,
    };
  }

  componentWillMount() {
    fetch('https://18d9382a-0730-4340-952c-340f90890c88.mock.pstmn.io/orders', {
      headers: {
        'x-api-key': 'f747cdbe08f3497395174d140b3fa1f4',
      },
    })
      .then(resp => resp.json())
      .then(orders => {
        console.log(orders);
        this.setState({
          orders,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <div className="Orders">
        <div className="Orders__headline">
          Orders page
        </div>
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          this.state.orders && (
            <table>
              <thead>
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
                  <tr key={order.id}>
                    <td>{order.ref_number}</td>
                    <td>{order.patient_name}</td>
                    <td>{order.clinic_name}</td>
                    <td>{order.lab_name}</td>
                    <td>{order.created_at}</td>
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