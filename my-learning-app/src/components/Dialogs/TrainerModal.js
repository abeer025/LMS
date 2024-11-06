"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TrainerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = window.innerWidth >= 1024; // Example of simple media query

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Trainer Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Trainer</DialogTitle>
          </DialogHeader>
          <TrainerForm onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Trainer Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit Trainer</DrawerTitle>
          <DrawerDescription>
            You can update trainer details here.
          </DrawerDescription>
        </DrawerHeader>
        <TrainerForm onSubmit={handleFormSubmit} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function TrainerForm({ onSubmit, className }) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="trainer-name">Trainer Name</Label>
        <Input required id="trainer-name" placeholder="Enter trainer's name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="expertise">Expertise Area</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="graphic-design">Graphic Designing</SelectItem>
            <SelectItem value="python">Python Programming</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="experience">Experience Level</Label>
        <Input
          required
          id="experience"
          placeholder="Enter years of experience"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="bio">Short Bio</Label>
        <Input required id="bio" placeholder="Enter brief bio" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Availability Status</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Available or Unavailable" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="unavailable">Unavailable</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Save Trainer</Button>
    </form>
  );
}
