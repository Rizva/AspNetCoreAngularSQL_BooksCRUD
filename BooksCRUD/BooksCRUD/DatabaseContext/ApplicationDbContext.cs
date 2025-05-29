using BooksCRUD.Models;
using Microsoft.EntityFrameworkCore;

namespace BooksCRUD.DatabaseContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public ApplicationDbContext() { }

        public virtual DbSet<Book> Books { get; set; } = null!;
        public DbSet<Author> Authors { get; set; } = null!;
        public DbSet<Genre> Genres { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Book>(entity =>
            {
                entity.Property(p => p.Title)
                    .IsRequired()
                    .HasMaxLength(100);
                entity.Property(p => p.Isbn)
                    .IsRequired()
                    .HasMaxLength(250);
                entity.Property(p => p.PublicationYear)
                    .IsRequired()
                    .HasMaxLength(250);
                entity.Property(p => p.AuthorID)
                    .IsRequired()
                    .HasMaxLength(250);
                entity.HasOne(a => a.Author)
                    .WithMany(b => b.Books)
                    .HasForeignKey(c => c.AuthorID);
            });

            modelBuilder.Entity<Author>(entity =>
            {
                entity.Property(p => p.Name)
                    .IsRequired()
                    .HasMaxLength(100);
                entity.Property(p => p.BirthDate)
                    .IsRequired()
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<Genre>().HasData(
                new Genre
                {
                    Id = Guid.Parse("5D10EADC-3F83-4F78-A352-A26539B1DA66"),
                    Name = "Fantasy",
                    Description = "Fantasy"
                },
                new Genre
                {
                    Id = Guid.Parse("C0245F65-770B-47F7-80DF-C0D24AB0EBB1"),
                    Name = "Science Fiction",
                    Description = "Science Fiction books"
                },
                new Genre
                {
                    Id = Guid.Parse("FC4099EA-0ACF-4E7B-9F6D-DED42B1C033B"),
                    Name = "Mystery",
                    Description = "Mystery books"
                },
                new Genre
                {
                    Id = Guid.Parse("6AD3C4E1-E215-4BA5-A439-212F70705C19"),
                    Name = "Romance",
                    Description = "Romance books"
                },
                new Genre
                {
                    Id = Guid.Parse("5083C417-95BE-4F23-8D9B-D5193864AD75"),
                    Name = "Horror",
                    Description = "Horror books"
                },
                new Genre
                {
                    Id = Guid.Parse("D304A682-1E0D-4DEA-8D1E-4B6356ACEA14"),
                    Name = "Thriller",
                    Description = "Thriller books"
                },
                new Genre
                {
                    Id = Guid.Parse("63690D99-8BCC-4AC1-84B6-BE1624D62991"),
                    Name = "Non-Fiction",
                    Description = "Non-Fiction books"
                }
            );

        }
    }
}
