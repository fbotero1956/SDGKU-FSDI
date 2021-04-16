using Microsoft.AspNetCore.Mvc;
using Task_Manager.Models;
using System.Collections.Generic;

namespace Task_Manager.Controllers{
    public class APIController : Controller
    {
        static List<Task> taskList;
public APIController(){
    if (taskList == null){
        taskList = new List<Task>();
    }
}

public IActionResult Test(){
    return Content("I am the API controller");
}
[HttpPost]
public IActionResult SaveTask([FromBody] Task theTask){
   // System.Console.WriteLine("Save Task Called");
   // System.Console.WriteLine(theTask.Title);
    //assign an ID
    System.Random NextID = new System.Random();

    theTask.Id = NextID.Next(10000);
    // save to DB later
    taskList.Add(theTask);

    //return the object

    return Json(theTask);
}
[HttpGet]
public IActionResult GetTasks(){
    System.Console.WriteLine("Get Task Called");
    return Json(taskList);
}
[HttpDelete]
public IActionResult DeleteTask(string id){
    System.Console.WriteLine("Delete Task Called  " + id);
    
    //var itemToRemove = taskList(r => r.Id == id);
    //taskList.Remove(itemToRemove);
    foreach (Task t in taskList)
    {
        System.Console.WriteLine("Delete Task found  " + t.Id);
    }

    //return the object

    return Content("Deleted");
}
    }
}