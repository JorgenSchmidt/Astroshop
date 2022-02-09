using Astroshop.Core.Interfaces;
using Astroshop.Data.PostgreeSQL.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace WEB_API
{
    public class Startup
    {
        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IProduct, ProductService>();

            services.AddCors(opt => opt.AddPolicy("Policy",
               builder => builder.AllowAnyHeader()
               .AllowAnyMethod()
               .WithOrigins("*")));
            
            services.AddMvc();
            services.AddControllers();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDeveloperExceptionPage();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("Policy");

            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}
