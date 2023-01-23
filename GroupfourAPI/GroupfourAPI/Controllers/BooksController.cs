using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GroupfourAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private static List<Book> books = new List<Book>
            {
                new Book {
                    Id = "9b0896fa-3880-4c2e-bfd6-925c87f22878",
                    Name = "CQRS for Dummies FROM WEB API",
                    Reserved = false,
                    BookingId = ""
                },
                new Book {
                    Id= "0550818d-36ad-4a8d-9c3a-a715bf15de76",
                    Name= "Visual Studio Tips",
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
        // GET: api/<BooksController>
        [HttpGet]
        public async Task<ActionResult<List<Book>>> Get()
        {
           
            return Ok(books);
        }   
    }
}
