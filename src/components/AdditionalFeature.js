import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/carActions'
//OnClick => action creator called addFeature
//ON CLic ={() => props.addFeature(props.feature)}
// action [type: ADD_FEATURE, payload: feature]

//reducer does the logic
//-remove chosen feature from  additional features
// add the chosen to features
//compute new price

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


//does not need mSTP because it gets all from parent, only need action creator functions
export default connect(null, {addFeature})(AdditionalFeature);
