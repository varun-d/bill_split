import { useState } from "react";
import FriendList from "./components/FriendList";
import { Button } from "./components/ui/button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

type FriendType = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

function App() {
  // All states go here
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<FriendType | null>(null);

  // Change any later: TODO
  function handleAddNewFriend(friend: any) {
    // console.log("From APP", friend);
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  }

  function handleOnSelectFriend(id: string) {
    const _selectedFriend = friends.filter((item) => item.id === id)[0];
    setSelectedFriend(_selectedFriend);
    setShowAddFriend(false);
  }

  return (
    <main className="flex sm:flex-row flex-col justify-evenly container mx-auto p-8">
      <div className="basis-1/2">
        {/* Render friend list, each button needs to get a handle function TODO */}
        <FriendList
          friendsArr={friends}
          onSelectFriend={handleOnSelectFriend}
          currentlySelected={selectedFriend}
        />

        {/* Show AddFriendForm button */}
        {!showAddFriend && (
          <Button size="sm" onClick={() => setShowAddFriend(!showAddFriend)}>
            Add Friend
          </Button>
        )}

        {/* Show add friend form on clicking the button / hide on cancel */}
        {showAddFriend && (
          <FormAddFriend
            handleCancel={() => setShowAddFriend(!showAddFriend)}
            onAddFriend={handleAddNewFriend}
          />
        )}
      </div>
      <div className="basis-1/2">
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            handleCancel={() => setSelectedFriend(null)}
          />
        )}
      </div>
      {/* Main splitting bill form */}
    </main>
  );
}

export default App;
