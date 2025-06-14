import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { LayoutIntl } from "@/components/LayoutIntl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntlContext } from "@/contexts/IntlProvider";
import { IntlDebug } from "@/components/IntlDebug";
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp,
  Activity,
  DollarSign,
  Download,
  Eye
} from "lucide-react";

// 動畫變體定義
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function IntlTest() {
  const router = useRouter();
  const t = useTranslations();
  const { locale } = useIntlContext();
  const [urlParams, setUrlParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // 當路由準備好時，獲取 URL 參數
    if (router.isReady) {
      setUrlParams(router.query as Record<string, string>);
    }
  }, [router.isReady, router.query]);

  // 使用 useMemo 確保翻譯內容在語言變化時重新計算
  const translatedContent = useMemo(() => ({
    title: t('badge.title'),
    description: t('badge.description'),
    totalRevenue: t('badge.totalRevenue'),
    userCount: t('badge.userCount'),
    sales: t('badge.sales'),
    activeUsers: t('badge.activeUsers'),
    comparedToLastMonth: t('badge.comparedToLastMonth'),
    overview: t('badge.overview'),
    revenueStats: t('badge.revenueStats'),
    chartArea: t('badge.chartArea'),
    chartIntegration: t('badge.chartIntegration'),
    recentActivity: t('badge.recentActivity'),
    accountActivity: t('badge.accountActivity'),
    newUserRegistration: t('badge.newUserRegistration'),
    orderCompleted: t('badge.orderCompleted'),
    documentUploaded: t('badge.documentUploaded'),
    dataUpdated: t('badge.dataUpdated'),
    downloadReport: t('badge.downloadReport'),
    viewDocs: t('badge.viewDocs'),
    viewAnalytics: t('badge.viewAnalytics')
  }), [t, locale]);

  const stats = useMemo(() => [
    {
      title: translatedContent.totalRevenue,
      value: "¥45,231.89",
      change: "+20.1%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: translatedContent.userCount,
      value: "+2350",
      change: "+180.1%",
      icon: Users,
      trend: "up"
    },
    {
      title: translatedContent.sales,
      value: "+12,234",
      change: "+19%",
      icon: BarChart3,
      trend: "up"
    },
    {
      title: translatedContent.activeUsers,
      value: "+573",
      change: "+201",
      icon: Activity,
      trend: "up"
    }
  ], [translatedContent]);

  const recentActivity = useMemo(() => [
    { action: translatedContent.newUserRegistration, user: "張小明", time: "2 分鐘前" },
    { action: translatedContent.orderCompleted, user: "李小華", time: "5 分鐘前" },
    { action: translatedContent.documentUploaded, user: "王大偉", time: "10 分鐘前" },
    { action: translatedContent.dataUpdated, user: "陳小美", time: "15 分鐘前" },
  ], [translatedContent]);

  return (
    <LayoutIntl>
      <motion.div 
        key={locale}
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight">{translatedContent.title}</h2>
          <p className="text-muted-foreground">
            {translatedContent.description}
          </p>
          <div className="mt-2 text-sm text-muted-foreground">
            <strong>當前語言:</strong> {locale} | <strong>使用:</strong> next-intl
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          variants={itemVariants}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="text-2xl font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">{stat.change}</span> {translatedContent.comparedToLastMonth}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-7"
          variants={itemVariants}
        >
          {/* Chart Card */}
          <motion.div
            className="col-span-4"
            variants={cardVariants}
            whileHover="hover"
          >
            <Card>
              <CardHeader>
                <CardTitle>{translatedContent.overview}</CardTitle>
                <CardDescription>
                  {translatedContent.revenueStats}
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <BarChart3 className="mx-auto h-12 w-12 mb-2" />
                    </motion.div>
                    <p>{translatedContent.chartArea}</p>
                    <p className="text-sm">{translatedContent.chartIntegration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="col-span-3"
            variants={cardVariants}
            whileHover="hover"
          >
            <Card>
              <CardHeader>
                <CardTitle>{translatedContent.recentActivity}</CardTitle>
                <CardDescription>
                  {translatedContent.accountActivity}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.user} • {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              {translatedContent.downloadReport}
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              {translatedContent.viewDocs}
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button variant="secondary">
              <TrendingUp className="mr-2 h-4 w-4" />
              {translatedContent.viewAnalytics}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* 調試面板 */}
      <IntlDebug />
    </LayoutIntl>
  );
} 