namespace LOAF_API.Models
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Tag { get; set; }
        public DateTime Date { get; set; }

    }
}
