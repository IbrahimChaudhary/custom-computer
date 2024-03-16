"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { caseClientSchema } from "@/schemas/client/case-client-schema";
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
import CaseAction from "@/actions/case-action";

export default function CaseForm() {
  const form = useForm<z.infer<typeof caseClientSchema>>({
    resolver: zodResolver(caseClientSchema),
  });
  async function onSubmit(data: z.infer<typeof caseClientSchema>) {
    const res = await CaseAction(data);
    console.log("client :  ", res);
    if (res) {
      toast({
        title: "case successfully inserted",
      });
      return;
    }

    toast({
      title: "something went wrong!",
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
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>type</FormLabel>
              <FormControl>
                <Input placeholder="type : " {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>color</FormLabel>
              <FormControl>
                <Input placeholder="color : " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="psu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>psu</FormLabel>
              <FormControl>
                <Input placeholder="psu: " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="side_panel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>side panel</FormLabel>
              <FormControl>
                <Input placeholder="side panel : " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="external_volume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>external volume</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="external volume : "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="internal_35_bays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>internal 35 bays</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="internal 35 bays : "
                  {...field}
                />
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
