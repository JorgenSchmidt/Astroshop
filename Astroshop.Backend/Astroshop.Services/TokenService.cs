using System;
using System.Threading.Tasks;
using Astroshop.Core.Entities;

namespace Astroshop.Services
{
    public class TokenService
    {

        private static readonly string devider = "*.-##";

        /// <summary>
        /// Encript User object to Token
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static async Task<string> GetToken (User input)
        {
            var ans = await Task.Run(() =>
            Encript(
                    input.FirstName + devider
                +   input.SecondName + devider
                +   input.SurName + devider
                +   input.Citizenship + devider
                +   input.Phone + devider
                +   input.Email + devider
                +   input.ID + devider
                +   input.Password + devider
                +   input.IsBanned.ToString() + devider
                +   input.LegalLevel + devider
                +   input.NickName

                , input.Password
            ));
            return ans;
        }

        private static string Encript(string input, string password)
        {
            int mainkey = 0;
            int falsekey = 0;
            foreach (char letter in password)
            {
                mainkey += letter + password.Length;
                falsekey += letter;
            }

            string ans = "";
            foreach (var letter in input)
            {
                 ans = ans + Char.ToString(Convert.ToChar(letter + mainkey));
            }
            return ans + Convert.ToChar(mainkey) + Convert.ToChar(falsekey);
        }

        /// <summary>
        /// Decripting Token to User object
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static async Task<User> TranslateToken(string input)
        {
            var fields = await Task.Run(() => Decript(input).Split(devider));
            User user = new User()
            {
                FirstName = fields[0],
                SecondName = fields[1],
                SurName = fields[2],
                Citizenship = fields[3],
                Phone = fields[4],
                Email = fields[5],
                ID = Convert.ToInt32(fields[6]),
                Password = "",
                IsBanned = Convert.ToBoolean(fields[8]),
                LegalLevel = fields[9].ToString(),
                NickName = fields[10],
            };
            return user;
        }
        private static string Decript(string input)
        {
            string translatedstring = "";
            // Делим ввод на основную часть (данные о пользователе), main
            // И на ключи (последние 2 символа), выделять ключи в отдельную переменную смысла не имеет.
            string maininput = input.Substring(0, input.Length - 2);

            foreach (var letter in maininput)
            {
                translatedstring = translatedstring + Char.ToString(Convert.ToChar(letter - input[input.Length - 2]));
            }
            return translatedstring.Substring(0, input.Length - 2);
        }

    }
}