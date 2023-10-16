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
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>💰 Split with {selectedFriend.name} 💰</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bill">💰 Bill Value</Label>
              <Input id="bill" placeholder="Amount in $" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="your">💰 Your expenses</Label>
              <Input id="your" placeholder="Amount in $" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="calc">
                💰 Calculated {selectedFriend.name}'s expenses
              </Label>
              <Input disabled id="calc" placeholder="Amount in $" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="payee">🤑 Who paid the bill?</Label>
              <Select>
                <SelectTrigger id="payee">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="me">Me</SelectItem>
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
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  );
}
