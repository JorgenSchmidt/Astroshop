using Astroshop.Core.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Astroshop.Services.Tests
{
    [TestClass]
    public class TokenServiceTests
    {

        public static string[] TranslateUserToMassive (User input)
        {
            string devider = " "; 
            return (input.FirstName + devider
                + input.SecondName + devider
                + input.SurName + devider
                + input.Citizenship + devider
                + input.Phone + devider
                + input.Email + devider
                + input.ID + devider
                + input.Password + devider
                + input.IsBanned.ToString()).Split(devider);
        }

        // Ожидается расшифровка и дешифровка одного и того же объекта
        // Так как составить результат шифрования будет весьма трудно,
        // то проверяем на то, могут ли тестируемые функции при шифровке/дешифровке вернуть один и тот же объект
        //[TestMethod]
        public void GetAndTranslateTokenTest_01()
        {
            User user = new User()
            {
                ID = 1,
                FirstName = "Name",
                SecondName = "SName",
                SurName = "RName",
                Citizenship = "Country",
                Phone = "8-800-000-00-99",
                Email = "mail@mail.ru",
                Password = "ifsduifhd",
                IsBanned = false,
            };
            // Переводим данные из объекта user в массив и проверяем 
            // CollectionAssert.AreEqual(TranslateUserToMassive(user), TranslateUserToMassive(TokenService.TranslateToken(TokenService.GetToken(user))));
        }

        // Проверка метода в случае когда данные не имеют НЕОБЯЗАТЕЛЬНЫХ полей:
        // 1. Гражданство
        // 2. Телефон
        //[TestMethod]
        public void GetAndTranslateTokenTest_02()
        {
            User user = new User()
            {
                ID = 1,
                FirstName = "Name",
                SecondName = "SName",
                SurName = "RName",
                Email = "mail@mail.ru",
                Password = "ifsduifhd",
                IsBanned = false,
            };
            // Переводим данные из объекта user в массив и проверяем 
            // CollectionAssert.AreEqual(TranslateUserToMassive(user), TranslateUserToMassive(TokenService.TranslateToken(TokenService.GetToken(user))));
        }

    }
}