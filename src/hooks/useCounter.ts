import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export function useCounter(value: number, duration: number = 2) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration * 1000,
        bounce: 0,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, value, isInView]);

    return { ref, springValue };
}
