//using LOAF_API.Models;
//using Microsoft.EntityFrameworkCore;

//namespace LOAF_API.Data.Repositories
//{
//    public class PostRepository : IPostRepository
//    {
//        private readonly MyContext _context;

//        public PostRepository(MyContext context)
//        {
//            _context = context;
//        }

//        public void Add(Post post)
//        {
//            _context.Posts.Add(post);
//            _context.SaveChanges();
//        }

//        public Post GetById(int id)
//        {
//            return _context.Posts.FirstOrDefault(p => p.Id == id);
//        }

//        public IEnumerable<Post> GetAll()
//        {
//            return _context.Posts.ToList();
//        }
//    }
//}