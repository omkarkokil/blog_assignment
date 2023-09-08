import { usePathname } from "next/navigation"
import { useMemo } from "react"

const useRoutes = () => {
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            label: "Home",
            href: "/",
            active: pathname === "/"
        },
        {
            label: "Write",
            href: "/Write",
            active: pathname === "/Write"
        }
    ], [pathname])

    return routes
}

export default useRoutes