import React, { Component } from "react";
import ListItems from "./ListItems";
import AddButton from "./AddButton";
import styled from "styled-components";

const TextInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.3rem;
  outline-color: pink;
  margin-right: 1rem;
`;
export default class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: " ",
        key: " ",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items,
    });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.addItem}>
          <TextInput
            type="text"
            placeholder="Add new todo..."
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          {/* <button type="submit">Add</button> */}
          <AddButton />
        </form>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </section>
    );
  }
}
