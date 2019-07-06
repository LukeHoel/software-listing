import React from "react";
import { Card } from "../Card/Card";
import "./Modal.css";
import { connect } from "react-redux";
import { State } from "../../Store/State";
import { store } from "../../Store/Store";
import { CloseModalAction } from "../../Store/Actions";
const Modal = (props: any) => (
  <div
    className={`ModalContainer 
    ${props.modalContent !== undefined ? "ModalOpened" : "ModalClosed"}`}
    onClick={() => store.dispatch({ type: CloseModalAction })}
  >
    <Card className="Modal" onClick={(e: MouseEvent) => e.stopPropagation()}>
      {props.modalContent}
    </Card>
  </div>
);

export default connect((state: State) => ({
  modalContent: state.modalContent
}))(Modal);
