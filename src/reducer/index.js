import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../data";
// reducer function
const reducer = (state, action) => {};
const defaultState = {
  people: data,
  isModalOpen: true,
  modalContent: "hello world"
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
    } else {
      // setShowModal(true);
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal />}
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
      {state.people.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
    </>
  );
};

export default Index;
