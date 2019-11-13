import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import GetCard from "../../displayCard/displayCard";

function Card({ task, index, removeCard, column, editCard }) {
  const [values, setValues] = useState({
    content: ""
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = (event, value) => {
    console.log("i am the reason");
    event.preventDefault();
    removeCard(value, column.id);
    console.log("see you");
  };

  const handleSubmit = event => {
    console.log("it works");
    if (
      (event.keyCode === 13 && event.shiftKey === false) ||
      event.target.id === "add-card-button"
    ) {
      console.log("me too");
      editCard(values, column.id);
      setValues({ content: "" });
    }
  };

  const handleChange = (event, card) => {
    event.persist();
    console.log("hi");
    setValues({ ...values, ...card, content: event.target.value });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  // const value = getCard(task, handleBlur, handleChange, values, handleSubmit);
  const value = (
    <GetCard
      key={task.id}
      task={task}
      handleBlur={handleBlur}
      handleChange={handleChange}
      values={values}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      isOpen={isOpen}
      handleClose={handleClose}
    />
  );

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {value}
        </div>
      )}
    </Draggable>
  );
}
export default Card;
