"use client";
import { Loader } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PhotosUploader from "../uploader";
import { z } from "zod";
import React, { useRef, useState } from "react";
import { cpuClientSchema } from "@/schemas/client/cpu-client-schema";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import CpuAction from "@/actions/cpu-action";

export default function CaseForm() {
  const [isFormLoading, setIsFromLoading] = useState(false);
  const [items, setItems] = useState<any>([]);
  const inputItemsRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<any>([]);
  const handleSelectItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputItemsRef.current && event.key === "Enter") {
      event.preventDefault();
      console.log(inputItemsRef.current.value);
      const newItem = inputItemsRef.current.value;
      setItems((prevItems: any) => [...prevItems, newItem]);
      inputItemsRef.current.value = "";
    }
  };
  console.log(items);
  const form = useForm<z.infer<typeof cpuClientSchema>>({
    resolver: zodResolver(cpuClientSchema),
    defaultValues: {
      name: "",
      price: NaN,
      core_count: NaN,
      core_clock: NaN,
      boost_clock: NaN,
      tdp: NaN,
      graphics: "",
      smt: false,
    },
  });
  async function onSubmit(data: z.infer<typeof cpuClientSchema>) {
    setIsFromLoading(true);

    const res = await CpuAction(data, images[0]);

    if (res) {
      toast({
        title: "case successfully inserted",
      });
      setIsFromLoading(false);
      form.reset();
      return;
    }

    toast({
      title: "something went wrong!",
    });

    setIsFromLoading(false);
  }
  const handleDeleteItem = (
    event: React.MouseEvent<HTMLDivElement>,
    item: any
  ) => {
    event.preventDefault();
    console.log("removing items");
    setItems((oldValues: any) => {
      return oldValues.filter((fruit: any) => fruit !== item);
    });
  };
  const handleBoxItems = () => {
    if (items.length === 0) {
      return (
        <>
          <span>no items added</span>
        </>
      );
    } else {
      return (
        <div className="flex gap-3">
          {items.map((item: any) => {
            return (
              <div
                key={nanoid()}
                onClick={(e) => handleDeleteItem(e, item)}
                className="rounded-full group bg-primary cursor-pointer  text-black px-4 flex justify-between items-center gap-2 "
              >
                {item}
                <span className="hidden group-hover:flex">x</span>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col items-center   pb-4 mt-8"
      >
        <div
          className="grid  mb-4 grid-cols-2 gap-x-12 gap-y-6 w-full 
           "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input placeholder="name : " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="price : " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3">
            <div>enter Items</div>
            <Input
              className="text-white"
              type="text"
              placeholder="enter items"
              ref={inputItemsRef}
              onKeyDown={handleSelectItem}
            />
            {handleBoxItems()}
          </div>
          <PhotosUploader
            maxPhotos={1}
            addedPhotos={images}
            onChange={setImages}
          />
        </div>

        <Button
          disabled={isFormLoading}
          className="w-full bg-[#7ED348] text-black  font-bold text-lg"
          type="submit"
        >
          {isFormLoading ? (
            <Loader className="mr-2 h-6 w-6 animate-spin" />
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </form>
    </Form>
  );
}
