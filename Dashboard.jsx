import React from "react";

const stats = [
  { title: "Total Users", value: "12,480", change: "+12.5%" },
  { title: "Revenue", value: "$48,290", change: "+8.2%" },
  { title: "Orders", value: "1,842", change: "+6.4%" },
  { title: "Conversion", value: "4.8%", change: "+1.2%" },
];

export default function Dashboard() {
  return (
    <main>
      <header>
        <h1>Admin Dashboard</h1>
        <p>Overview of your business performance and recent activity.</p>
      </header>

      <section>
        {stats.map((stat) => (
          <article key={stat.title}>
            <p>{stat.title}</p>
            <h2>{stat.value}</h2>
            <span>{stat.change}</span>
          </article>
        ))}
      </section>

      <section>
        <h2>Recent Activity</h2>
        <p>New user registered — 5 minutes ago</p>
        <p>Order #1048 completed — 18 minutes ago</p>
        <p>Monthly report generated — 1 hour ago</p>
      </section>
    </main>
  );
}
