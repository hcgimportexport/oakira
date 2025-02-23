"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Icons } from "../icons";

const BENEFITS: {
    title: string;
    description: string;
    icon: keyof typeof Icons;
}[] = [
    {
        title: "Annual Discount Opportunities",
        description:
            "Access exclusive annual discounts and promotional offers designed to enhance your profitability. These opportunities provide additional savings and support your bottom line throughout the year.",
        icon: "Gift",
    },
    {
        title: "Local Workforce Support",
        description:
            "Obtain financial assistance with the salaries of your local staff. This support helps reduce operational costs and allows you to build a strong, efficient team to drive your dealership's success.",
        icon: "Users",
    },
    {
        title: "Godown Rent Paid by Us",
        description:
            "Receive financial support for your godown (warehouse) rent. This assistance reduces your overhead costs, ensuring that your storage needs are met while keeping your operational expenses in check.",
        icon: "Building",
    },
    {
        title: "Custom Branding Support",
        description:
            "Boost your dealership's visibility with personalized branding support. This includes custom stationery, promotional items, and gifts, all designed to reinforce your brand identity and create a lasting impression with your customers.",
        icon: "Paintbrush",
    },
    {
        title: "Tailored Marketing Solutions",
        description:
            "Leverage our expertise in digital marketing with customized strategies for your market. We provide targeted online advertising, social media campaigns, and search engine optimization to help you effectively reach and engage potential customers.",
        icon: "BarChart",
    },
    {
        title: "Exclusive Territory Rights",
        description:
            "Receive exclusive distribution rights in your designated area. This unique position ensures you are the sole authorized distributor of our products in your territory, minimizing competition and maximizing your market potential.",
        icon: "Map",
    },
    {
        title: "Profit-Driven Pricing",
        description:
            "Benefit from specially tailored pricing models designed to enhance your profit margins. Our competitive pricing structures consider market conditions and your business requirements, helping you achieve optimal profitability.",
        icon: "DollarSign",
    },
    {
        title: "Dedicated Account Management",
        description:
            "Enjoy personalized guidance from a dedicated relationship manager committed to your success. This includes regular check-ins, tailored advice, and prompt assistance to help you overcome challenges and thrive in your business.",
        icon: "UserCircle",
    },
    {
        title: "Expedited Order Fulfillment",
        description:
            "Receive priority processing and fast delivery of your orders. Our expedited fulfillment ensures that you get products quickly, allowing you to meet customer demands and maintain smooth operations.",
        icon: "Truck",
    },
    {
        title: "Early Access to New Products",
        description:
            "Be the first to introduce our latest innovations to your market. Early access provides you with a competitive edge, enabling you to meet emerging customer needs and stay ahead of competitors.",
        icon: "Sparkles",
    },
    {
        title: "No Advance Deposit Required",
        description:
            "Get your dealership without any advance deposit. We offer a hassle-free process for dealership inquiries. Visit our dealership page now and start your journey with us—no upfront costs required.",
        icon: "Wallet",
    },
] as const;

export function Benefits({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn("relative space-y-16 py-20", className)}
            {...props}
        >
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        Maximize your potential
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Benefits of <span className="text-accent">Partnering</span>{" "}
                    with Us
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-lg text-muted-foreground"
                >
                    At {siteConfig.name} Group of Company, our goal is to ensure
                    the fast success of our dealers while fostering a lifelong
                    business relationship. Here&apos;s how we support you:
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {BENEFITS.map((benefit, index) => {
                    const Icon = Icons[benefit.icon];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 * (index + 1),
                            }}
                            className="group relative overflow-hidden rounded-3xl bg-muted/50 p-8 transition-all duration-300 hover:bg-accent/10 hover:shadow-lg"
                        >
                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-2xl bg-accent/10 p-4 text-accent transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="size-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {benefit.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </div>

                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
