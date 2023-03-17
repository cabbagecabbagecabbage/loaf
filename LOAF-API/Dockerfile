FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /LOAF-API
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["LOAF-API.csproj", ""]
RUN dotnet restore
COPY . .
WORKDIR "/src/."
RUN dotnet build "LOAF-API.csproj" -c Release -o /LOAF-API/build

FROM build AS publish
RUN dotnet publish "LOAF-API.csproj" -c Release -o /LOAF-API/publish

FROM base AS final
WORKDIR /LOAF-API
COPY --from=publish /LOAF-API/publish .
COPY LOAF.db .
ENTRYPOINT ["dotnet", "LOAF-API.dll"]
