using System.Collections.Generic;

namespace Astroshop.Core.Entities
{
    public class UserCartsInfo
    {
        public int UserID { get; set; }
        public int UserBalance { get; set; }
        public List<UserCartElement> UserCart { get; set; }
    }

}