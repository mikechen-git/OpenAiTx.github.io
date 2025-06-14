import { ReactNode } from "react"
import { Sidebar, MobileSidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { Bell, User } from "lucide-react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <MobileSidebar />
            
            <div>
              <h1 className="text-xl font-semibold">儀表板</h1>
              <p className="text-sm text-muted-foreground">歡迎回來！</p>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">通知</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">用戶選單</span>
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 