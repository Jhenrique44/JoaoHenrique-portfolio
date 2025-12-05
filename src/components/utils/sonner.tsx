import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;
export const Toaster =({...props} : ToasterProps) => { 
    const { theme = "system"} = useTheme();

    return (
        <Sonner
        theme= { theme as ToasterProps["theme"]}
        className="toaster group"
        toastOptions = {{ 
            classNames:  { 
                toast: "bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 shadow-lg",
                description: "font-medium",
                actionButton: "text-sm font-medium underline ml-4",
                cancelButton:  "text-sm font-medium underline ml-4 text-red-600 hover:text-red-800"
            }
        }}
        {...props} 
        />
     )
}