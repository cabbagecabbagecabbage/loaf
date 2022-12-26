using LOAF_API.Models;
using Microsoft.EntityFrameworkCore;

namespace LOAF_API.Data.Contexts
{
    public class LOAFDbContext : DbContext
    {
        public LOAFDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
