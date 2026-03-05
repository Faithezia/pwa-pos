import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNeedReceiptStore } from "@/store/userStore";
import Link from "next/link";

export function PopupDialog() {
  const setStatus = useNeedReceiptStore((state) => state.setStatus);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer bg-[#f7f5dc] text-black-400 hover:bg-[#fcf10b]">
            Proceed Transaction
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#f7f5dc] border-none">
          <DialogHeader>
            <DialogTitle>CONFIRMATION</DialogTitle>
            <DialogDescription className="text-xl text-black">
              Do you want to keep your receipt?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Link
              onClick={() => setStatus("No")}
              href={"/cart"}
              className="py-2 px-4 rounded-md cursor-pointer text-white bg-[#E43636]"
            >
              No
            </Link>
            <Link
              onClick={() => setStatus("Yes")}
              href={"/kyc"}
              className="py-2 px-4 rounded-md cursor-pointer text-white bg-[#216c58]"
            >
              Yes
            </Link>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
