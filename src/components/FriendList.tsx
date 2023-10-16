import Friend from "./Friend";

type propTypes = {
  friendsArr: { id: string; name: string; image: string; balance: number }[];
  onSelectFriend: any;
  currentlySelected: any;
};

export default function FriendList({
  friendsArr,
  onSelectFriend,
  currentlySelected,
}: propTypes) {
  const friends = friendsArr;
  const friends_li = friends.map((item) => (
    <Friend
      key={item.id}
      friendo={item}
      onSelect={() => onSelectFriend(item.id)}
      currentlySelected={currentlySelected}
    />
  ));

  return <ul className="flex flex-col gap-2 max-w-md py-8">{friends_li}</ul>;
}
