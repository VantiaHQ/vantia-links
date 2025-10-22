'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { profileData } from '@/lib/data';
import type { Profile } from "@/lib/data";
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(30),
  bio: z.string().max(160, { message: "Bio must not be longer than 160 characters." }).optional(),
});

type AppearanceFormValues = z.infer<typeof formSchema>;

export function AppearanceForm({ initialProfile, onProfileChange }: { initialProfile: Profile, onProfileChange: (data: Partial<Profile>) => void }) {
  const { toast } = useToast();
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialProfile,
  });

  useEffect(() => {
    form.reset(initialProfile);
  }, [initialProfile, form]);

  const watchedValues = form.watch();

  useEffect(() => {
    const subscription = form.watch((value) => {
      onProfileChange(value as Partial<Profile>);
    });
    return () => subscription.unsubscribe();
  }, [form, onProfileChange]);
  
  function onSubmit(values: AppearanceFormValues) {
    toast({
      title: "Profile updated",
      description: "Your changes have been saved successfully.",
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Profile</CardTitle>
        <CardDescription className="font-headline">This is how others will see you on the site.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Vantia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Update profile</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
