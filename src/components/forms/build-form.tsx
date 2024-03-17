"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { buildClientSchema } from "@/schemas/client/build-client-schema";
import { Button } from "@/components/ui/button";
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
import BuildAction from "@/actions/build-action";

export default function BuidForm() {
  const form = useForm<z.infer<typeof buildClientSchema>>({
    resolver: zodResolver(buildClientSchema),
  });

  async function onSubmit(data: z.infer<typeof buildClientSchema>) {
    const res = await BuildAction(data);
    if (!res) {
      toast({
        title: "something went wrong",
      });
      return;
    }
    toast({
      title: "build created successfully",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>build name</FormLabel>
              <FormControl>
                <Input placeholder="e.g : my build" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
