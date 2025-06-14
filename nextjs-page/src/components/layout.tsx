import { ReactNode } from "react"
import { Sidebar, MobileSidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useTranslation } from "@/hooks/useTranslation"
import { Bell, User } from "lucide-react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { t, loading, getLoadingProgress, locale } = useTranslation();

  if (loading) {
    const progress = getLoadingProgress();
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <div className="space-y-2">
            <p className="text-muted-foreground">載入多語言資源中...</p>
            <div className="w-64 bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground">
              {progress.loaded} / {progress.total} ({progress.percentage}%)
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div key={locale} className="flex h-screen bg-background">
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
              <h1 className="text-xl font-semibold">{t('nav.home', '儀表板')}</h1>
              <p className="text-sm text-muted-foreground">{t('badge.description', '歡迎回來！')}</p>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">{t('common.notifications', '通知')}</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">{t('common.userMenu', '用戶選單')}</span>
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