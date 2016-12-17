import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ user }) => (
  <div>
    wassup v0.0.1
    <div>
        <a href="/game" className="waves-effect waves-light btn">start runnin'</a>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
