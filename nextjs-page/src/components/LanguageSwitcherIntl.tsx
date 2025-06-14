import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntlContext } from '@/contexts/IntlProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languageNames: Record<string, string> = {
  'en': 'English',
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'pt': 'Português',
  'ru': 'Русский',
  'ar': 'العربية',
  'th': 'ไทย',
  'vi': 'Tiếng Việt',
  'tr': 'Türkçe',
  'pl': 'Polski',
  'nl': 'Nederlands'
};

export function LanguageSwitcherIntl() {
  const { locale, changeLocale, availableLocales } = useIntlContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    console.log('LanguageSwitcherIntl: Changing language to', newLocale);
    setIsChanging(true);
    
    // 立即調用 changeLocale
    changeLocale(newLocale);
    
    // 添加短暫的視覺反饋後關閉選單
    setTimeout(() => {
      setIsChanging(false);
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="relative">
      <motion.div
        animate={isChanging ? { scale: 0.95 } : { scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
          disabled={isChanging}
        >
          <motion.div
            animate={isChanging ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Globe className="h-4 w-4" />
          </motion.div>
          <span>{languageNames[locale] || locale}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* 下拉選單 */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 z-50 min-w-[200px]"
            >
              <Card>
                <CardContent className="p-2">
                  <div className="grid gap-1 max-h-60 overflow-y-auto">
                    {availableLocales.map((localeOption) => {
                      const isSelected = locale === localeOption;
                      
                      return (
                        <motion.button
                          key={localeOption}
                          onClick={() => handleLanguageChange(localeOption)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors relative ${
                            isSelected
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted'
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span>{languageNames[localeOption] || localeOption}</span>
                            <div className="flex items-center gap-1">
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                >
                                  <Check className="w-3 h-3" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t text-xs text-muted-foreground text-center">
                    即時切換 • 使用 next-intl
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 