import { DashboardStats } from '@/components/admin';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      this is admin dashboard
      <DashboardStats />
      <Outlet />
    </div>
  );
};

export default Dashboard;