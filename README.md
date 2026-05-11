# Abdulaziz Thabet — Portfolio

## Tech Stack
- **Backend**: ASP.NET Core 8 (C#)
- **Frontend**: HTML + CSS + Vanilla JavaScript
- **Deployment**: Docker-ready

## Project Structure
```
abdulaziz-portfolio/
├── Controllers/
│   ├── HomeController.cs       # Serves main page
│   └── ContactController.cs    # API: POST /api/contact/send
├── Models/
│   └── ContactForm.cs
├── Services/
│   └── EmailService.cs
├── Views/
│   ├── Shared/_Layout.cshtml
│   └── Home/Index.cshtml
├── wwwroot/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/profile.png
├── Program.cs
├── appsettings.json
├── Dockerfile
└── abdulaziz-portfolio.csproj
```

## Run Locally
```bash
dotnet run
# Open: http://localhost:5000
```

## Configure Email (optional)
في `appsettings.json` حط بياناتك:
```json
"Email": {
  "SmtpUser": "your-gmail@gmail.com",
  "SmtpPass": "your-app-password"
}
```
> استخدم Gmail App Password مش الباسورد العادي

## Deploy to Azure
```bash
az webapp up --name abdulaziz-portfolio --runtime "DOTNET:8.0"
```

## Deploy via Docker
```bash
docker build -t abdulaziz-portfolio .
docker run -p 8080:8080 abdulaziz-portfolio
```

## Deploy to Railway / Render
1. ارفع الكود على GitHub
2. اربطه بـ Railway أو Render
3. هيعمل Build تلقائي من الـ Dockerfile
