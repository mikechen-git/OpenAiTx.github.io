"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Home,
  Settings,
  User,
  FileText,
  BarChart3,
  Mail,
  Calendar,
  Search,
  Bell,
  Menu,
  Github,
  Twitter,
  Linkedin,
  ChevronRight,
  Plus
} from "lucide-react"

const sidebarItems = [
  {
    title: "首頁",
    icon: Home,
    href: "/",
    badge: null
  },
  {
    title: "用戶管理",
    icon: User,
    href: "/users",
    badge: "12"
  },
  {
    title: "文檔",
    icon: FileText,
    href: "/docs",
    badge: null
  },
  {
    title: "分析",
    icon: BarChart3,
    href: "/analytics",
    badge: "新"
  },
  {
    title: "郵件",
    icon: Mail,
    href: "/mail",
    badge: "3"
  },
  {
    title: "日曆",
    icon: Calendar,
    href: "/calendar",
    badge: null
  },
  {
    title: "設定",
    icon: Settings,
    href: "/settings",
    badge: null
  }
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("/")

  return (
    <div className={`flex h-full w-64 flex-col border-r bg-background ${className}`}>
      {/* Header */}
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Home className="h-4 w-4" />
          </div>
          <span className="text-lg">NextJS Page</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <Button variant="outline" className="w-full justify-start text-muted-foreground">
          <Search className="mr-2 h-4 w-4" />
          搜尋...
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto">
        <nav className="grid gap-1 p-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.href
            
            return (
              <Button
                key={item.href}
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveItem(item.href)}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && (
                  <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            )
          })}
        </nav>

        <Separator className="my-4" />

        {/* Quick Actions */}
        <div className="p-2">
          <h4 className="mb-2 px-2 text-sm font-medium text-muted-foreground">快速操作</h4>
          <div className="grid gap-1">
            <Button variant="ghost" size="sm" className="justify-start">
              <Plus className="mr-2 h-4 w-4" />
              新增項目
            </Button>
            <Button variant="ghost" size="sm" className="justify-start">
              <Bell className="mr-2 h-4 w-4" />
              通知設定
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">升級到 Pro</CardTitle>
            <CardDescription className="text-xs">
              解鎖更多功能和無限制使用
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Button size="sm" className="w-full">
              立即升級
            </Button>
          </CardContent>
        </Card>

        <div className="mt-4 flex items-center justify-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Button
                key={link.label}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Mobile Sidebar Component
export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">開啟選單</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>導航選單</SheetTitle>
          <SheetDescription>網站導航選單</SheetDescription>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
} 