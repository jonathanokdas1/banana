"use client"

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filter By Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Pending</DropdownMenuItem>
        <DropdownMenuItem>Completed</DropdownMenuItem>
        <DropdownMenuItem>Cancelled</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
