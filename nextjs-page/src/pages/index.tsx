import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">歡迎使用 NextJS Page</h2>
          <p className="text-muted-foreground">
            這是一個使用 shadcn/ui 和 Lucide React 圖標的示例頁面
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> 較上月
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Chart Card */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>概覽</CardTitle>
              <CardDescription>
                過去 6 個月的收入統計
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <BarChart3 className="mx-auto h-12 w-12 mb-2" />
                  <p>圖表區域</p>
                  <p className="text-sm">（這裡可以整合圖表庫）</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>最近活動</CardTitle>
              <CardDescription>
                您的帳戶最近的活動記錄
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* URL Parameters Section */}
        {Object.keys(urlParams).length > 0 && (
          <>
            <Separator />
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  URL 參數
                </CardTitle>
                <CardDescription>
                  從 URL 中檢測到的參數值
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-4">
                  <pre className="text-sm font-mono">
                    {JSON.stringify(urlParams, null, 2)}
                  </pre>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>嘗試在 URL 後面添加參數，例如：</p>
                  <code className="mt-1 block rounded bg-muted px-2 py-1">
                    ?name=OpenAI&type=demo&lang=zh-TW
                  </code>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            下載報告
          </Button>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            查看文檔
          </Button>
          <Button variant="secondary">
            <TrendingUp className="mr-2 h-4 w-4" />
            查看分析
          </Button>
        </div>
      </div>
    </Layout>
  );
}
