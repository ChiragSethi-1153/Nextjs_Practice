import React from "react";

const DashboardLayout = ({
  children,
  users,
  revenue,
  notify,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notify: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      {users}
      {revenue}
      {notify}
    </div>
  );
};

export default DashboardLayout;
