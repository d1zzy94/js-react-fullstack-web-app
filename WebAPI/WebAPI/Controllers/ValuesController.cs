using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        //public IEnumerable<string> Get()
        public HttpResponseMessage Get()
        {
            //return new string[] { "value1", "value2" };
            DataTable dataTable = new DataTable();

            dataTable.Columns.Add("DeepID");
            dataTable.Columns.Add("DeepName");

            dataTable.Rows.Add("IT");
            dataTable.Rows.Add("Support");

            return Request.CreateResponse(HttpStatusCode.OK, dataTable);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
