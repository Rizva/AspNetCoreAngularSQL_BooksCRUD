
using BooksCRUD.DatabaseContext;
using BooksCRUD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Controller;


namespace BooksCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger _logger;

        public AuthorsController(ApplicationDbContext context, ILogger<AuthorsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/BookAuthors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Author>>> GetAuthors()
        {
            return await _context.Authors.ToListAsync();
        }

        // GET: api/BookAuthors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Author>> GetBookAuthors(Guid id)
        {
            var bookAuthors = await _context.Authors.FindAsync(id);

            if (bookAuthors == null)
            {
                return NotFound();
            }

            return bookAuthors;
        }

        // PUT: api/BookAuthors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookAuthors(Guid id, Author bookAuthors)
        {
            if (id != bookAuthors.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookAuthors).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookAuthorsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BookAuthors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Author>> PostBookAuthors(Author bookAuthors)
        {
            _context.Authors.Add(bookAuthors);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookAuthors", new { id = bookAuthors.Id }, bookAuthors);
        }

        // DELETE: api/BookAuthors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookAuthors(Guid id)
        {
            var bookAuthors = await _context.Authors.FindAsync(id);
            if (bookAuthors == null)
            {
                return NotFound();
            }

            _context.Authors.Remove(bookAuthors);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookAuthorsExists(Guid id)
        {
            return _context.Authors.Any(e => e.Id == id);
        }
    }
}
