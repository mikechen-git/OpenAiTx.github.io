import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

export default function Home() {
  const router = useRouter();
  const [urlParams, setUrlParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // 當路由準備好時，獲取 URL 參數
    if (router.isReady) {
      setUrlParams(router.query as Record<string, string>);
    }
  }, [router.isReady, router.query]);

  const stats = [
    {
      title: "總收入",
      value: "¥45,231.89",
      change: "+20.1%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "用戶數量",
      value: "+2350",
      change: "+180.1%",
      icon: Users,
      trend: "up"
    },
    {
      title: "銷售額",
      value: "+12,234",
      change: "+19%",
      icon: BarChart3,
      trend: "up"
    },
    {
      title: "活躍用戶",
      value: "+573",
      change: "+201",
      icon: Activity,
      trend: "up"
    }
  ];

  const recentActivity = [
    { action: "新用戶註冊", user: "張小明", time: "2 分鐘前" },
    { action: "完成訂單", user: "李小華", time: "5 分鐘前" },
    { action: "上傳文檔", user: "王大偉", time: "10 分鐘前" },
    { action: "更新資料", user: "陳小美", time: "15 分鐘前" },
  ];

  return (
    <Layout>
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight">歡迎使用 NextJS Page</h2>
          <p className="text-muted-foreground">
            這是一個使用 shadcn/ui 和 Lucide React 圖標的示例頁面，現在加入了 Framer Motion 動畫效果！
          </p>
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
                      <span className="text-green-600">{stat.change}</span> 較上月
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
                <CardTitle>概覽</CardTitle>
                <CardDescription>
                  過去 6 個月的收入統計
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
                    <p>圖表區域</p>
                    <p className="text-sm">（這裡可以整合圖表庫）</p>
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
                <CardTitle>最近活動</CardTitle>
                <CardDescription>
                  您的帳戶最近的活動記錄
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

        {/* URL Parameters Section */}
        {Object.keys(urlParams).length > 0 && (
          <>
            <motion.div variants={itemVariants}>
              <Separator />
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Eye className="h-5 w-5" />
                    </motion.div>
                    URL 參數
                  </CardTitle>
                  <CardDescription>
                    從 URL 中檢測到的參數值
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="rounded-lg bg-muted p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <pre className="text-sm font-mono">
                      {JSON.stringify(urlParams, null, 2)}
                    </pre>
                  </motion.div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>嘗試在 URL 後面添加參數，例如：</p>
                    <code className="mt-1 block rounded bg-muted px-2 py-1">
                      ?name=OpenAI&type=demo&lang=zh-TW
                    </code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              下載報告
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              查看文檔
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button variant="secondary">
              <TrendingUp className="mr-2 h-4 w-4" />
              查看分析
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
