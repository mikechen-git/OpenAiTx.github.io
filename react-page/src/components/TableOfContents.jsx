import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const TableOfContents = ({ content, isOpen, setIsOpen }) => {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  // 提取標題
  useEffect(() => {
    if (!content) return

    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = content
    
    const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const extractedHeadings = Array.from(headingElements).map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent.trim()
      const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g, '-')}`
      
      // 為標題添加ID屬性
      heading.id = id
      
      return {
        id,
        text,
        level,
        element: heading
      }
    })
    
    // 更新實際DOM中的標題ID
    setTimeout(() => {
      extractedHeadings.forEach(({ id, level, text }) => {
        const actualHeading = document.querySelector(`.markdown-body h${level}`)
        if (actualHeading && actualHeading.textContent.trim() === text) {
          actualHeading.id = id
        }
      })
    }, 100)
    
    setHeadings(extractedHeadings)
  }, [content])

  // 監聽滾動以高亮當前標題
  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -35% 0%'
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [headings])

  // 點擊標題跳轉
  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // 獲取標題的縮進層級
  const getIndentClass = (level) => {
    const indentMap = {
      1: 'pl-0',
      2: 'pl-4',
      3: 'pl-8',
      4: 'pl-12',
      5: 'pl-16',
      6: 'pl-20'
    }
    return indentMap[level] || 'pl-0'
  }

  if (headings.length === 0) return null

  return (
    <>
      {/* 統一的切換按鈕 - 固定在sidebar右側外邊 */}
      <motion.div
        className="fixed top-24 z-50"
        animate={{ 
          left: isOpen ? 320 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-sm border border-border shadow-lg"
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </motion.div>

      {/* 側邊欄 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 移動端背景遮罩 */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/20 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* 側邊欄主體 */}
            <motion.aside
              className="fixed top-16 bottom-0 left-0 z-40 w-80 bg-background/95 backdrop-blur-sm border-r border-border shadow-xl"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full">
                {/* 目錄內容 */}
                <div className="flex-1 overflow-y-auto p-2">
                  <nav className="space-y-1">
                    {headings.map(({ id, text, level }) => (
                      <motion.button
                        key={id}
                        onClick={() => scrollToHeading(id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200",
                          "hover:bg-accent hover:text-accent-foreground",
                          getIndentClass(level),
                          activeId === id
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground"
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="block truncate">{text}</span>
                      </motion.button>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default TableOfContents 