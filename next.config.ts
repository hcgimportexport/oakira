import "./env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "/a/wjndgl4cy4/**",
            },
        ],
    },
};

export default nextConfig;
