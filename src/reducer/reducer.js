export const reducer = (state, action) => {
  /* luon phai return ve state
     state o day duoc hieu la new state
     new state se overwrite to defaultState
     neu ko return -> new state = {} -> overwrite defaultState
     se tao ra object rong => error
  */

  /* ban chat cua action la switch case,
     tuy tung truong hop (type) ma thay doi old-state -> new-state tuong ung
  */
  switch (action.type) {
    case "ADD_ITEM":
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "item added"
      };
    case "NO_VALUE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "please enter value"
      };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    case "REMOVE_ITEM":
      const removePeople = state.people.filter(
        (item) => item.id !== action.payload
      );
      // console.log("removePeople", removePeople);
      // console.log("state people", state.people[0].id);
      // console.log("payload", action.payload);
      // return { ...state };
      return {
        ...state,
        people: removePeople,
        isModalOpen: true,
        modalContent: "item deleted"
      };
    default:
      // return state;
      throw new Error("no matching action type");
  }
};