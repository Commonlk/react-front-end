import React from "react";

import Card from "../../../shared/components/UIElements/Card/Card";
import UserItem from "../UserItem/UserItem";
import "./UsersList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className="center">
        <h2>No users found.</h2>
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user._id}
          id={user._id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UserList;
