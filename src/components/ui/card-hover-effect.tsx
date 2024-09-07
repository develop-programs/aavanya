"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";

type Props = {
  items: dummy[];
  className?: string;
  limit?: number;
};

export const HoverEffect = ({ items, className, limit }: Props) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 py-4",
        className
      )}
    >
      {items.slice(0, limit ? limit : items.length).map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-500 dark:bg-slate-600/20 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="rounded-2xl h-full w-full overflow-hidden bg-slate-950 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex  flex-col justify-center items-center">
            <CardHeader>
              <Image
                src={item.avatar}
                alt={item.name}
                width={300}
                height={300}
                className="rounded-full size-24"
              />
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2 pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.title}</CardDescription>
              </div>
              <span className="text-sm text-muted-foreground">{item.desc}</span>
            </CardContent>
            <CardFooter className="flex justify-center gap-3 items-center">
              <Link href={item.twitter} target="_blank" className="text-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 fill-current hover:fill-slate-400"
                >
                  <path d="M22 5.79608C21.2512 6.12811 20.4569 6.34597 19.6435 6.44238C20.5003 5.92972 21.1415 5.12301 21.4475 4.1726C20.6421 4.65096 19.7607 4.98772 18.8415 5.16826C18.2784 4.5685 17.5481 4.15179 16.7453 3.97218C15.9424 3.79258 15.1042 3.85836 14.3392 4.161C13.5742 4.46364 12.9178 4.98917 12.4551 5.66943C11.9925 6.34968 11.7449 7.15326 11.7445 7.97594C11.7442 8.29068 11.7797 8.60444 11.8502 8.91117C10.2189 8.82942 8.62302 8.40553 7.16613 7.66703C5.70924 6.92853 4.42394 5.89192 3.39364 4.62449C2.86901 5.52773 2.70827 6.59695 2.94412 7.61452C3.17998 8.6321 3.7947 9.52158 4.6632 10.1019C4.01159 10.0817 3.37428 9.90587 2.80454 9.589V9.64085C2.80467 10.5882 3.13244 11.5063 3.73228 12.2395C4.33213 12.9727 5.1671 13.4758 6.09561 13.6636C5.74333 13.7597 5.37975 13.808 5.01461 13.8074C4.75548 13.8074 4.49691 13.7832 4.24227 13.7352C4.50448 14.5502 5.01479 15.2629 5.70187 15.7738C6.38895 16.2846 7.21846 16.5679 8.07447 16.5843C6.35395 17.9315 4.16976 18.5422 2 18.2827C3.87582 19.4886 6.05923 20.1288 8.28924 20.1269C9.82516 20.1374 11.3479 19.8427 12.7689 19.2598C14.19 18.6769 15.481 17.8174 16.5671 16.7313C17.6532 15.6453 18.5127 14.3542 19.0956 12.9331C19.6785 11.5121 19.9732 9.98938 19.9627 8.45346C19.9627 8.27546 19.9585 8.09856 19.9501 7.92277C20.7542 7.34116 21.4484 6.62102 22 5.79608V5.79608Z" />
                </svg>
              </Link>
              <Link href={item.linkedin} target="_blank" className="text-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 fill-current hover:fill-slate-400"
                >
                  <path d="M5.00354 7.00001H4.97538C4.66876 7.0185 4.36162 6.97358 4.07314 6.86805C3.78466 6.76252 3.52103 6.59864 3.29872 6.38666C3.07641 6.17468 2.90019 5.91914 2.78107 5.636C2.66195 5.35286 2.60248 5.0482 2.60638 4.74104C2.61028 4.43389 2.67746 4.13084 2.80373 3.85082C2.93001 3.57079 3.11265 3.31981 3.34027 3.11353C3.56789 2.90726 3.83559 2.75013 4.12666 2.65196C4.41773 2.55379 4.72591 2.51668 5.03196 2.54295C5.33953 2.52067 5.64838 2.56227 5.93909 2.66513C6.22981 2.76799 6.4961 2.92988 6.72122 3.14063C6.94634 3.35138 7.12542 3.60643 7.24721 3.88974C7.369 4.17304 7.43085 4.47848 7.42888 4.78685C7.42692 5.09522 7.36117 5.39985 7.23578 5.68158C7.11039 5.96331 6.92807 6.21605 6.70028 6.42391C6.47249 6.63177 6.20416 6.79026 5.91216 6.8894C5.62016 6.98854 5.3108 7.0262 5.00354 7.00001Z" />
                  <path d="M7.01807 10H3.01807V22H7.01807V10Z" />
                  <path d="M17.5176 10C16.8435 10.0018 16.1786 10.156 15.5725 10.451C14.9665 10.746 14.4349 11.1741 14.0176 11.7034V10H10.0176V22H14.0176V16.5C14.0176 15.9696 14.2283 15.4609 14.6034 15.0858C14.9784 14.7107 15.4871 14.5 16.0176 14.5C16.548 14.5 17.0567 14.7107 17.4318 15.0858C17.8069 15.4609 18.0176 15.9696 18.0176 16.5V22H22.0176V14.5C22.0176 13.9091 21.9012 13.3239 21.675 12.7779C21.4489 12.232 21.1174 11.7359 20.6996 11.318C20.2817 10.9002 19.7856 10.5687 19.2397 10.3425C18.6937 10.1164 18.1085 10 17.5176 10V10Z" />
                </svg>
              </Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
