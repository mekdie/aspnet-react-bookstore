using GroupfourAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GroupfourAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private static List<Book> books = new List<Book>
        //add initial data
            {
                new Book {
                    Id = "9b0896fa-3880-4c2e-bfd6-925c87f22878",
                    Name = "CQRS for Dummies FROM WEB API",
                    Reserved = false,
                    BookingId = ""
                },
                new Book {
                    Id= "0550818d-36ad-4a8d-9c3a-a715bf15de76",
                    Name= "Visual Studio Tips from API",
                    Reserved= false,
                    BookingId= "",
                },
                new Book {
                    Id = "8e0f11f1-be5c-4dbc-8012-c19ce8cbe8e1",
                    Name = "NHibernate Cookbook",
                    Reserved = false,
                    BookingId = ""
                }

            };
        private readonly DataContext context;

        //constructor
        public BooksController(DataContext context)
        {
            this.context = context;
        }

        // GET: api/<BooksController>
        [HttpGet]
        public async Task<ActionResult<List<Book>>> Get()
        {
           
           // return Ok(books); //return the mock data from above
            return Ok(await context.Books.ToListAsync()); //change to get from database
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Book>>> Get(string id)
        {
            var book = books.Find(book => String.Equals(book.Id, id));
            if (book == null)
            {
                return BadRequest("Book not found.");
            }

            return Ok(book);
        }


        [HttpPost]
        public async Task<ActionResult<List<Book>>> AddBook(Book book)
        {
            books.Add(book);
            return Ok(books);
        }

        [HttpPut]
        public async Task<ActionResult<List<Book>>> UpdateBook(Book request)
        {
            var book = books.Find(book => String.Equals(book.Id, request.Id));
            if (book == null)
            {
                return BadRequest("Book not found.");
            }
            book.Id = request.Id;
            book.Name = request.Name;
            book.Reserved = request.Reserved;
            book.BookingId = request.BookingId;
            return Ok(books);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Book>>> Delete(String id)
        {
            var book = books.Find(book => String.Equals(book.Id, id));
            if (book == null)
            {
                return BadRequest("Book not found.");
            }
            books.Remove(book);
            return Ok(books);
        }
    }
}
