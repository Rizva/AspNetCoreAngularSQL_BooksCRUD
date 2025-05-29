

using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace BooksCRUD.Models
{
    public class Author
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        public DateTime? DeathDate { get; set; }
        public string? Bio { get; set; }
        public string? ImageURL { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public Collection<Book>? Books { get; set; }
    }
}
