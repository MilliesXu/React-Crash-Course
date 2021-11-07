import AddTask from "./AddTask";
import Tasks from "./Tasks";

const MainPage = ({
  showAddTasks,
  addTask,
  tasks,
  deleteTask,
  toggleReminder,
}) => {
  return (
    <>
      {showAddTasks && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </>
  );
};

export default MainPage;
