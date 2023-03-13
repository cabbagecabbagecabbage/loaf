namespace LOAF_API.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Tag { get; set; }
        public string Date { get; set; }
        public int Replies {get; set;}

    }
}