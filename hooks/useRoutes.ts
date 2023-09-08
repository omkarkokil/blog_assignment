import { usePathname } from "next/navigation"
import { useMemo } from "react"

const useRoutes = () => {
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            label: "Write",
            href: "/",
            active: pathname === "/"
        },
        {
            label: "Blogs",
            href: "/Blogs",
            active: pathname === "/Blogs"
        }
    ], [pathname])

    return routes
}

export default useRoutes