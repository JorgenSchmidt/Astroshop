using System.ComponentModel.DataAnnotations;

namespace Astroshop.Core.Entities
{
    public class User
    {
        [Key]
        public int ID { get; set; }
        public string NickName { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string SecondName { get; set; }
        public string Citizenship { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string LegalLevel { get; set; }
        public bool IsBanned { get; set; }
    }
}