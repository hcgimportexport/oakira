import { getAbsoluteURL } from "@/lib/utils";

export const siteConfig: SiteConfig = {
    name: "Oakira",
    description:
        "Specialized in the import and export of products for the health and beauty sector",
    longDescription:
        "Oakira Group is a leading manufacturer and exporter of premium teas. We are committed to quality, innovation, and customer satisfaction, delivering exceptional tea experiences to markets worldwide",
    keywords: [],
    category: "Import and Export",
    developer: {
        name: "kiwemedia",
        url: "https://kiwemedia.com/",
    },
    og: {
        url: getAbsoluteURL("/og.webp"),
        width: 1200,
        height: 630,
    },
    links: {
        Facebook: "#",
        Twitter: "#",
        Instagram: "#",
        Linkedin:
            "https://www.linkedin.com/in/subam-pradhan-orthodox-and-ctc-tea-consultant-645896339/",
        Youtube: "#",
    },
    contact: {
        officeHours: "Monday - Friday, 9:00 AM - 5:00 PM",
        email: "subham@oakiragroup.com",
        phone: "+1 (234) 567-8901",
        location: "Darjeeeling, West Bengal, India",
    },
    menu: [
        {
            name: "Home",
            description: "Welcome to Oakira",
            href: "/",
            icon: "Home",
        },
        {
            name: "About",
            description: "Learn more about us",
            href: "/about",
            icon: "User",
        },
        // {
        //     name: "Services",
        //     description: "Explore our services",
        //     href: "/services",
        //     icon: "ShoppingBag",
        // },
        {
            name: "Dealership",
            description: "Become a dealer",
            href: "/dealership",
            icon: "MapPin",
        },
        {
            name: "Products",
            description: "Discover our products",
            href: "/products",
            icon: "BookOpen",
        },
        {
            name: "Export",
            description: "Export products",
            href: "/export",
            icon: "Upload",
        },
        {
            name: "Catalogue",
            description: "Browse our catalogue",
            href: "/catalogue",
            icon: "Grid",
        },
        {
            name: "Contact",
            description: "Get in touch with us",
            href: "/contact",
            icon: "Headset",
        },
    ],
    footer: {
        menu: [
            {
                name: "About Us",
                items: [
                    {
                        name: "Mission",
                        href: "/about#mission",
                    },
                    {
                        name: "Our Team",
                        href: "/about#team",
                    },
                    {
                        name: "Awards",
                        href: "/about#awards",
                    },
                    {
                        name: "Testimonials",
                        href: "/about#testimonials",
                    },
                    {
                        name: "Join Community",
                        href: "/soon",
                    },
                ],
            },
            {
                name: "Socials",
                items: [
                    {
                        name: "Facebook",
                        href: "/soon",
                    },
                    {
                        name: "Twitter",
                        href: "/soon",
                    },
                    {
                        name: "Instagram",
                        href: "https://www.instagram.com/renivet__",
                    },
                    {
                        name: "Linkedin",
                        href: "https://www.linkedin.com/company/renivet/",
                    },
                    {
                        name: "Youtube",
                        href: "/soon",
                    },
                ],
            },
            {
                name: "Legal",
                items: [
                    {
                        name: "Terms and Conditions",
                        href: "/terms",
                    },
                    {
                        name: "Privacy Policy",
                        href: "/privacy",
                    },
                    {
                        name: "Cookie Policy",
                        href: "/cookies",
                    },
                    {
                        name: "Refund Policy",
                        href: "/refund",
                    },
                ],
            },
        ],
    },
};
