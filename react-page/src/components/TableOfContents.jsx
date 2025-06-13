import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const TableOfContents = ({ content, isOpen, setIsOpen }) => {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  // 提取標題並添加anchor points
  useEffect(() => {
    if (!content) return

    const processHeadings = () => {
      const markdownBody = document.querySelector('.markdown-body')
      if (!markdownBody) {
        setTimeout(processHeadings, 100)
        return
      }

      const headingElements = markdownBody.querySelectorAll('h1, h2, h3, h4, h5, h6')
      if (headingElements.length === 0) {
        setTimeout(processHeadings, 100)
        return
      }

      // 先清除所有現有的ID
      headingElements.forEach(heading => {
        heading.removeAttribute('id')
      })

      const extractedHeadings = Array.from(headingElements).map((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1))
        const text = heading.textContent.trim()
        // 創建更簡潔的ID
        const id = `heading-${index}-${text.toLowerCase()
          .replace(/[^\w\u4e00-\u9fff\s-]/g, '') // 移除特殊字符，保留中文、英文、數字、空格、連字符
          .replace(/\s+/g, '-') // 將空格替換為連字符
          .replace(/-+/g, '-') // 合併多個連字符
          .replace(/^-|-$/g, '')}`  // 移除開頭和結尾的連字符
        
        // 直接為實際DOM元素添加ID
        heading.setAttribute('id', id)
        
        return {
          id,
          text,
          level
        }
      })
      
      setHeadings(extractedHeadings)
    }

    // 等待DOM更新後再處理
    setTimeout(processHeadings, 300)
  }, [content])

  // 監聽滾動以高亮當前標題
  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver || headings.length === 0) return

    const observer = new window.IntersectionObserver(
      (entries) => {
        // 找到最靠近頂部的可見標題
        const visibleEntries = entries.filter(entry => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          // 按照在頁面中的位置排序，選擇最靠近頂部的
          const sortedEntries = visibleEntries.sort((a, b) => 
            a.boundingClientRect.top - b.boundingClientRect.top
          )
          setActiveId(sortedEntries[0].target.id)
        }
      },
      {
        // 考慮navbar高度的rootMargin設置
        rootMargin: '-80px 0% -50% 0%',
        threshold: [0, 0.1, 0.5, 1]
      }
    )

    // 延遲觀察，確保DOM元素已經設置好ID
    const setupObserver = () => {
      let observedCount = 0
      headings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.observe(element)
          observedCount++
        }
      })
      
      // 如果沒有觀察到任何元素，稍後重試
      if (observedCount === 0 && headings.length > 0) {
        setTimeout(setupObserver, 200)
      }
    }

    setTimeout(setupObserver, 100)

    return () => {
      observer.disconnect()
    }
  }, [headings])

  // 點擊標題跳轉
  const scrollToHeading = (id) => {
    const performScroll = (element) => {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    // 立即嘗試通過ID查找
    let element = document.getElementById(id)
    if (element) {
      performScroll(element)
      return
    }
    
    // 如果沒找到，嘗試重新設置ID並查找
    const targetHeading = headings.find(h => h.id === id)
    if (targetHeading) {
      // 重新查找並設置ID
      const allHeadings = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6')
      const headingByText = Array.from(allHeadings).find(h => h.textContent.trim() === targetHeading.text)
      
      if (headingByText) {
        headingByText.setAttribute('id', id)
        performScroll(headingByText)
        return
      }
    }
    
    // 最後的重試機制
    const attemptScroll = (retries = 3) => {
      element = document.getElementById(id)
      if (element) {
        performScroll(element)
      } else if (retries > 0) {
        setTimeout(() => attemptScroll(retries - 1), 100)
      }
    }
    
    attemptScroll()
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