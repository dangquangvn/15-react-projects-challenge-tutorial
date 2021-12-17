import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../data";
// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ""
};

const Index = () => {
  const [name, setName] = useState("");
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  // refactor
  /* reducer can 2 thanh phan: old-state va action,
     reducer se lay old-state va thuc hien action
     se sinh ra new-state
  */
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName("");
      //refactor
      const newPeople = { id: new Date().getTime().toString(), name };
      // we won't change value directly like useState (setPeople, setModal)
      // but always via dispatch
      dispatch({ type: "ADD_ITEM", payload: newPeople });
      setName("");
    } else {
      // setShowModal(true);
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            key={person.id}
          >
            <div>{person.name}</div>
            <button onClick={() => handleRemove(person.id)}>X</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
