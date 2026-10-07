const kpis = [
  { label: "Monthly revenue", value: "$12.4k", note: "+8.2% this month" },
  { label: "Active users", value: "1,284", note: "72 online today" },
  { label: "Open reviews", value: "18", note: "6 need owner action" },
  { label: "System health", value: "99.9%", note: "All core jobs healthy" }
];

const activity = [42, 58, 50, 74, 68, 83, 92];

const integrations = [
  { name: "Email service", status: "Healthy", tone: "ok" },
  { name: "Payment provider", status: "Healthy", tone: "ok" },
  { name: "Analytics", status: "Review config", tone: "review" },
  { name: "Background jobs", status: "Healthy", tone: "ok" }
];

const users = [
  { name: "Maya Chen", plan: "Pro", status: "Approved", risk: "Low" },
  { name: "Jordan Smith", plan: "Free", status: "Pending", risk: "Medium" },
  { name: "Nora Patel", plan: "Team", status: "Approved", risk: "Low" },
  { name: "Eli Brown", plan: "Free", status: "Needs review", risk: "High" }
];

document.querySelector("#kpis").innerHTML = kpis
  .map(
    (item) => `
      <article class="card">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
        <small>${item.note}</small>
      </article>
    `
  )
  .join("");

document.querySelector("#chart").innerHTML = activity
  .map((value) => `<span style="height: ${value}%"></span>`)
  .join("");

document.querySelector("#integrations").innerHTML = integrations
  .map(
    (item) => `
      <div class="integration">
        <strong>${item.name}</strong>
        <span class="badge ${item.tone}">${item.status}</span>
      </div>
    `
  )
  .join("");

document.querySelector("#users").innerHTML = users
  .map(
    (user) => `
      <tr>
        <td><strong>${user.name}</strong></td>
        <td>${user.plan}</td>
        <td>${user.status}</td>
        <td>${user.risk}</td>
        <td><button>Review</button></td>
      </tr>
    `
  )
  .join("");
