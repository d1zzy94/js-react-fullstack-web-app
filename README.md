# js-react-fullstack-web-app
Learn React JS and Web API by creating a Full Stack Web App

# Catalog: `WebAPI/`
### File in project `Web.config`
### Duty: Set the setting for MS SQL database connection using IDE MS Visual Studio 2019:
### What to do:
   1. Open Project `WebAPI` in Visual.
   2. Find `Web.config` file and open it.
   3. Paste code under `</appSettings>` and before `<system.web>`.
```
      <connectionStrings>
        <add name="EmployeeAppDB" connectionString="Data Source=.;Initial Catalog=EmployeeDB;Integrated Security=true" providerName="System.Data.SqlClient" />
      </connectionStrings>
```      
