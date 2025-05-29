using System.ComponentModel.DataAnnotations;

namespace BooksCRUD.Models
{
    public class Book
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Isbn { get; set; }
        
        public DateTime? PublicationYear { get; set; }
        public string? Description { get; set; }
        public string? ImageURL { get; set; }
        
        //Foreign key property
        public Guid AuthorID { get; set; }

        public Author? Author { get; set; }

    }
}
