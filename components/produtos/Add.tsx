import { Button } from "@/components/ui/button";
import { File, ListFilter, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PopUp } from "@/components/produtos/criar/pop-up";

export function Add() {
  return (
    <div className="ml-auto flex items-center gap-2">
      <PopUp />
    </div>
  );
}
