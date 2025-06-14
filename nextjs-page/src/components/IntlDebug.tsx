import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useIntlContext } from '@/contexts/IntlProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Zap, Globe } from 'lucide-react';

export function IntlDebug() {
  const t = useTranslations();
  const { locale, changeLocale, availableLocales } = useIntlContext();
  const [testCount, setTestCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const handleQuickTest = (targetLocale: string) => {
    console.log(`IntlDebug: Quick test switching to ${targetLocale}`);
    changeLocale(targetLocale);
    setTestCount(prev => prev + 1);
    setLastUpdate(Date.now());
  };

  const testLocales = ['en', 'zh-TW', 'zh-CN', 'ja', 'ko'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Card className="w-80 shadow-lg border-2 border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-sm font-medium">next-intl 調試面板</CardTitle>
              <CardDescription className="text-xs">即時語言切換測試</CardDescription>
            </div>
            <motion.div
              animate={{ rotate: testCount * 360 }}
              transition={{ duration: 0.5 }}
            >
              <Globe className="h-4 w-4 text-primary" />
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* 當前狀態 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">當前語言:</span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">{locale}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">測試次數:</span>
              <span className="px-2 py-1 border rounded text-xs font-medium">{testCount}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">最後更新:</span>
              <span className="text-muted-foreground">
                {new Date(lastUpdate).toLocaleTimeString()}
              </span>
            </div>
          </div>

          {/* 翻譯測試 */}
          <div className="p-2 bg-muted/50 rounded text-xs">
            <div className="font-medium mb-1">翻譯測試:</div>
            <div>標題: {t('badge.title')}</div>
            <div>描述: {t('badge.description')}</div>
          </div>

          {/* 快速測試按鈕 */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground">快速測試:</div>
            <div className="grid grid-cols-3 gap-1">
              {testLocales.map((testLocale) => (
                <motion.div key={testLocale} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    variant={locale === testLocale ? "default" : "outline"}
                    onClick={() => handleQuickTest(testLocale)}
                    className="w-full text-xs h-7"
                  >
                    {testLocale === locale && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mr-1"
                      >
                        <Zap className="h-3 w-3" />
                      </motion.div>
                    )}
                    {testLocale}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 強制刷新 */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setLastUpdate(Date.now());
                setTestCount(prev => prev + 1);
              }}
              className="w-full text-xs"
            >
              <RefreshCw className="mr-1 h-3 w-3" />
              強制刷新時間戳
            </Button>
          </motion.div>

          <div className="text-xs text-center text-muted-foreground pt-1 border-t">
            使用 next-intl • 即時切換測試
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 