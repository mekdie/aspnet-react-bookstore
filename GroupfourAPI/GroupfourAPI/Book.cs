namespace GroupfourAPI
{
    public class Book
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;

        public bool Reserved { get; set; }

        public string BookingId { get; set; } = string.Empty;
    }
}