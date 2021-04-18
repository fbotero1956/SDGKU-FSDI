using Microsoft.AspNetCore.Mvc;
using Task_Manager.Models;
using System.Collections.Generic;
using System.Linq;

namespace Task_Manager.Controllers{
    public class APIController : Controller
    {
        static List<Task> taskList;
        DataContext dbContext;
public APIController(DataContext db){
    if (taskList == null){
        taskList = new List<Task>();
    }
    dbContext = db;

}

public IActionResult Test(){
    return Content("I am the API controller");
}
[HttpPost]
public IActionResult SaveTask([FromBody] Task theTask){

    //assign an ID
    //System.Random NextID = new System.Random();

    //theTask.Id = NextID.Next(10000);
    // save to DB later
    dbContext.Tasks.Add(theTask);
    dbContext.SaveChanges();

    taskList.Add(theTask);



    //return the object

    return Json(theTask);
}
[HttpGet]
public IActionResult GetTasks(){
    var taskList = dbContext.Tasks.ToList();
    return Json(taskList);
}
[HttpDelete]

public IActionResult DeleteTask(int id){
    System.Console.WriteLine(" in Delete function" + id);
    foreach (Task ti in taskList)
    {
        if (ti.Id == id) {
            taskList.Remove(ti);
            return Content ("ok");
        }
    }
    // find the task with id
    Task t = dbContext.Tasks.Find(id);
    if (t == null)
    {
        return NotFound();
    }
    dbContext.Tasks.Remove(t);
    dbContext.SaveChanges();

    //return the object
    return Ok();
}
    }
}