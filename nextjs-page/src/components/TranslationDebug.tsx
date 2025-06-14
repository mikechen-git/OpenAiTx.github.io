import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';

export function TranslationDebug() {
  const { t, locale, loading, allTranslations, getLoadingProgress, changeLanguage } = useTranslation();
  const progress = getLoadingProgress();

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 bg-background border rounded-lg p-4 shadow-lg max-w-sm">
        <h3 className="font-semibold mb-2">翻譯調試信息</h3>
        <p>載入中... {progress.percentage}%</p>
      </div>
    );
  }

  const testLanguageChange = (newLocale: string) => {
    console.log('Debug: Testing language change to', newLocale);
    changeLanguage(newLocale);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-background border rounded-lg p-4 shadow-lg max-w-sm text-sm">
      <h3 className="font-semibold mb-2">翻譯調試信息</h3>
      <div className="space-y-1">
        <p><strong>當前語言:</strong> <span className="text-primary">{locale}</span></p>
        <p><strong>載入狀態:</strong> {loading ? '載入中' : '已完成'}</p>
        <p><strong>已載入語言:</strong> {Object.keys(allTranslations).length}/{progress.total}</p>
        <p><strong>測試翻譯:</strong> {t('nav.home', '預設值')}</p>
        <p><strong>測試翻譯2:</strong> {t('badge.title', '預設標題')}</p>
        <p><strong>時間戳:</strong> {new Date().toLocaleTimeString()}</p>
      </div>
      
      <div className="mt-3 space-y-2">
        <p className="font-semibold">快速測試:</p>
        <div className="flex gap-1 flex-wrap">
          <Button 
            size="sm" 
            variant={locale === 'en' ? 'default' : 'outline'}
            onClick={() => testLanguageChange('en')}
          >
            EN
          </Button>
          <Button 
            size="sm" 
            variant={locale === 'zh-TW' ? 'default' : 'outline'}
            onClick={() => testLanguageChange('zh-TW')}
          >
            繁中
          </Button>
          <Button 
            size="sm" 
            variant={locale === 'zh-CN' ? 'default' : 'outline'}
            onClick={() => testLanguageChange('zh-CN')}
          >
            简中
          </Button>
          <Button 
            size="sm" 
            variant={locale === 'ja' ? 'default' : 'outline'}
            onClick={() => testLanguageChange('ja')}
          >
            日文
          </Button>
        </div>
      </div>
      
      <details className="mt-2">
        <summary className="cursor-pointer">已載入的語言</summary>
        <div className="mt-1 text-xs">
          {Object.keys(allTranslations).join(', ')}
        </div>
      </details>
    </div>
  );
} 