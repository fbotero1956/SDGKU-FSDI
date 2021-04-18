using Microsoft.EntityFrameworkCore;

namespace Task_Manager.Models{

    public class DataContext : DbContext 
    {

        public DataContext(DbContextOptions<DataContext> conInfo) :base(conInfo)
        {
    /*
            Run migrations everytime something changes on the models

            - dotnet ef migrations add <someName>
            - dotnet ef database update
    */

        }
        // which models to save as tables in the database
        public DbSet<Task> Tasks {get;set;
        }

    }
}