using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BooksCRUD.DatabaseContext;
using BooksCRUD.Models;

namespace BooksCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GenresController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/BookGenres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Genre>>> GetGenres()
        {
            return await _context.Genres.ToListAsync();
        }

        // GET: api/BookGenres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Genre>> GetBookGenres(Guid id)
        {
            var bookGenres = await _context.Genres.FindAsync(id);

            if (bookGenres == null)
            {
                return NotFound();
            }

            return bookGenres;
        }

        // PUT: api/BookGenres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookGenres(Guid id, Genre bookGenres)
        {
            if (id != bookGenres.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookGenres).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookGenresExists(id))
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

        // POST: api/BookGenres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Genre>> PostBookGenres(Genre bookGenres)
        {
            _context.Genres.Add(bookGenres);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookGenres", new { id = bookGenres.Id }, bookGenres);
        }

        // DELETE: api/BookGenres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookGenres(Guid id)
        {
            var bookGenres = await _context.Genres.FindAsync(id);
            if (bookGenres == null)
            {
                return NotFound();
            }

            _context.Genres.Remove(bookGenres);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookGenresExists(Guid id)
        {
            return _context.Genres.Any(e => e.Id == id);
        }
    }
}
