import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type FormAddFriendTypes = {
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
  onAddFriend: Function;
};

export default function FormAddFriend({
  handleCancel,
  onAddFriend,
}: FormAddFriendTypes) {
  const IMAGE_DEFAULT = "https://i.pravatar.cc/48";
  const [name, setName] = useState("");
  const [image, setImage] = useState(IMAGE_DEFAULT);

  //   function handleFormSubmit(e: React.ChangeEvent<HTMLInputElement>) {
  //     e.preventDefault();
  //   }

  function handleFormSubmit(e: any) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage(IMAGE_DEFAULT);
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>🥳 Add a new friend</CardTitle>
        <CardDescription>
          Friend will be able to owe you money or you owe them
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="my-form" onSubmit={handleFormSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Friend's Name</Label>
              <Input
                id="name"
                placeholder="Name of your friend"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Image URL</Label>
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL for their profile picture"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
        <Button form="my-form">Confirm</Button>
      </CardFooter>
    </Card>
  );
}
