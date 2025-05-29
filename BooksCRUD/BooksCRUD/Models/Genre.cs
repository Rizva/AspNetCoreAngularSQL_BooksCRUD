using System.ComponentModel.DataAnnotations;

namespace BooksCRUD.Models
{
    public class Genre
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
    }
}
