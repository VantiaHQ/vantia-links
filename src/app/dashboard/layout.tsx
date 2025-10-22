import { DashboardHeader } from './components/header';
import { DashboardLoader } from './components/dashboard-loader';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="p-4 sm:p-6 lg:p-8 bg-muted/30 flex-1 font-body">
        <DashboardLoader>{children}</DashboardLoader>
      </main>
    </div>
  )
}