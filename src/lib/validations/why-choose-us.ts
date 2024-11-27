import { z } from "zod";
import { bannerSchema } from "./banner";

export const whyChooseUs = bannerSchema;

export type WhyChooseUs = z.infer<typeof whyChooseUs>;
