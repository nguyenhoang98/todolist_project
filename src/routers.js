import HomePage from "./Pages/HomePage/HomePage";
import TaskPage from "./Pages/TaskPage/TaskPage";

const router = [
  {
    component: () => <HomePage />,
    path: "/",
    exact: true,
  },
  {
    component: () => <TaskPage />,
    path: "/task-page",
    exact: false,
  },
];

export default router;
