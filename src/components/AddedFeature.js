import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/carActions'

//ONclick = {()=> props.removeFreature(props.feature)}

//Action creator
// action creator 'removeFeature'
//action type REMOVE_FEAATURE, payload featureName

//reducer
//remove chosen from features
//compute new price
//move chosen to additional features

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button  onClick = {() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature}) (AddedFeature);
