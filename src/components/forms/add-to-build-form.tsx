"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import addToBuildAction from "@/actions/add-to-build-action";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type AddToBuildFormPropsT = {
  partId: string;
  partType: string;
  buildId: string;
  buildName: string;
};

export function AddToBuildForm({
  buildId,
  buildName,
  partId,
  partType,
}: AddToBuildFormPropsT) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function handleSubmit() {
    console.log("I am in the handler functon");
    const res = await addToBuildAction(partId, partType, buildId);
  }

  return (
    <>
      <div className="text-green-500">{buildName}</div>
      <button onClick={handleSubmit} className="bg-green-500">
        addd
      </button>
    </>
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
    //     <FormField
    //       control={form.control}
    //       name="name"
    //       render={({ field }) => (
    //         <FormItem>
    //           <div className="text-green-500">{buildName}</div>
    //           <FormLabel>Username</FormLabel>
    //           <FormControl>
    //             <Input placeholder="shadcn" {...field} />
    //           </FormControl>
    //           <FormDescription>
    //             This is your public display name.
    //           </FormDescription>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </Form>
  );
}
