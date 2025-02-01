import { cn } from "@/lib/utils";
import * as React from "react";
import TextareaAutoResize, {
    TextareaAutosizeProps,
} from "react-textarea-autosize";

export type TextareaProps = TextareaAutosizeProps;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <TextareaAutoResize
                className={cn(
                    "flex min-h-[80px] w-full resize-none rounded-xl border border-foreground/20 bg-transparent px-3 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground/50 hover:border-accent/50 focus:border-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
