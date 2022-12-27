using LOAF_API.Data;
using LOAF_API.Data.Contexts;
using LOAF_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;


namespace LOAF_API.Controllers
{
    [Route("api/Posts")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly LOAFDbContext _LOAFDbContext;
        public PostsController(LOAFDbContext loafDbContext)
        {
            _LOAFDbContext = loafDbContext;
        }

        // GET: api/Posts
        [HttpGet]
        public async Task<IActionResult> GetAllPosts()
        {
            var posts = await _LOAFDbContext.Posts.ToListAsync();
            return Ok(posts);
        }
        
        // POST api/Posts
        [HttpPost]
        public async Task<IActionResult> AddPost([FromBody] Post post)
        {
            post.Date = System.DateTime.Now.ToString();
            await _LOAFDbContext.Posts.AddAsync(post);
            await _LOAFDbContext.SaveChangesAsync();

            return Ok(post);
        }

        // GET api/Posts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPostById(int id)
        {
            var post = await _LOAFDbContext.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }
    }
}
