import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type propTypes = {
  friendo: {
    id: string;
    name: string;
    image: string;
    balance: number;
  };
  onSelect: React.MouseEventHandler<HTMLButtonElement>;
  currentlySelected: any;
};

export default function Friend({
  friendo,
  onSelect,
  currentlySelected,
}: propTypes) {
  const _statement =
    friendo.balance < 0
      ? `You owe ${friendo.name} $${-1 * friendo.balance}`
      : `${friendo.name} ows you $${friendo.balance}`;
  return (
    <li className="flex flex-row gap-4 items-center">
      <Avatar className="flex-none w-fit">
        <AvatarImage src={friendo.image} />
        <AvatarFallback>. 🤑 .</AvatarFallback>
      </Avatar>
      <span className="flex-1">
        <p className="text-lg font-bold line leading-6">{friendo.name}</p>
        <p
          className={`${
            friendo.balance < 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          {" "}
          {_statement}
        </p>
      </span>
      <span className="flex-1">
        {currentlySelected?.id === friendo.id ? (
          <Button disabled>Selected</Button>
        ) : (
          <Button onClick={onSelect}>Select</Button>
        )}
      </span>
    </li>
  );
}
