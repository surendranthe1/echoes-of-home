// src/pages/SubmitStoryPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from 'sonner';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, Send } from 'lucide-react';
import '../pages/pages-css/SubmitStoryPage.css';

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }).max(200, {
    message: "Bio must not exceed 200 characters."
  }),
  location: z.string().min(5, {
    message: "Please provide a specific location.",
  }),
  storyTitle: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  storyContent: z.string().min(100, {
    message: "Story must be at least 100 characters.",
  }).max(2000, {
    message: "Story must not exceed 2000 characters."
  }),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
  willBePresent: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const SubmitStoryPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bio: "",
      location: "",
      storyTitle: "",
      storyContent: "",
      acceptTerms: false,
      willBePresent: false,
    },
  });

  const onSubmit = async (data: FormValues): Promise<void> => {
    setIsSubmitting(true);
    
    // Simulate API request
    try {
      // In a real app, this would be an API call to submit the story
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Your story has been submitted successfully!");
      console.log("Form data:", data);
      
      // Reset form
      form.reset();
      
      // Redirect to thank you page or home page
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error("Error submitting story:", error);
      toast.error("There was an error submitting your story. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-story-container">
      <div className="submit-story-header">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="back-button"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1>Submit Your Story</h1>
      </div>
      
      <Card className="submit-story-card">
        <CardHeader>
          <CardTitle>Share Your Urban Experience</CardTitle>
          <CardDescription>
            Help preserve the diverse narratives of our city by sharing your story.
            Selected stories will be featured in the Urban Stories AR experience.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="story-form-section">
                <h2 className="section-title">About You</h2>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Bio</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us a bit about yourself (200 characters max)" 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        This will appear alongside your story in the AR experience.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="story-form-section">
                <h2 className="section-title">Your Story</h2>
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Specific location of your story" {...field} />
                      </FormControl>
                      <FormDescription>
                        Be as specific as possible (e.g., "Corner of 5th and Market St.")
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="storyTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Story Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Give your story a title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="storyContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Story</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your connection to this location..." 
                          className="min-h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Your story should have a personal connection to the location (2000 characters max).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="willBePresent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I would like to record audio narration for my story</FormLabel>
                        <FormDescription>
                          If selected, we'll contact you to arrange a recording session.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I agree to the terms and conditions</FormLabel>
                      <FormDescription>
                        By submitting, you grant Urban Stories permission to use your content in the app.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Submit Story
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitStoryPage;