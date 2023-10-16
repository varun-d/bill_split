import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type propTypes = {
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
  selectedFriend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  };
};

export default function FormSplitBill({
  selectedFriend,
  handleCancel,
}: propTypes) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill - paidByUser;

  function handleFormSubmit(e: any) {
    e.preventDefault();
    console.log(bill, paidByUser, whoIsPaying);
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>💰 Split with {selectedFriend.name} 💰</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="bill-split-form" onSubmit={handleFormSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bill">💰 Bill Value</Label>
              <Input
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                id="bill"
                placeholder="Amount in $"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="your">💰 Your expenses</Label>
              <Input
                value={String(paidByUser)}
                onChange={(e) =>
                  setPaidByUser(
                    Number(e.target.value) > bill
                      ? paidByUser
                      : Number(e.target.value)
                  )
                }
                id="your"
                placeholder="Amount in $"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="calc">
                💰 Calculated {selectedFriend.name}'s expenses
              </Label>
              <Input disabled id="calc" value={`${paidByFriend}`} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="payee">🤑 Who paid the bill?</Label>
              <Select
                value={whoIsPaying}
                onValueChange={(str) => setWhoIsPaying(str)}
              >
                <SelectTrigger id="payee">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="user">Me</SelectItem>
                  <SelectItem value="friendo">{selectedFriend.name}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleCancel} variant="outline">
          Cancel
        </Button>
        <Button form="bill-split-form">Confirm</Button>
      </CardFooter>
    </Card>
  );
}
