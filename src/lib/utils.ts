import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getAbsoluteURL(path: string = "/") {
    if (process.env.NEXT_PUBLIC_DEPLOYMENT_URL)
        return `https://${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}${path}`;
    else if (process.env.VERCEL_URL)
        return `https://${process.env.VERCEL_URL}${path}`;
    return "http://localhost:3000" + path;
}

// generate a function that will take the url as parameter and return the domain name
// eg. "https://example.com" => "example.com"
// eg. "http://example.com/path?query=string" => "example.com"
export function getDomainNameFromURL(url: string) {
    return new URL(url).hostname;
}
