using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class TodoContext: DbContext
    {
        public TodoContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TodoItem> Todos { get; set; }
    }
}