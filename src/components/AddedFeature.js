import React from 'react';
import {connect} from "react-redux"
import {removerCaracteristicas} from "../actions/index"

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {() => props.removerCaracteristicas(props.feature)}>
        X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = (state)=>{
return{}
}
export default connect (mapStateToProps, { removerCaracteristicas })(AddedFeature);
