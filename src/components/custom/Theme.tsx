"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useTheme } from "next-themes";

export default function Theme() {
    const { setTheme } = useTheme();
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light" onClick={() => setTheme("light")}>Light</SelectItem>
                <SelectItem value="dark" onClick={() => setTheme("dark")}>Dark</SelectItem>
                <SelectItem value="system" onClick={() => setTheme("system")}>System</SelectItem>
            </SelectContent>
        </Select>

    )
}
