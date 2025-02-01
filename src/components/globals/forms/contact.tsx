"use client";

import { Icons } from "@/components/icons";
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
import { Textarea } from "@/components/ui/textarea";
import { handleClientError } from "@/lib/utils";
import {
    CreateTicket,
    createTicketSchema,
    ResponseData,
    Ticket,
} from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface PageProps {
    style: "normal" | "inverted";
}

export function ContactForm({ style = "inverted" }: PageProps) {
    const bg = style === "inverted" ? "bg-background" : "bg-transparent";

    const form = useForm<CreateTicket>({
        resolver: zodResolver(createTicketSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const { mutate: submit, isPending: isSubmitting } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Submitting your message...");
            return { toastId };
        },
        mutationFn: async (values: CreateTicket) => {
            const res = await axios.post<ResponseData<Ticket>>(
                "/api/tickets",
                values
            );
            return res.data;
        },
        onSuccess: (_, __, { toastId }) => {
            toast.success("Message submitted successfully", { id: toastId });
            form.reset();
        },
        onError: (err, _, ctx) => {
            return handleClientError(err, ctx?.toastId);
        },
    });

    return (
        <Form {...form}>
            <form
                className="overflow-hidden bg-muted/50 transition-colors duration-300 hover:bg-accent/5 md:rounded-3xl md:p-8"
                onSubmit={form.handleSubmit((values) => submit(values))}
            >
                <div className="space-y-6">
                    <div className="flex flex-col gap-6 md:flex-row">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="John"
                                            className={bg}
                                            disabled={isSubmitting}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Doe"
                                            className={bg}
                                            disabled={isSubmitting}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="johndoe@example.com"
                                            className={bg}
                                            type="email"
                                            disabled={isSubmitting}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="+919876543210"
                                            type="tel"
                                            className={bg}
                                            disabled={isSubmitting}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="Your message here"
                                        minRows={5}
                                        className={bg}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        className="group w-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-accent/90"
                        size="lg"
                        disabled={isSubmitting}
                    >
                        <span>Send Message</span>
                        <Icons.Send className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                </div>
            </form>
        </Form>
    );
}
