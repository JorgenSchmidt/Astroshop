namespace Astroshop.Core.Enums
{
    public enum UserStatus
    {
        /// <summary>
        /// Has all premisions (but cant ban other admin).
        /// </summary>
        Admin = 0,
        /// <summary>
        /// Has opportunity to ban users with low status than moderator and can write and edit content part (but cant edit commercial).
        /// </summary>
        Moderator = 1,
        /// <summary>
        /// Can write and edit content part.
        /// </summary>
        Editor = 2,
        /// <summary>
        /// Can order products from shop and write feedbacks.
        /// </summary>
        User = 3,
        /// <summary>
        /// Can only read public part of site and write feedbacks.
        /// </summary>
        Guest = 4
    }
}