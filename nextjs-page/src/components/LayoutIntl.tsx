import { ReactNode, useMemo } from "react"
import { useTranslations } from 'next-intl';
import { Sidebar, MobileSidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { LanguageSwitcherIntl } from "./LanguageSwitcherIntl"
import { useIntlContext } from "@/contexts/IntlProvider"
import { Bell, User } from "lucide-react"

interface LayoutProps {
  children: ReactNode
}

export function LayoutIntl({ children }: LayoutProps) {
  const t = useTranslations();
  const { locale } = useIntlContext();

  // 使用 useMemo 確保在語言變化時重新計算翻譯內容
  const translatedContent = useMemo(() => ({
    homeTitle: t('nav.home'),
    description: t('badge.description'),
    notifications: t('common.notifications'),
    userMenu: t('common.userMenu')
  }), [t, locale]);

  return (
    <div key={`layout-${locale}`} className="flex h-screen bg-background">
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
              <h1 className="text-xl font-semibold">{translatedContent.homeTitle}</h1>
              <p className="text-sm text-muted-foreground">{translatedContent.description}</p>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcherIntl />
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">{translatedContent.notifications}</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">{translatedContent.userMenu}</span>
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