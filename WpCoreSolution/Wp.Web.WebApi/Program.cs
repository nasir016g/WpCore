using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;
using System;
using Microsoft.Extensions.Logging;
using Wp.Web.WebApi.Loggers;

namespace Wp.Web.WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
           // Log.Logger = new LoggerConfiguration()
           //.MinimumLevel.Debug()
           //.MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
           //.MinimumLevel.Override("System", LogEventLevel.Warning)
           //.MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Information)
           //.Enrich.FromLogContext()
           //.WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}", theme: AnsiConsoleTheme.Literate)
           //.WriteTo.File(@"C:\home\LogFiles\Application\myapp.txt", fileSizeLimitBytes: 1_000_000, rollOnFileSizeLimit: true, shared: true, flushToDiskInterval: TimeSpan.FromSeconds(1))
           //.CreateLogger();
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
            .ConfigureLogging((hostingContext, logging) =>
            {
                logging.ClearProviders();
                //logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                //logging.AddConsole();
                //logging.AddDebug();
                //logging.AddEventSourceLogger();

                var config = new ColoredConsoleLoggerConfiguration
                {
                    LogLevel = LogLevel.Information,
                    Color = ConsoleColor.Red
                };
                //logging.AddFilter<ColoredConsoleLoggerProvider>("Microsoft", LogLevel.None);
                logging.AddProvider(new ColoredConsoleLoggerProvider(config));
            })
            // .UseSerilog()
            ;
    }
}
